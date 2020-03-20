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
    <div class="row m-0 bg-dark py-5 px-md-2 px-lg-5" style="padding-bottom: 80px !important">
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
              <input type="text" class="form-control" :placeholder="$t('footer.email')" :aria-label="$t('footer.email')" v-model="email">
              <div class="input-group-append">
                <a href="#" class="btn btn-success text-uppercase" @click.prevent="sendSubscribe">{{ $t('footer.subscribe') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <alert-form
      v-if="isShowForm"
      :modal-data="modalData"
      @close="isShowForm=false"
    ></alert-form>
  </footer>
</template>
<script>
import imgLogo_en from '@/assets/img/logo_white_1.svg'
import imgLogo_ar from '@/assets/img/logo_white_ar.svg'
import AlertForm from '@/components/AlertForm'
import axios from 'axios'
export default {
  components: {
    AlertForm
  },
  data() {
    return {
      imgLogo: {
        en: imgLogo_en,
        ar: imgLogo_ar
      },
      isShowForm: false,
      modalData: {
        type: '',
        title: '',
        description: ''
      },
      email: '',
      // eslint-disable-next-line
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
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
    },
    sendSubscribe() {
      if (this.reg.test(this.email)) {
        const formData = new FormData()
        formData.append('action', 'register')
        formData.append('email', this.email)
        axios.post('/subscribe.php', formData)
          .then((response) => {
            if (response.data.status === "ok") {
              this.modalData = {
                type: 'success',
                title: { 
                  en: 'Subscribe',
                  ar: 'اشترك'
                },
                description: {
                  en: "Thank you! confirmation email is sent.<br/>Please check your inbox and confrim your email address.",
                  ar: "شكرا لك! تم إرسال رسالة التأكيد.<br/>يرجى التحقق من بريدك الوارد وتأكيد عنوان بريدك الإلكتروني."
                }
              }
              this.isShowForm = true
            } else {
              this.modalData = {
                type: 'error',
                title: { 
                  en: 'Subscribe',
                  ar: 'اشترك'
                },
                description: {
                  en: "Failed to subscribe.",
                  ar: "فشل الاشتراك"
                }
              }
              this.isShowForm = true
              console.log(response.data.message)
            }
          })
          .catch((err) => {
            this.modalData = {
              type: 'error',
              title: { 
                en: 'Subscribe',
                ar: 'اشترك'
              },
              description: {
                en: "Failed to subscribe.",
                ar: "فشل الاشتراك",
              }
            }
            console.log(err)
          })
      } else {
        this.modalData = {
          type: 'error',
          title: {
            en: 'Email Error',
            ar: 'خطأ في البريد الإلكتروني'
          },
          description: {
            en: 'Please enter valid email address!',
            ar: 'الرجاء إدخال عنوان بريد إلكتروني صالح.'
          }
        }
        this.isShowForm = true
      }
    }
  }
}
</script>