# animate-into-view

Yet another CSS animation library.

**Uses IntersectionObservers and CSS animations to have page elements make grand entrances.**

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
You can use SCSS mixins instead of putting classes in your HTML, except for `animate-into-view` as that's what triggers the `IntersectionObserver`. (Use in combination with the JS option below to use entirely your own selectors instead). This can keep your HTML a bit cleaner, as well as give you more options such as applying different animations at different breakpoints using media queries.

Example:
```html
<section class="module module__copy animate-into-view">
    <div class="container container--narrow">
        <h2>They don’t know that we know they know we know.</h2>
        <p>You can't just give up. Is that what a dinosaur would do? I just stopped and I said, what if I don't want to be a shoe? What if I want to be a
            purse, you know, or a hat? Santa, the armadillo and I will have a little talk in the kitchen. There's a sentence I never thought I'd say. What
            was I thinking at dinner? "Do you want soup or salad?" Both! Always order both!</p>
        <p>That's a lot of information to get in 30 seconds. I wanna quit the gym! You know what I figure? If I can do laundry, there's nothing I can’t do. I
            understand why Superman is here, but why is there a porcupine at the Easter Bunny's funeral? They don’t know that we know they know we know. Welcome to
            the real world! It sucks. You're gonna love it! I'm a gym member. I try to go four times a week, but I've missed the last twelve hundred times.</p>
        <p>We were on a break! They're as different as night and...later that night. Look at me! I'm Chandler! Could I BE wearing any more clothes? You have really
            great hair. Oh thanks, I grow it myself. </p>
    </div>
</section>
```
```scss
@import 'path/to/animate-into-view/src/mixins';

// Basic
.module {
    
    &__copy {
        @include animate(fadeIn);
    }
}
```

```scss
@import 'path/to/animate-into-view/src/mixins';

// With media query to change the animation at a set breakpoint
.module {
    
    &__copy {
        @include animate(fadeIn);
        
        @media only screen and (min-width: 600px) {
            @include animate(fadeInUp);
        }
    }
}
```


### With JS
This option allows you to apply animations using your own selectors, rather than manually adding classes to your HTML. This option also allows you to customise the intersection threshold (i.e., how much of the element needs to be visible for the animation to run) on a per-selector basis.

This works by dynamically adding the same classes used in the CSS/SCSS options, i.e., `animate-into-view` and `aiv-[animation]` to start with, and `aiv-visible` when the element scrolls into view. So if you don't want classes added  to your HTML _at all_, this isn't that (...yet, anyway). 

1. Create a JavaScript file (if you don't already have one that you want to add this to).

2. In your HTML, include either the provided CSS file or your own built using the SCSS instructions above, plus your JS file.
```html
<link href="path/to/animate-into-view/dist/animate-into-view.css" rel="stylesheet"/>
<script src="path/to/your-script.js" type="module"></script>
```

3. In your JavaScript file, import `animateIntoView` and call it where appropriate, passing in an `AnimateIntoViewSettings` object:

```typescript
// Settings object options
interface AnimateIntoViewSettings {
    selector: string; // required; can use multiple comma-separated selectors just like in CSS
    threshold?: number; // optional; defaults to 0.75
    type?: 'fadeIn' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight' // optional; defaults to fadeIn
}
```

Example:

```html
<section class="module module__call-to-action">
    <div class="container">
        <div class="module module__call-to-action__inner">
            <h2>So it seems like this internet thing is here to stay.</h2>
            <p>Just to be clear, comedy with the plates will not be well-received.</p>
            <a class="btn" href="#">Button to nowhere</a>
        </div>
    </div>
</section>
```

```javascript
import { animateIntoView } from "path/to/animate-into-view.js";

document.addEventListener('DOMContentLoaded', function() {
    animateIntoView({
        selector: '.module__call-to-action',
        threshold: 0.75,
        type: 'fadeInUp'
    });
});
```

## Accessibility
For users with [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) enabled, all animations are turned off by default.

## Credits
Animation CSS has been drawn from [Animate.css](https://animate.style). 

_Please note that this is not a complete alternative implementation of that library. Not all of its animations are available, nor are its utility classes. Only the CSS code for the implementation of selected animations themselves have been copied and/or adapted for use in Animate-Into-View. AIV is not intended to extend existing libraries like this out of the box; but you could potentially do so by using the `.animate-into-view` class (which triggers the JS to add `aiv-visible` when the element is visible in the viewport) and tweaking/overriding the relevant CSS yourself._
