<template>
    <div class="callout" :class="[size, type]" :data-closable="closableStyle">
        <slot></slot>

        <button class="close-button" aria-label="Dismiss alert" type="button" data-close="" v-if="closableStyle">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: ['closable', 'size', 'type'],
    computed: {
        closableStyle: function () {
            if (this.closable == "true")
            {
                return 'fade-out';
            }
            return "";
        }
    }
};
</script>