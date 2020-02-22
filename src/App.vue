<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>
