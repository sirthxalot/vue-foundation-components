<template>
    <button class="button modal--open" :data-open="cid" v-if="label">{{ label }}</button>
    <div class="reveal"
         :class="size"
         :id="cid"
         data-reveal=""
         :data-overlay="overlay"
         :data-animation-in="animationIn"
         :data-animation-out="animationOut"
         :aria-labelledby="labelledby"
    >
        <slot></slot>
        <button class="close-button" data-close="" aria-label="Close Modal" type="button" v-if="closable">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: ['labelledby', 'animation', 'closable', 'label', 'size', 'id', 'overlay'],
    computed: {
        cid: function () {
            if (this.id)
            {
                return this.id;
            }
            return "modal-" + this._uid;
        },
        animationIn: function () {
            if (this.animation)
            {
                return this.animation + '-in';
            }
            return "";
        },
        animationOut: function () {
            if (this.animation)
            {
                return this.animation + '-out';
            }
            return "";
        }
    }
};
</script>