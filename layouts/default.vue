<template>
  <div class="container-body">
    <main class="d-block">
      <section-content>
        <nav-main id="nav-main" class="mb-5"></nav-main>
        <nuxt />
      </section-content>
      <section-footer></section-footer>
    </main>
  </div>
</template>

<script>
import NavMain from '~/components/NavMain'
import SectionContent from '~/components/SectionContent'
import SectionFooter from '~/components/SectionFooter'
import ProfileContent from '~/static/markdown/profile.md'

export default {
  layout: 'home',
  components: {
    NavMain,
    SectionContent,
    SectionFooter
  },
  data() {
    return {
      profileContent: ProfileContent
    }
  }
}
</script>

<style lang="scss">
.container-body {
  &::before {
    content: '';
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: url('/images/bg.jpg');
    background-position: center;
    background-size: cover;
    z-index: -1;
  }
}
</style>
