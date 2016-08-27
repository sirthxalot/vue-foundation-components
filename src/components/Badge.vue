<template>
    <span class="badge" :class="color">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: ['color']
};
</script>
