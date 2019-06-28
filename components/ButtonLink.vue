<template>
  <a :href="href" class="btn btn-primary">
    <slot>Submit</slot>
  </a>
</template>

<script>
export default {
  props: { href: { type: String, default: '' } }
}
</script>

<style lang="scss" scoped>
.btn {
  color: #fff;
  text-transform: uppercase;
}
</style>
