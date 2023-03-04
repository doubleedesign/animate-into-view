export function animateIntoView(settings) {
    const elements = document.querySelectorAll(settings.selector);
    const options = {
        threshold: settings.threshold
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
        observer.observe(element);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    animateIntoView({
        selector: '.animate-into-view',
        threshold: 0.75
    });
});
