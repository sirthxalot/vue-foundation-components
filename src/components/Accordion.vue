<template>
    <ul class="accordion"
        data-accordion=""
        :data-allow-all-closed="isclosable"
        :data-multi-expand="isexpandable"
    ><slot></slot></ul>
</template>

<script>
export default {
    props: ['closable', 'expand'],

    computed: {
        isclosable : function () {
            if (this.closable && this.closable != 'false')
            {
                return 'true';
            }
            return "";
        },
        isexpandable : function () {
            if (this.expand && this.expand != 'false')
            {
                return 'true';
            }
            return "";
        },
    }
};
</script>
