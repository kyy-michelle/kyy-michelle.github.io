<template>
  <div class="container">
    <div class="row">
      <nuxt-link to="/" class="button--grey">Back to Home</nuxt-link>
    </div>
    <div class="row">
      <div class="contentWrapper content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import BlogContent from '~/static/markdown/blog.md'
export default {
  data() {
    return {
      content: BlogContent
    }
  }
}
</script>
