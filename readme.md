[Vue Foundation Components](https://github.com/sirthxalot/vue-foundation-components)
=====================================================================================


[![Author: Alexander Bösch](https://img.shields.io/badge/author-alexander%20b%C3%B6sch-242424.svg)](https://github.com/sirthxalot)
![Category: Vue Component](https://img.shields.io/badge/category-vue--component-blue.svg)
[![GitHub issues](https://img.shields.io/github/issues/sirthxalot/vue-foundation-components.svg)](https://github.com/sirthxalot/vue-foundation-components/issues)
[![GitHub forks](https://img.shields.io/github/forks/sirthxalot/vue-foundation-components.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/sirthxalot/vue-foundation-components)
[![GitHub stars](https://img.shields.io/github/stars/sirthxalot/vue-foundation-components.svg?style=social&label=Star&maxAge=2592000)](https://github.com/sirthxalot/vue-foundation-components)


The Vue Foundation Components are a collection of [Vue components](https://vuejs.org/guide/components.html) based on the 
[Foundation for Sites 6](http://foundation.zurb.com/sites/docs/) frontend framework. They allow you to use the Foundation 
Framework in a even handier way by using the Foundation terminology directly in your markup. Write your code in a more 
readable way by fresh up the default markup with a more descriptive syntax.


## Simple Example
             
```html
<slider start="50" end="200"></slider>
```

will generate the following markup for you:

```html
 <div class="slider" data-slider data-initial-start="50" data-end="200">
   <span class="slider-handle" data-slider-handle="" role="slider" tabindex="1"></span>
   <span class="slider-fill" data-slider-fill></span>
   <input type="hidden">
 </div>
```


## Components

* [Accordion](https://github.com/sirthxalot/vue-foundation-components/wiki/Accordion-Component)
* [Badge](https://github.com/sirthxalot/vue-foundation-components/wiki/Badge-Component)
* [Callout](https://github.com/sirthxalot/vue-foundation-components/wiki/Callout-Component)
* [Carousel](https://github.com/sirthxalot/vue-foundation-components/wiki/Carousel-Component)
* [DropDown](https://github.com/sirthxalot/vue-foundation-components/wiki/DropDown-Component)
* [Media-Object](https://github.com/sirthxalot/vue-foundation-components/wiki/Media-Object-Component)
* [Menu](https://github.com/sirthxalot/vue-foundation-components/wiki/Menu-Component)
* [Modal](https://github.com/sirthxalot/vue-foundation-components/wiki/Modal-Component)
* [Progress Bar](https://github.com/sirthxalot/vue-foundation-components/wiki/Progress-Bar-Component)
* [Slider](https://github.com/sirthxalot/vue-foundation-components/wiki/Slider-Component)
* [Sticker](https://github.com/sirthxalot/vue-foundation-components/wiki/Sticker-Component)
* [Tabs](https://github.com/sirthxalot/vue-foundation-components/wiki/Tabs-Component)
* [Thumbnail](https://github.com/sirthxalot/vue-foundation-components/wiki/Thumbnail-Component)
* [Tooltip](https://github.com/sirthxalot/vue-foundation-components/wiki/Tooltip-Component)


## Getting Started

Vue Foundation Components is a single javascript file (see: `dist/foundation.components.js`) which contains all components 
you will need, but it has it requirements. Vue Foundation Components will need three (3) libraries in order to work smooth:

* **You have to implement [Vue.js](https://vuejs.org/)** into your website **before loading** the **components**.
* **You have to implement [Motion UI](http://zurb.com/playground/motion-ui)** into your website **before loading** the **components**.
* **You have to implement [Foundation Sites](http://foundation.zurb.com/sites/docs/pagination.html)** into your website **before loading the components**.

All these files are available at the `dist/` directory so you do not have to download them manually. If you already 
integrate them into your website, than great just grab and implement the `dist/foundation.components.js` file into your 
website and you are done.

### HTML Starter Template

```html
<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document Title</title>
	<link rel="stylesheet" href="css/common.css" />
</head>
<body>

	...
	
	<!-- Load Vue and Vue Components -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js"></script>
	<script src="js/foundation.components.min.js"></script>
	<!-- Load Vue and Vue Components -->
	
	<!-- Load jQuery, What Input, Motion-UI, Foundation for Sites -->
	<script src="js/common.js"></script>
	<!-- Load jQuery, What Input, Motion-UI, Foundation for Sites -->
</body>
</html>
```

### common.css

First I would like to mention the link in the head of our HTML Starter Template. Here we are going to link to the 
`common.css` stylesheet, which could be found at: `dist/css/common.css`. This stylesheet contain the Foundation for 
Sites and the Motion UI styles:

* Stylesheet Motion UI
* Stylesheet Foundation for Sites

### common.js

The `common.js` javascript, which could be found at: `dist/js/common.js` is a merged javascript of jQuery, Vue.js, 
What Input, Motion UI and the Foundation for Sites javascript.

* jQuery (v.1.12.4)
* What Input
* Motion UI (javascript)
* Foundation for Sites (javascript)

### foundation.components.js

Last but not least the most important javascript (`foundation.components.js`), which could be found at: `dist/foundation.components.js`. 
This file contain the components and will be the only thing you have to implement when you already setup Foundation 
for Sites, Motion UI and Vue.js in your web project.


## Need Further Help

Please take a look at the [official documentation](https://github.com/sirthxalot/vue-foundation-components/wiki), 
in order to receive further information about Vue Foundation Components. It will guide you 
through all the basics and is the defacto educational resource specifically for 
any Vue Foundation Components beginner. 

If you have a question, want to report any bug or have any other issue, than please 
do not hesitate to use the [issue tracker](https://github.com/sirthxalot/vue-foundation-components/issues). 
Here you will find any tickets, questions and many more, related to Vue Foundation Components.


## Browser Support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions


## License

The code is available under the [MIT license](license.md).
