<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark">
      <router-link class="navbar-brand" :to="{name: 'home'}">
        <img :src="imgLogo[$i18n.locale]" alt="iKleeniK">
      </router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        @click="isMobileMenu=true">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': currentPage.includes('home')}">
            <router-link class="nav-link" :to="{name: 'home'}">{{ $t('menu.main') }}</router-link>
          </li>
          <li class="nav-item" :class="{'active': currentPage.includes('products')}">
            <router-link class="nav-link" :to="{name: 'products'}">{{ $t('menu.products') }}</router-link>
          </li>
          <li class="nav-item" :class="{'active': currentPage.includes('blog')}">
            <router-link class="nav-link" :to="{name: 'blog'}">{{ $t('menu.blog') }}</router-link>
          </li>
          <li class="nav-item" :class="{'active': currentPage.includes('career')}">
            <router-link class="nav-link" :to="{name: 'career'}">{{ $t('menu.careers') }}</router-link>
          </li>
          <li class="nav-item" :class="{'active': currentPage.includes('contact')}">
            <router-link class="nav-link" :to="{name: 'contact'}">{{ $t('menu.contact') }}</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link lang-link" href="#" @click.prevent="changeLang">{{ $t('menu.lang') }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="slide">
      <nav class="navbar navbar-dark" id="navbarMobile" v-if="isMobileMenu">
        <router-link class="navbar-brand" :to="{name: 'home'}">
          <img :src="mobileLogo[$i18n.locale]" alt="iKleeniK">
        </router-link>
        <button 
          class="navbar-toggler" 
          @click="isMobileMenu=false">
          <img src="@/assets/img/mobile_menu_close.svg"/>
        </button>

        <div class="navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" :class="{'active': currentPage.includes('home')}" @click="isMobileMenu=false">
              <router-link class="nav-link" :to="{name: 'home'}">{{ $t('menu.main') }}</router-link>
            </li>
            <li class="nav-item" :class="{'active': currentPage.includes('products')}" @click="isMobileMenu=false">
              <router-link class="nav-link" :to="{name: 'products'}" >{{ $t('menu.products') }}</router-link>
            </li>
            <li class="nav-item" :class="{'active': currentPage.includes('blog')}" @click="isMobileMenu=false">
              <router-link class="nav-link" :to="{name: 'blog'}">{{ $t('menu.blog') }}</router-link>
            </li>
            <li class="nav-item" :class="{'active': currentPage.includes('career')}" @click="isMobileMenu=false">
              <router-link class="nav-link" :to="{name: 'career'}">{{ $t('menu.careers') }}</router-link>
            </li>
            <li class="nav-item" :class="{'active': currentPage.includes('contact')}" @click="isMobileMenu=false">
              <router-link class="nav-link" :to="{name: 'contact'}">{{ $t('menu.contact') }}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link lang-link" href="#" @click.prevent="changeLang">{{ $t('menu.lang') }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>
<script>
import imgLogo_en from '@/assets/img/logo_white_1.svg'
import imgLogo_ar from '@/assets/img/logo_white_ar.svg'
import mobileLogo_en from '@/assets/img/logo_mobile.svg'
import mobileLogo_ar from '@/assets/img/logo_mobile_ar.svg'
export default {
  data() {
    return {
      imgLogo: {
        en: imgLogo_en,
        ar: imgLogo_ar
      },
      mobileLogo: {
        en: mobileLogo_en,
        ar: mobileLogo_ar
      },
      isMobileMenu: false
    }
  },
  computed: {
    currentPage() {
      return this.$route.path
    }
  },
  methods: {
    changeLang() {
      this.isMobileMenu = false
      let curPath = this.$route.path
      let aryPath = curPath.split('/')
      let curLang = aryPath.length > 1 ? aryPath[1] : 'en'
      aryPath[1] = curLang === 'en' ? 'ar': 'en'
      let newPath = aryPath.join('/')
      console.log(newPath)
      this.$router.push(newPath)
      const html = window.document.documentElement
      document.querySelector('body').classList.toggle('rtl');
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale =  'ar'
        html.lang = 'ar'
        html.dir = 'rtl'
      } else {
        this.$i18n.locale =  'en'
        html.lang = 'en'
        html.dir = ''
      }
    }
  }
}
</script>