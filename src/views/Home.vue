<template>
  <div class="home main-content">
      <div class="left-content">
          <h1>Some h1</h1>
          <p>some text</p>
      </div>
      <div class="right-content bg-1">
          <router-link to="/portfolio/one"><button>Browse Portfolio</button> </router-link>
      </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>

</style>