<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="content col-md-10 offset-md-1 bg-white p-3 px-md-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
  border-radius: 7px;
}
</style>
