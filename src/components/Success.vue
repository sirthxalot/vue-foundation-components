<template>
    <div class="callout success" :class="[size]" :data-closable="closableStyle">
        <slot></slot>

        <button class="close-button" aria-label="Dismiss alert" type="button" data-close="" v-if="closableStyle">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: ['closable', 'size'],
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