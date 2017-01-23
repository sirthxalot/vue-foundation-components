[Vue-Foundation-Components](https://github.com/sirthxalot/vue-foundation-components)
=====================================================================================

[![Author: Alexander Bösch](https://img.shields.io/badge/author-alexander%20b%C3%B6sch-242424.svg)](https://github.com/sirthxalot)
![Category: Vue Component](https://img.shields.io/badge/category-vue--component-blue.svg)
[![GitHub issues](https://img.shields.io/github/issues/sirthxalot/vue-foundation-components.svg)](https://github.com/sirthxalot/vue-foundation-components/issues)
[![GitHub forks](https://img.shields.io/github/forks/sirthxalot/vue-foundation-components.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/sirthxalot/vue-foundation-components)
[![GitHub stars](https://img.shields.io/github/stars/sirthxalot/vue-foundation-components.svg?style=social&label=Star&maxAge=2592000)](https://github.com/sirthxalot/vue-foundation-components)

The Vue-Foundation-Components are a collection of [Vue components](https://vuejs.org/guide/components.html)
based on the [Foundation for Sites 6](http://foundation.zurb.com/sites/docs/)
frontend framework. They allow you to use the Foundation Framework in a even
handier way by using the Foundation terminology directly in your markup. Write
your code in a more readable way by fresh up the default markup with a more
descriptive syntax.

## Simple Example
             
```html
<dropdown text="DropDown">
Simple dropdown
</dropdown>
```

will generate something like the following markup for you:

```html
<button class="button" type="button" data-toggle="dropdown-1">Dropdown</button>
<div class="dropdown-pane" id="dropdown-1" data-dropdown="" data-hover="true" data-hover-pane="true">
  Simple dropdown
</div>
```

You will find more examples within the `examples/` directory, so you definitely
have to check this out.

## Components

* [Accordion](https://github.com/sirthxalot/vue-foundation-components/wiki/Accordion-Component)
* [Badge](https://github.com/sirthxalot/vue-foundation-components/wiki/Badge-Component)
* [Callout](https://github.com/sirthxalot/vue-foundation-components/wiki/Callout-Component)
* [Carousel](https://github.com/sirthxalot/vue-foundation-components/wiki/Carousel-Component)
* [DropDown](https://github.com/sirthxalot/vue-foundation-components/wiki/DropDown-Component)
* [Modal](https://github.com/sirthxalot/vue-foundation-components/wiki/Modal-Component)
* [Sticker](https://github.com/sirthxalot/vue-foundation-components/wiki/Sticker-Component)
* [Thumbnail](https://github.com/sirthxalot/vue-foundation-components/wiki/Thumbnail-Component)
* [Tooltip](https://github.com/sirthxalot/vue-foundation-components/wiki/Tooltip-Component)

## How to Install?

You can use [NPM](https://www.npmjs.com/), in order to install the Vue-Foundation-Components.
Open your command line and run the following command:

```powerShell
npm install sirthxalot/vue-foundation-components --save
```

This command will download the Vue-Foundation-Components into your `node_modules/`,
directory where all local NPM dependencies will be found.

## Getting Started

Vue-Foundation-Components is a single javascript file (see: `dist/foundation.components.js`)
which contain all components you will need, but it has it requirements. Vue-Foundation-Components
will need three (3) libraries in order to work smooth:

* **You have to implement [Vue.js](https://vuejs.org/)** into your website **before loading** the **components**.
* **You have to implement [Motion UI](http://zurb.com/playground/motion-ui)** into your website **before loading** the **components**.
* **You have to implement [Foundation Sites](http://foundation.zurb.com/sites/docs/pagination.html)** into your website **before loading the components**.

I assume that you already implemented these requirements within your web project,
before you start using the Vue Foundation Components. Next I would like to show
you the typical starter template for Vue-Foundation-Components:

### HTML Starter Template

```html
<!doctype html>
<html class="no-js" lang="en">
<head>
    <!-- Required Meta Tagging for Foundation Sites -->
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Required Meta Tagging for Foundation Sites -->
    
	<title>Document Title</title>

    <!-- Link to Stylesheets -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.3/foundation.min.css" type="text/css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/motion-ui/1.2.2/motion-ui.min.css" type="text/css" rel="stylesheet" />
    <!-- Link to Stylesheets -->

</head>
<body>

	...
	
	<!-- Load Vue and Vue Components -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js"></script>
	<script src="js/foundation.components.min.js"></script>
	<!-- Load Vue and Vue Components -->
	
	<!-- Load jQuery, What Input, Motion-UI, Foundation for Sites -->
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"
			integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
			crossorigin="anonymous"
	></script>
	<script src="https://cdn.jsdelivr.net/what-input/2.1.1/what-input.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/motion-ui/1.2.2/motion-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.3/foundation.min.js"></script>
	<script>
		// Initialize Foundation Components
		$(document).foundation();
	</script>
	<!-- Load jQuery, What Input, Motion-UI, Foundation for Sites -->
</body>
</html>
```

This is how the typical starter template will look like for using Vue-Foundation-Components.
As you can see I have solved most of the requirements using CDN links. You can copy
this starter template and start using the components after grabbing the `dist/foundation.components.min.js`
file and put it into the `js` directory. That's it Folks - You should be ready to
go!

## Need Further Help

Please take a look at the [official documentation](https://github.com/sirthxalot/vue-foundation-components/wiki), 
in order to receive further information about Vue-Foundation-Components. It will guide you 
through all the basics and is the defacto educational resource specifically for 
any Vue-Foundation-Components beginner. 

If you have a question, want to report any bug or have any other issue, than please 
do not hesitate to use the [issue tracker](https://github.com/sirthxalot/vue-foundation-components/issues). 
Here you will find any tickets, questions and many more, related to Vue-Foundation-Components.

## Browser Support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## License

The code is available under the [MIT-License](license.md).
