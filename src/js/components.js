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

import Accordion from "../components/Accordion.vue";
import Pane from "../components/Pane.vue";
import PaneTitle from "../components/Pane-Title.vue";
import PaneContent from "../components/Pane-Content.vue";

new Vue({
    el: 'body',

    components: {
        Accordion,
        Pane, PaneTitle, PaneContent,
    }
});
