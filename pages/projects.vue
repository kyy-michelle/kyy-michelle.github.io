<template>
  <section class="page-projects">
    <div v-html="projectsContent"></div>
  </section>
</template>

<script>
import ProjectsContent from '~/static/markdown/projects.md'

export default {
  data() {
    return {
      projectsContent: ProjectsContent
    }
  }
}
</script>

<style lang="scss">
.page-projects {
  img {
    max-width: 400px;
    margin-top: 24px;
  }
}
</style>
