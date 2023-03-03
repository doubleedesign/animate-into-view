export function animateIntoView(settings) {
    const elements = document.querySelectorAll(settings.selector);
    const options = {
        threshold: settings.threshold
    };
    [...elements].forEach(function (element) {
        element.classList.add('animate');
        observer.observe(element);
    });
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate--visible');
                entry.target.classList.add(`animate--${settings.type}`);
                entry.target.classList.remove('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);
}
