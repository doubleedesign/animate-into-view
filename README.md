# animate-into-view

Yet another CSS animation library.

**Using IntersectionObserver and CSS animations to have page elements make grand entrances.**

- [Basic usage](#basic-usage)
  - [Add your own animations](#add-your-own-animations)
  - [Override animation settings](#override-animation-settings)
- [Advanced usage](#advanced-usage)
  - [With SCSS](#with-scss)
  - [With JS](#with-js)
- [Accessibility](#accessibility)
- [Credits](#credits)

## Introduction

Animate-Into-View uses JavaScript [Intersection Observers](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) to detect when an element (or set amount of an element) is visible in the viewport and adds the `aiv-visible` class, which is in turn used to apply CSS animations to the element.

The currently available animations fall into two broad categories:
- **Fade-ins**: Animates opacity from 0 to 1, and position for all except `fadeIn` (e.g., `fadeInLeft` has the element start off to the left of its final position).
- **Slide-ins**: Animates position only. 

Available animations are `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`, `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`.

## Basic Usage

This method uses the default `threshold` of 0.75, meaning the animation will be triggered when 75% of the element is visible in the viewport.

1. Add the CSS and JS to your page.
```html
<link href="path/to/animate-into-view.css" rel="stylesheet"/>
<script src="path/to/animate-into-view.js" type="module"></script>
```
2. Add `animate-into-view` and `aiv-`classes to the element(s) you want to animate in.
```html
<section class="animate-into-view aiv-fadeIn">
    <p>Some content</p>
</section>
```

You can adjust the duration of the animation by overriding the `animation-duration` property in `.animate-into-view` in your own CSS.

### Add your own animations
Add your own animations in your CSS by creating the relevant animation and `aiv-` class. Below is an example of how `fadeIn` works:

```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.animate-into-view.aiv-visible.aiv-fadeIn {
    animation-name: fadeIn;
}
```
Essential styles are applied to `.animate-into-view` and `.aiv-visible` (the latter is added by the JavaScript), so you must still add the `animate-into-view` class to the element for your custom animation to work.

### Override animation settings
You can also add overrides in your CSS, for example to change the animation duration or add a delay:
```css
/** Globally **/
.animate-into-view {
    animation-duration: 1s; /* Default is 1s*/
    animation-delay: 0.3s; /* No delay by default, add yours here if desired */
}

/** To a specific-element **/
.foo {
    animation-duration: 1s; /* Default is 1s*/
    animation-delay: 0.3s; /* No delay by default, add yours here if desired */
}
```

## Advanced usage

### With SCSS
> Still to come.

You will be able to SCSS mixins instead of putting classes in your HTML. This can keep your HTML a bit cleaner, as well as give you more options such as applying different animations at different breakpoints using media queries.

### With JS
> Still to come.

You will be able to apply animations without adding anything to your HTML, by using your own selectors. This option also allows you to customise the intersection threshold (i.e., how much of the element needs to be visible for the animation to run) on a per-selector basis.

## Accessibility
For users with [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) enabled, all animations are turned off by default.

## Credits
Animation CSS has been drawn from [Animate.css](https://animate.style). 

_Please note that this is not a complete alternative implementation of that library. Not all of its animations are available, nor are its utility classes. Only the CSS code for the implementation of selected animations themselves have been copied and/or adapted for use in Animate-Into-View. AIV is not intended to extend existing libraries like this out of the box; but you could potentially do so by using the `.animate-into-view` class (which triggers the JS to add `aiv-visible` when the element is visible in the viewport) and tweaking/overriding the relevant CSS yourself._
