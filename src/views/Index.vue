<template>
  <router-view></router-view>
</template>
<script>
export default {
  props: {
    lang: String
  },
  created() {
    this.changeLang()
  },
  methods: {
    changeLang() {
      console.log(this.lang)
      if (!this.lang) return
      const html = window.document.documentElement
      this.$i18n.locale =  this.lang
      html.lang = this.lang
      html.dir = (this.lang === 'ar') ? 'rtl' : ''
      if (this.lang === 'en') {
        document.querySelector('body').classList.remove('rtl');
      } else if (this.lang === 'ar') {
        document.querySelector('body').classList.add('rtl');
      }
    }
  }
}
</script>