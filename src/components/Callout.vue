<template>
    <div class="callout" :class="[size, type]" :data-closable="isclosable">
        <slot></slot>

        <button class="close-button" aria-label="Dismiss Message" type="button" data-close="" v-if="isclosable">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: ['closable', 'size', 'type'],
    computed: {
        isclosable: function () {
            if (this.closable == "true")
            {
                return 'fade-out';
            }
            return "";
        }
    }
};
</script>