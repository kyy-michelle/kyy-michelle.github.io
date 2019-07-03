<template>
  <section class="page-blog">
    <div v-html="blogContent"></div>
  </section>
</template>

<script>
import BlogContent from '~/static/markdown/blog.md'

export default {
  data() {
    return {
      blogContent: BlogContent
    }
  }
}
</script>

<style lang="scss">
.page-blog {
  h4 {
    margin-top: 24px;
  }
}
</style>
