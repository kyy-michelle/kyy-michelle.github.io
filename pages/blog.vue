<template>
  <div class="" v-html="blogContent"></div>
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
