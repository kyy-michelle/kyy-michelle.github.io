<template>
  <div class="" v-html="gamesContent"></div>
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
