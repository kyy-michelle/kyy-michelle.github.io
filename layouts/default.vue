<template>
  <div class="wrapper-body">
    <content-container>
      <nav-main id="nav-main"></nav-main>
      <main class="py-5">
        <nuxt />
      </main>
    </content-container>
    <section-footer></section-footer>
  </div>
</template>

<script>
import NavMain from '~/components/NavMain'
import ContentContainer from '~/components/ContentContainer'
import SectionFooter from '~/components/SectionFooter'
import ProfileContent from '~/static/markdown/profile.md'

export default {
  layout: 'home',
  components: {
    NavMain,
    ContentContainer,
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
.wrapper-body {
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
