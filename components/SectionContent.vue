<template>
  <section :class="wrapperClass">
    <div class="container">
      <div class="row">
        <div class="content col-md-10 offset-md-1 px-3 px-md-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { wrapperClass: { type: String, default: '' } }
}
</script>

<style lang="scss" scoped>
// $footer-radius: 7px;

.content {
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff;
  // border-radius: $footer-radius;
}

.footer {
  .content {
    padding-top: 92px;
    padding-bottom: 92px;
    text-align: center;
    // border-bottom-left-radius: $footer-radius;
    // border-bottom-right-radius: $footer-radius;
    background-color: #eee;
  }
}
</style>
