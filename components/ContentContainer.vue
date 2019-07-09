<template>
  <div class="container">
    <div class="row">
      <div
        class="content col-md-10 offset-md-1 col-lg-8 offset-lg-2 px-3 px-md-4 pb-3"
      >
        <slot></slot>
        <div class="d-block text-center pt-5 pb-3">
          <link-anchor anchor="#nav-main">Back to top</link-anchor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkAnchor from '~/components/LinkAnchor'
export default {
  components: {
    LinkAnchor
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #fff;
}
</style>
