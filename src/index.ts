interface AnimateIntoViewSettings {
	selector: string;
	threshold: number;
	type: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight'
}
export function animateIntoView(settings: AnimateIntoViewSettings): void {
	const elements: NodeListOf<Element> = document.querySelectorAll(settings.selector);
	const options: { threshold: number } = {
		threshold: settings.threshold
	};

	[...elements].forEach(function(element: Element) {
		element.classList.add('animate');
		observer.observe(element);
	});

	const observer = new IntersectionObserver(function(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if(entry.isIntersecting) {
				entry.target.classList.add('animate--visible');
				entry.target.classList.add(`animate--${settings.type}`);
				entry.target.classList.remove('animate');
				observer.unobserve(entry.target);
			}
		});
	}, options);
}
