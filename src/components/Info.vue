<template>
    <div class="callout info" :class="size" :data-closable="isclosable">
        <slot></slot>

        <button class="close-button" aria-label="Dismiss Info Message" type="button" data-close="" v-if="isclosable">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: ['closable', 'size'],
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