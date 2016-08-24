/**
 * Vue Components
 * ========================================================================
 *
 * This file contain all vue components we had generated for this project.
 * Here we are going to define which component should be loaded and what
 * kind of data they will receive.
 *
 * @link https://vuejs.org/guide/components.html
 *
 * @package   Src\Js
 * @author    Alexander Bösch - <sirthxalot.dev@gmail.com>
 * @copyright (c) 2016, Alexander Bösch - All rights reserved.
 */

import Accordion from "./components/Accordion.vue";
import Alert from "./components/Alert.vue";
import Badge from "./components/Badge.vue";
import Callout from "./components/Callout.vue";
import Carousel from "./components/Carousel.vue";
import Dropdown from "./components/Dropdown.vue";
import Info from "./components/Info.vue";
import Message from "./components/Message.vue";
import Pane from "./components/Pane.vue";
import Slide from "./components/Slide.vue";
import SlideContainer from "./components/Slide-Container.vue";
import SlideNext from "./components/Slide-Next.vue";
import SlidePrevious from "./components/Slide-Previous.vue";
import PaneTitle from "./components/Pane-Title.vue";
import PaneContent from "./components/Pane-Content.vue";
import Success from "./components/Success.vue";
import Warning from "./components/Warning.vue";

new Vue({
    el: 'body',

    components: {
        Accordion,
        Badge,
        Callout, Info, Alert, Warning, Success, Message,
        Carousel, Slide, SlideContainer, SlidePrevious, SlideNext,
        Dropdown,
        Pane, PaneTitle, PaneContent,
    }
});
