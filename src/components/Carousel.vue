<template>
    <div class="orbit" role="region" :aria-label="label" data-orbit="">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['label']
};
</script>