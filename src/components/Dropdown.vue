<template>
    <button class="button" type="button" data-toggle="dd_{{ _uid }}">{{ text }}</button>
    <div class="dropdown-pane" :class="position" id="dd_{{ _uid }}" data-dropdown="">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['text', 'position']
};
</script>