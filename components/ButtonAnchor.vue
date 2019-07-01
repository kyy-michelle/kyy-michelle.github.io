<template>
  <a v-scroll-to="anchor" :href="anchor" class="btn btn-primary">
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
  font-weight: normal;

  &,
  &:active {
    color: #fff;
  }
}
</style>
