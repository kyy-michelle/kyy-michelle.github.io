<template>
  <a v-scroll-to="anchor" href="#" class="btn btn-primary">
    <slot>Return</slot>
  </a>
</template>

<script>
export default {
  props: { anchor: { type: String, default: '' } }
}
</script>

<style lang="scss" scoped>
.btn {
  text-transform: uppercase;

  &,
  &:active {
    color: #fff;
  }
}
</style>
