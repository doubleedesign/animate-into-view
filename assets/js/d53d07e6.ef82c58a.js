"use strict";(self.webpackChunkaiv_docs=self.webpackChunkaiv_docs||[]).push([[476],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={slug:"basic-usage",sidebar_position:3},o="Basic usage: CSS classes",s={unversionedId:"basic",id:"basic",title:"Basic usage: CSS classes",description:"Get up and running quickly by linking the provided CSS and adding classes the HTML elements you wish to animate in.",source:"@site/docs/basic.mdx",sourceDirName:".",slug:"/basic-usage",permalink:"/animate-into-view/basic-usage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"basic-usage",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/animate-into-view/"},next:{title:"Advanced usage: SCSS",permalink:"/animate-into-view/scss-usage"}},l={},d=[{value:"Add your own animations",id:"add-your-own-animations",level:3},{value:"Override animation settings",id:"override-animation-settings",level:3}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-usage-css-classes"},"Basic usage: CSS classes"),(0,i.kt)("p",null,"Get up and running quickly by linking the provided CSS and adding classes the HTML elements you wish to animate in."),(0,i.kt)("p",null,"This method uses the default ",(0,i.kt)("inlineCode",{parentName:"p"},"threshold")," of 0.75, meaning the animation will be triggered when 75% of the element is visible in the viewport."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the CSS and JS to your page.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link href="path/to/animate-into-view.css" rel="stylesheet"/>\n<script src="path/to/animate-into-view.js" type="module"><\/script>\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"animate-into-view")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"aiv-")," classes to the element(s) you want to animate in.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<section class="animate-into-view aiv-fadeIn">\n    <p>Some content</p>\n</section>\n')),(0,i.kt)("p",null,"You can adjust the duration of the animation by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"animation-duration")," property in ",(0,i.kt)("inlineCode",{parentName:"p"},".animate-into-view")," in your own CSS."),(0,i.kt)("h3",{id:"add-your-own-animations"},"Add your own animations"),(0,i.kt)("p",null,"Add your own animations in your CSS by creating the relevant animation and ",(0,i.kt)("inlineCode",{parentName:"p"},"aiv-")," class. Below is an example of how ",(0,i.kt)("inlineCode",{parentName:"p"},"fadeIn")," works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.animate-into-view.aiv-visible.aiv-fadeIn {\n    animation-name: fadeIn;\n}\n")),(0,i.kt)("p",null,"Essential styles are applied to ",(0,i.kt)("inlineCode",{parentName:"p"},".animate-into-view")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".aiv-visible")," (the latter is added by the JavaScript), so you must still add the ",(0,i.kt)("inlineCode",{parentName:"p"},"animate-into-view")," class to the element for your custom animation to work."),(0,i.kt)("h3",{id:"override-animation-settings"},"Override animation settings"),(0,i.kt)("p",null,"You can also add overrides in your CSS, for example to change the animation duration or add a delay:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/** Globally **/\n.animate-into-view {\n    animation-duration: 1s; /* Default is 1s*/\n    animation-delay: 0.3s; /* No delay by default, add yours here if desired */\n}\n\n/** To a specific-element **/\n.foo {\n    animation-duration: 1s; /* Default is 1s*/\n    animation-delay: 0.3s; /* No delay by default, add yours here if desired */\n}\n")))}p.isMDXComponent=!0}}]);