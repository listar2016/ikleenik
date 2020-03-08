<template>
  <footer>
    <div class="row m-0">
      <div class="col-12 bg-green">
        <div class="col-xl-9 mx-auto my-5 tomorrow-container">
          <div class="left-quote">
            <img src="@/assets/img/left_round_quote.png" class="img-fluid"/>
          </div>
          <div class="right-text">
            <h1>{{ $t('footer.title') }}</h1>
            <div class="hr-container">
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 bg-dark py-5 px-md-2 px-lg-5">
      <div class="col-lg-5 logo-copyright">
        <img :src="imgLogo[$i18n.locale]">
        <p class="mt-3" v-html="$t('footer.copy_right')"></p>
      </div>
      <div class="col-lg-7">
        <div class="row footer-link">
          <div class="col-md-4">
            <h4>{{ $t('footer.quick_link') }}</h4>
            <div class="hr-container">
              <hr/>
            </div>
            <ul>
              <li>
                <a class="nav-link" href="#" @click.prevent="checkUrl('products')">{{ $t('menu.products') }}</a>
              </li>
              <li>
                <a class="nav-link" href="#" @click.prevent="checkUrl('blog')">{{ $t('menu.blog') }}</a>
              </li>
              <li>
                <a class="nav-link" href="#" @click.prevent="checkUrl('career')">{{ $t('menu.careers') }}</a>
              </li>
              <li>
                <a class="nav-link" href="#" @click.prevent="checkUrl('contact')">{{ $t('menu.contact') }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <h4>{{ $t('footer.newsletter') }}</h4>
            <div class="hr-container">
              <hr/>
            </div>
            <div class="input-group">
              <input type="text" class="form-control" :placeholder="$t('footer.email')" :aria-label="$t('footer.email')">
              <div class="input-group-append">
                <a href="#" class="btn btn-success text-uppercase">{{ $t('footer.subscribe') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import imgLogo_en from '@/assets/img/logo_white_1.svg'
import imgLogo_ar from '@/assets/img/logo_white_ar.png'
export default {
  data() {
    return {
      imgLogo: {
        en: imgLogo_en,
        ar: imgLogo_ar
      }
    }
  },
  methods: {
    checkUrl(url) {
      if (this.$route.name === url) {
        window.scrollTo({
          top: 0,
          left: 0, 
          behavior: 'smooth' 
        })
      } else {
        this.$router.push({name: url})
      }
    }
  }
}
</script>