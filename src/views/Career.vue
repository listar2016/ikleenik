<template>
  <div class="career">
    <div class="slider career-slider">
      <img @load="handleLoad" class="img-fluid" src="@/assets/img/bg_4.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('menu.careers') }}</h1>
        <div class="hr-container">
          <hr/>
        </div>
        <p>{{ $t('careers.description') }}</p>
        <router-link class="btn btn-white" :to="{name: 'contact'}">{{ $t('menu.contact') }}</router-link>
      </div>
    </div>
    <div class="row m-0 career-container">
      <div class="col-lg-4 career-img-container">
          <div class="career-img">
            <img @load="handleLoad" class="img-fluid" src="@/assets/img/computer.png">
          </div>
      </div>
      <div class="col-lg-8 career-description">
        <h1>{{ $t('careers.application_title') }}</h1>
        <div class="hr-container">
          <hr/>
        </div>     
        <p>{{ $t('careers.application_desc_1') }}</p>
        <p>{{ $t('careers.application_desc_2') }}</p>
        <router-link class="btn btn-read-more" :to="{name: 'contact'}">{{ $t('menu.contact') }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cntLoadedImage: 0
    }
  },
  watch: {
    cntLoadedImage(val) {
      if (val >= 2) {
        this.$store.dispatch('setStatus', '')  
      }
    }
  },
  created() {
    this.$store.dispatch('setStatus', 'loading')
  },
  methods: {
    handleLoad() {
      this.cntLoadedImage++
    }
  }
}
</script>