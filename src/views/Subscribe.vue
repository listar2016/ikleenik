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
                  ar: "Thank You <br/>Your subscription has been confirmed and you've been added to the newsletter."
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
                  en: "Thank you. <br/> You have been successfully removed from this subscriber list and won't receive any further emails from us.",
                  ar: "Thank you. <br/> You have been successfully removed from this subscriber list and won't receive any further emails from us."
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
                ar: "Failed to subscribe.",
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
              ar: "Failed to subscribe.",
            }
          }
          console.log(err)
        })
    }
  }
}
</script>