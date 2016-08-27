<template>
    <img class="thumbnail" :src="src" :alt="alt">
</template>

<script>
export default {
    props: ['alt', 'src']
};
</script>
