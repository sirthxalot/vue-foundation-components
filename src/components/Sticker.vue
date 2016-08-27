<template>
    <span class="show-for-sr" :aria-describedby="cid" v-if="description">{{ description }}</span>

    <span class="label" :id="cid" :class="color">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: ['color', 'description'],
    computed: {
        cid: function () {
            return "sticker-" + this._uid;
        }
    }
};
</script>
