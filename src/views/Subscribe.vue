<template>
  <div>
    <home></home>
    <alert-form
      v-if="isShowForm"
      :modal-data="modalData"
      @close="isShowForm=false"
    ></alert-form>
  </div>
  
</template>
<script>
import Home from '@/views/Home.vue'
import AlertForm from '@/components/AlertForm.vue'
import axios from 'axios'
export default {
  components: {
    Home,
    AlertForm
  },
  props: {
    action: String,
    token: String
  },
  data() {
    return {
      modalData: {},
      isShowForm: false
    }
  },
  created() {
    this.sendSubscribe()
  },
  methods: {
    sendSubscribe() {
      const formData = new FormData()
      formData.append('action', this.action)
      formData.append('token', this.token)
      axios.post('/subscribe.php', formData)
        .then((response) => {
          console.log(response)
          if (response.data.status === "ok") {
            if (this.action === 'c') {
              this.modalData = {
                type: 'success',
                title: { 
                  en: 'Subscribe',
                  ar: 'اشترك'
                },
                description: {
                  en: "Thank You <br/>Your subscription has been confirmed and you've been added to the newsletter.",
                  ar: "شكرا لك!<br/>تم تأكيد اشتراكك وتمت إضافتك إلى النشرة البريدية."
                }
              }
              this.isShowForm = true
            } else {
              this.modalData = {
                type: 'success',
                title: { 
                  en: 'Subscribe',
                  ar: 'اشترك'
                },
                description: {
                  en: "Thank you! <br/>You have been successfully removed from our subscription list. You won't receive any further emails from us.",
                  ar: "شكرا لك! <br/>لقد تم إلغاء اشتراكك بنجاح من قائمة الاشتراكات لدينا. لن تتلقى أي رسائل بريد إلكتروني أخرى منا."
                }
              }
              this.isShowForm = true
            }
          } else {
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
    }
  }
}
</script>