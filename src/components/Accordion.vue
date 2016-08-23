<template>
    <ul class="accordion" data-accordion="" :data-multi-expand="multiexpand" :data-allow-all-closed="closable">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    props: ['closable', 'multiexpand']
};
</script>
