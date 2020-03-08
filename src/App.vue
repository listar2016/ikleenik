<template>
  <div id="app">
    <loading 
			:active.sync="isLoading" 
		></loading>
    <div class="container-fluid p-0" :class="{'no-loading': isLoading}">
      <nav-bar></nav-bar>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <footer-bar></footer-bar>
      <vm-back-top></vm-back-top>
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import {mapState} from 'vuex'
export default {
  components: {
    NavBar,
    FooterBar,
    Loading
  },
  computed: {
		...mapState({
      isLoading: state => state.status === 'loading'
    })
  },
}
</script>
