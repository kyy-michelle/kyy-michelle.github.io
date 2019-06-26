<template>
  <div>
    <section-content>
      <nuxt-link to="/" class="">Back to Home</nuxt-link>
      <div class="" v-html="blogContent"></div>
    </section-content>
  </div>
</template>

<script>
import SectionContent from '~/components/SectionContent.vue'
import BlogContent from '~/static/markdown/blog.md'

export default {
  components: {
    SectionContent
  },
  data() {
    return {
      blogContent: BlogContent
    }
  }
}
</script>
