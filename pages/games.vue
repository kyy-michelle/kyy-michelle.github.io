<template>
  <section class="page-games">
    <div v-html="gamesContent"></div>
  </section>
</template>

<script>
import GamesContent from '~/static/markdown/games.md'

export default {
  data() {
    return {
      gamesContent: GamesContent
    }
  }
}
</script>

<style lang="scss">
.page-games {
  img {
    max-width: 400px;
    margin-top: 24px;
  }
}
</style>
