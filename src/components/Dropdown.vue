<template>
    <button class="button" type="button" :data-toggle="cid">{{ text }}</button>
    <div class="dropdown-pane" :class="position" :id="cid" data-dropdown="">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['text', 'position'],
    computed: {
        cid: function () {
            return "dropdown-" + this._uid;
        }
    }
};
</script>