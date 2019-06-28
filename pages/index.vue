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

    <section-content id="main-content" class="mb-5">
      <div class="d-block text-center">
        <button-anchor anchor="#main-content">Portfolio</button-anchor>
      </div>
      <nav-main></nav-main>
      <div v-html="profileContent"></div>
    </section-content>
  </div>
</template>

<script>
import ButtonAnchor from '~/components/ButtonAnchor'
import NavMain from '~/components/NavMain'
import SectionContent from '~/components/SectionContent'
import ProfileContent from '~/static/markdown/profile.md'

export default {
  components: {
    ButtonAnchor,
    NavMain,
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
$content-lead-height: 68px; // Anchor link container height

.header-content {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
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

  .subtitle {
    padding-bottom: $content-lead-height + 10px;
  }
}

#main-content {
  position: absolute;
  display: block;
  width: 100%;
  top: 100%;
  margin-top: -$content-lead-height;
}
</style>
