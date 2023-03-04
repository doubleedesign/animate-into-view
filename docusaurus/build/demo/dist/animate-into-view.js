export function animateIntoView(settings) {
    const elements = document.querySelectorAll(settings.selector);
    const options = {
        threshold: settings.threshold ? settings.threshold : 0.75
    };
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aiv-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    [...elements].forEach(function (element) {
        // Detect if a custom selector has been passed in, and apply the relevant classes
        if (settings.selector !== '.animate-into-view') {
            element.classList.add('animate-into-view');
            if (settings.type) {
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
// This is for the basic CSS and SCSS implementations
document.addEventListener('DOMContentLoaded', function () {
    animateIntoView({
        selector: '.animate-into-view',
        threshold: 0.75
    });
});
