<template>
  <section class="text-center py-5">
    <h1 v-if="error.statusCode === 404">Page couldn't be found</h1>
    <h1 v-else>An error has occurred</h1>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
