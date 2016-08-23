<template>
    <li class="accordion-item" :class="isActive" data-accordion-item="">
        <slot></slot>
    </li>
</template>

<script>
export default {
    props: ['active'],
    computed: {
        isActive: function () {
            if (this.active == "")
            {
                return 'is-active';
            }
            return "";
        }
    }
};
</script>
