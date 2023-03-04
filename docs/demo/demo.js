import { animateIntoView } from "./dist/animate-into-view.js";

document.addEventListener('DOMContentLoaded', function() {
	animateIntoView({
		selector: '.site-header',
		threshold: 0.75,
		type: 'slideInDown'
	});

	animateIntoView({
		selector: '.module__hero__image, .module__copy',
		threshold: 0.75,
		type: 'fadeIn'
	});

	animateIntoView({
		selector: '.module__hero__copy',
		threshold: 0.75,
		type: 'fadeInRight'
	});

	animateIntoView({
		selector: '.module__copy-image--even .module__copy-image__image, .module__copy-image--odd .module__copy-image__copy',
		threshold: 0.75,
		type: 'fadeInLeft'
	});

	animateIntoView({
		selector: '.module__copy-image--odd .module__copy-image__image, .module__copy-image--even .module__copy-image__copy',
		threshold: 0.75,
		type: 'fadeInRight'
	});

	animateIntoView({
		selector: '.module__call-to-action',
		threshold: 0.75,
		type: 'fadeInUp'
	});

	animateIntoView({
		selector: '.site-footer',
		threshold: 0.75,
		type: 'slideInUp'
	});
});
