<template>
  <footer id="anchor-footer">
    <content-container wrapper-class="footer">
      <h2>Contact Michelle</h2>
      <p>
        Email me at
        <a href="mailto:kyy.michelle@gmail.com">kyy.michelle@gmail.com</a>
        <br />
        Or connect with me at
        <a href="https://www.linkedin.com/in/kyymichelle" target="_blank"
          >LinkedIn</a
        >
      </p>
      <a v-scroll-to="'#nav-main'" href="#nav-main">
        Back to top
      </a>
    </content-container>
  </footer>
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  components: {
    ContentContainer
  }
}
</script>
