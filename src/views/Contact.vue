<template>
  <div class="contact">
    <div class="slider products-slider text-center">
      <img @load="handleLoad" class="img-fluid" src="@/assets/img/bg_5.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('menu.contact') }}</h1>
        <hr/>
      </div>
    </div>
    <div class="row m-0 py-5 px-3">
      <div class="col-lg-9 col-xl-6 mx-auto">
        <form class="contact-form" @submit.prevent="sendContact">
          <div class="form-group">
            <input type="text" class="form-control" required v-model="contactData.user_name" :placeholder="$t('contact.name')"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" required v-model="contactData.email" :placeholder="$t('contact.email')"/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" required v-model="contactData.subject" :placeholder="$t('contact.subject')"/>
          </div>
          <div class="form-group">
            <textarea class="form-control" required v-model="contactData.message" :placeholder="$t('contact.message')" rows=5></textarea>
          </div>
          <vue-recaptcha 
            ref="recaptcha"
            @verify="onVerify"
            :sitekey="site_key"
            :loadRecaptchaScript="true"
            :language="$i18n.locale">
          </vue-recaptcha>
          <p v-if="recaptcha_err" class="text-danger">{{ $t('contact.recaptcha_err') }}</p>
          <div class="form-group">
            <button type="submit" class="btn btn-read-more">{{ $t('contact.send') }}</button>
          </div>
        </form>
      </div>
    </div>
    <alert-form
      v-if="isShowForm"
      :modal-data="modalData"
      @close="isShowForm=false"
    ></alert-form>
  </div>
</template>
<script>
import axios from 'axios'
import AlertForm from '@/components/AlertForm'
import VueRecaptcha from 'vue-recaptcha'
export default {
  components: {
    AlertForm,
    VueRecaptcha
  },
  data() {
    return {
      contactData: {
        user_name: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: ''
      },
      modalData: {
        type: '',
        title: '',
        description: ''
      },
      isShowForm: false,
      site_key: '6LefUuAUAAAAAOeGA4g4l9_YKF08O880nQOcAFWS',
      recaptcha_err: false
    }
  },
  created() {
    this.$store.dispatch('setStatus', 'loading')
  },
  methods: {
    async recaptcha() {
      await this.$recaptchaLoaded()
      const token = await this.$recaptcha('login')
      console.log(token)
    },
    handleLoad() {
      this.$store.dispatch('setStatus', '')
    },
    onVerify(response) {
      this.contactData.recaptcha = response;
    },
    sendContact() {
      if (!this.contactData.recaptcha) {
        this.recaptcha_err = true
        return;
      } else {
        this.recaptcha_err = false
      }
      const formData = new FormData()
      formData.append('action', 'contact')
      formData.append('user_name', this.contactData.user_name)
      formData.append('email', this.contactData.email)
      formData.append('subject', this.contactData.subject)
      formData.append('message', this.contactData.message)
      formData.append('recaptcha', this.contactData.recaptcha)
      axios.post('/subscribe.php', formData)
        .then((response) => {
          console.log(response)
          if (response.data.status === "ok") {
            this.modalData = {
              type: 'success',
              title: { 
                en: 'Contact Us',
                ar: "اتصل بنا"
              },
              description: {
                en: "Thank you.<br/> Your message sent successfully.",
                ar: "شكرا لكم. تم إرسال رسالتك بنجاح.",
              }
            }
            this.isShowForm = true
            this.contactData = {
              user_name: '',
              email: '',
              subject: '',
              message: ''
            } 
          } else if (response.data.status ==='bot') {
            this.recaptcha_err = true
          }
        })
        .catch((err) => {
          this.modalData = {
            type: 'error',
            title: { 
              en: 'Contact Us',
              ar: "اتصل بنا"
            },
            description: {
              en: "Failed.",
              ar: "فشل.",
            }
          }
          console.log(err)
        })
    }
  },
}
</script>