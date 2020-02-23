<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" :to="{name: 'home'}"><img src="@/assets/img/logo_white.png" alt="iKleeniK"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{'active': currentPage.includes('products')}">
          <router-link class="nav-link" :to="{name: 'products'}">Products</router-link>
        </li>
        <li class="nav-item" :class="{'active': currentPage.includes('blog')}">
          <router-link class="nav-link" :to="{name: 'blog'}">Blog</router-link>
        </li>
        <li class="nav-item" :class="{'active': currentPage.includes('career')}">
          <router-link class="nav-link" :to="{name: 'career'}">Careers</router-link>
        </li>
        <li class="nav-item" :class="{'active': currentPage.includes('contact')}">
          <router-link class="nav-link" :to="{name: 'contact'}">Contact Us</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">En</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">عربي</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    currentPage() {
      return this.$route.path
    }
  },
}
</script>