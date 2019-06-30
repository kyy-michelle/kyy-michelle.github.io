<template>
  <div class="wrapper-body py-5">
    <nuxt />
  </div>
</template>

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
