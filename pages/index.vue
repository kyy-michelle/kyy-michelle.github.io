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

    <div id="main-content" class="d-block">
      <content-container>
        <div class="d-block text-center pt-3 pb-1">
          <link-anchor anchor="#nav-main" wrapper-class="btn btn-primary"
            >&#8675; Profile</link-anchor
          >
        </div>
        <nav-main id="nav-main" class="pt-3 pb-4"></nav-main>
        <main class="pt-3 pb-5" v-html="profileContent"></main>
      </content-container>
      <section-footer></section-footer>
    </div>
  </div>
</template>

<script>
import LinkAnchor from '~/components/LinkAnchor'
import NavMain from '~/components/NavMain'
import ContentContainer from '~/components/ContentContainer'
import SectionFooter from '~/components/SectionFooter'
import ProfileContent from '~/static/markdown/profile.md'

export default {
  layout: 'home',
  components: {
    LinkAnchor,
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

  main {
    h3 {
      margin-bottom: 16px;
    }

    ul {
      margin-bottom: 42px;

      li {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
