<template>
  <div>
    <header class="header-content p-3">
      <h1 class="title display-4">
        Michelle Yeung
      </h1>
      <h3 class="subtitle">
        Developer &amp; tinkerer
      </h3>
    </header>

    <section-content>
      <nuxt-link to="/blog">Blog</nuxt-link>
      <button-primary></button-primary>
      <div class="" v-html="profileContent"></div>
    </section-content>
  </div>
</template>

<script>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import SectionContent from '~/components/SectionContent.vue'
import ProfileContent from '~/static/markdown/profile.md'

export default {
  components: {
    ButtonPrimary,
    SectionContent
  },
  data() {
    return {
      profileContent: ProfileContent
    }
  }
}
</script>

<style lang="scss">
.header-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  // margin-bottom: -10px;
  font-size: 3em;
  line-height: 1.25em;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 2px 0 rgba(5, 5, 5, 0.4);

  .title,
  .subtitle {
    font-weight: bold;
  }

  .title {
    &::after {
      background: #ddd;
      content: '';
      display: block;
      height: 2px;
      margin: 0.5em auto;
      position: relative;
      width: 4em;
    }
  }
}
</style>
