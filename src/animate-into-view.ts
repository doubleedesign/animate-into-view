interface AnimateIntoViewSettings {
	selector: string;
	threshold?: number;
	type?: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | string;
}

export function animateIntoView(settings: AnimateIntoViewSettings): void {
	const elements: NodeListOf<Element> = document.querySelectorAll(settings.selector);
	const options: { threshold: number } = {
		threshold: settings.threshold ? settings.threshold : 0.75
	};

	const observer = new IntersectionObserver(function(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if(entry.isIntersecting) {
				entry.target.classList.add('aiv-visible');
				observer.unobserve(entry.target);
			}
		});
	}, options);

	[...elements].forEach(function(element: Element) {
		// Detect if a custom selector has been passed in, and apply the relevant classes
		if(settings.selector !== '.animate-into-view') {
			element.classList.add('animate-into-view');
			if(settings.type) {
				element.classList.add(`aiv-${settings.type}`);
			}
			else {
				element.classList.add(`aiv-fadeIn`);
				console.warn(`No animation type specified for ${settings.selector}. Defaulted to fadeIn.`);
			}
		}

		observer.observe(element);
	});
}

export function animateIntoViewV2(settings: AnimateIntoViewSettings): void {
    const elements: NodeListOf<Element> = document.querySelectorAll(settings.selector);
    const options: { threshold: number } = {
        threshold: settings.threshold ? settings.threshold : 0.75
    };

    const observer = new IntersectionObserver(function(entries: IntersectionObserverEntry[]) {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if(entry.isIntersecting) {
                entry.target.setAttribute('data-animation-state', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    [...elements].forEach(function(element: Element) {
        observer.observe(element);

        // Clean up the HTML after the animation has completed
        element.addEventListener('animationend', () => {
            element.removeAttribute('data-animate-into-view');
            element.removeAttribute('data-animation-state');
            element.removeAttribute('data-animation-threshold');
        });
    });
}

// This is for the data attribute implementation introduced in V2
// TODO: Document this in Docusaurus site
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-animate-into-view]');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReducedMotion) {
        elements.forEach((element) => {
            element.removeAttribute('data-animate-into-view');
            element.removeAttribute('data-animation-state');
            element.removeAttribute('data-animation-threshold');
        });

        return;
    }

    elements.forEach((element) => {
        const animationType = element.getAttribute('data-animate-into-view');
        if(!animationType) return;

        const threshold = element.getAttribute('data-animation-threshold') ? parseFloat(element.getAttribute('data-animation-threshold') as string) : 0.75;

        animateIntoViewV2({
            selector: `[data-animate-into-view='${animationType}']`,
            type: animationType,
            threshold: threshold
        } as AnimateIntoViewSettings);
    });
});

// This is for the basic CSS and SCSS implementations from V1
document.addEventListener('DOMContentLoaded', function() {
	animateIntoView({
		selector: '.animate-into-view',
		threshold: 0.75
	});
});
