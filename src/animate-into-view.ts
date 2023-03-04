interface AnimateIntoViewSettings {
	selector: string;
	threshold: number;
	//type: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight'
}
export function animateIntoView(settings: AnimateIntoViewSettings): void {
	const elements: NodeListOf<Element> = document.querySelectorAll(settings.selector);
	const options: { threshold: number } = {
		threshold: settings.threshold
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
		observer.observe(element);
	});
}

document.addEventListener('DOMContentLoaded', function() {
	animateIntoView({
		selector: '.animate-into-view',
		threshold: 0.75
	});
});
