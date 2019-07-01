<template>
  <nav>
    <ul class="nav-main nav nav-pills nav-fill">
      <li class="nav-item">
        <nuxt-link to="/#nav-main" class="nav-link">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/games" class="nav-link">Games</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/art" class="nav-link">Art</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
      </li>
      <li class="nav-item">
        <a v-scroll-to="'#anchor-footer'" href="#anchor-footer" class="nav-link"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  .nav-item {
    .nav-link {
      border-radius: 0;
      border-bottom: none;

      &.active {
        border-bottom: none;
      }
    }
  }
}
</style>
