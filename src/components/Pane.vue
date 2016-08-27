<template>
    <li class="accordion-item" :class="isactive" data-accordion-item="">
        <slot></slot>
    </li>
</template>

<script>
export default {
    props: ['active'],
    computed: {
        isactive: function () {
            if (this.active == "")
            {
                return 'is-active';
            }
            return "";
        }
    }
};
</script>
