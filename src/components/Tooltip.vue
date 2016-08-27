<template>
    <span aria-haspopup="true"
          class="has-tip"
          :class="position"
          data-disable-hover="false"
          data-tooltip=""
          :tabindex="_uid"
          :title="tip"
          :data-click-open="open"
    ><slot></slot></span>
</template>

<script>
export default {
    props: ['tip', 'open', 'position']
};
</script>
