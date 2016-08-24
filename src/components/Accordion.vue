<template>
    <ul class="accordion" data-accordion="" :data-multi-expand="multiexpand" :data-allow-all-closed="allclosable">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    props: ['allclosable', 'multiexpand']
};
</script>
