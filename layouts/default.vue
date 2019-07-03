<template>
  <div class="wrapper-body">
    <content-container>
      <nav-main id="nav-main" class="pt-3 pb-4"></nav-main>
      <main class="pt-3 pb-5">
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

export default {
  layout: 'home',
  components: {
    NavMain,
    ContentContainer,
    SectionFooter
  }
}
</script>
