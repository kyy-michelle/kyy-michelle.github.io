<template>
  <a v-scroll-to="anchor" :href="anchor" :class="wrapperClass">
    <slot>Return</slot>
  </a>
</template>

<script>
export default {
  props: {
    anchor: { type: String, default: '' },
    wrapperClass: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  font-weight: normal;

  &,
  &:active {
    color: #fff;
  }
}
</style>
