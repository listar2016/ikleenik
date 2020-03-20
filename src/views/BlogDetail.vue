<template>
  <div class="blog">
    <div class="slider products-slider text-center">
      <img @load="handleLoad" class="img-fluid" src="@/assets/img/bg_3.png">
    </div>
    <!-- <div class="row m-0">
      <div class="row m-0 blog-green-back">
      </div>
    </div> -->
    <div class="container p-sm-2 p-lg-5" v-if="blog">
      <div class="row">
        <div class="col-12">
          <div class="blog-detail bg-white">
            <div class="blog-action text-center">
              <span class="blog-date span-number">{{ blog.blog_date }}</span>
              <span class="blog-comment-lg span-number">{{ blog ? blog.comments.length : '' }}</span>
              <span class="blog-favorite-lg span-number">{{ blog.favorite }}</span>
            </div>
            <h2 class="text-center pt-3 px-2" v-html="blog.title[$i18n.locale]"></h2>
            <hr/>
            <h5 class="font-weight-lighter text-center px-2" v-html="blog.description[$i18n.locale]"></h5>
            <div class="blog-img text-center py-5">
              <img @load="handleLoad" :src="`/img/blog/${blog.origin_img}`" class="img-fluid"/>
            </div>
            <div class="blog-content px-sm-5">
              <div v-html="blog.content[$i18n.locale]"></div>
            </div>
            <div class="row blog-share-action pt-4 m-0">
              <div class="col-sm-6 mb-1">
                <div class="left-action">
                  <h5 class="share-title">{{ $t('blog.share') }}</h5>
                    <a :href="`https://facebook.com/sharer/sharer.php?u=https://ikleenik.com/blog/${id}&title=${blog.title[$i18n.locale]}`" target="_blank">
                      <div class="social-icon-container bg-green">
                        <img src="@/assets/img/facebook-logo.png" class="w-25">
                      </div>
                    </a>
                    <a :href="`https://twitter.com/intent/tweet?url=https//ikleenik.com/blog/${id}&text=${blog.title[$i18n.locale]}`" target="_blank">
                      <div class="social-icon-container bg-green">
                        <img src="@/assets/img/twitter-logo.png" class="w-50">
                      </div>
                    </a>  
                </div>
              </div>
              <div class="col-sm-6 mb-1 right-action">
                <h5 class="like-title">{{ $t('blog.like') }}</h5>
                <div class="social-icon-container text-green" @click="setLike">
                  <img v-if="isLike" src="@/assets/img/ic_favorite_select_lg.svg"/>
                  <img v-else src="@/assets/img/ic_favorite_lg.svg"/>
                </div>
                <h5 class="span-number">{{ blog.favorite }}</h5>
                <div class="sharethis-inline-share-buttons"></div>
              </div>
            </div>
          </div>
          <hr/>
          <div class="row comments-list">
            <h2 class="mb-4">{{ $t('blog.comments') }}</h2>
            <div class="col-12 one-comment" v-for="(comment, index) in blog.comments" :key="index">
              <div class="icon-container bg-primary">
                <img src="@/assets/img/user_icon.png" class="w-25"/>
              </div>
              <div class="comment-content">
                <h5>{{ comment.user_name }}</h5>
                <p class="span-number mb-2">{{ comment.comment_date }}</p>
                <p>{{ comment.comment }}</p>
              </div>
            </div>
          </div>
          <hr/>
          <div class="row comment-input-container">
            <div class="col-12">
              <h2 class="mb-4">{{ $t('blog.leave_a_comment') }}</h2>
              <form class="contact-form" @submit.prevent="saveComment">
                <div class="form-group">
                  <input type="text" required class="form-control" v-model="user_name" :placeholder="$t('contact.name')"/>
                </div>
                <div class="form-group">
                  <input type="email" required class="form-control" v-model="email" :placeholder="$t('contact.email')"/>
                </div>
                <div class="form-group">
                  <textarea class="form-control" required v-model="comment" :placeholder="$t('blog.comment_dot')" rows=5></textarea>
                </div>
                <div class="form-group">
                  <button class="btn btn-read-more" type="submit" >{{ $t('menu.leave') }}</button>
                </div>
              </form>
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
  </div>
</template>
<script>
import AlertForm from '@/components/AlertForm'
import {mapState} from 'vuex'
export default {
  props:[
    'id'
  ],
  components: {
    AlertForm
  },
  data() {
    return {
      user_name: '',
      email: '',
      comment: '',
      cntLoadedImage: 0,
      modalData: {
        type: '',
        title: '',
        description: ''
      },
      isShowForm: false,
      isLike: false
    }
  },
  computed: {
    ...mapState({
      blog: state => state.blog
    })
  },
  watch: {
    cntLoadedImage(val) {
      if (val >= 2) {
        this.$store.dispatch('setStatus', '')  
      }
    }
  },
  created() {
    if (!this.id) {
      this.$router.push({name: 'blog'})
      return
    } else {
      this.$store.dispatch('setStatus', 'loading')
      this.$store.dispatch('getBlog', this.id)
    }
  },
  methods: {
    handleLoad() {
      this.cntLoadedImage++
    },
    saveComment() {
      let vm = this
      let param = {
        blog_id: this.id,
        user_name: this.user_name,
        email: this.email,
        comment: this.comment
      }
      vm.$store.dispatch('saveComment', param)
        .then(() => {
          this.modalData = {
            type: 'success',
            title: { 
              en: 'Comment',
              ar: "التعليقات"
            },
            description: {
              en: "Thank you.<br/> Your comments saved successfully.",
              ar: "شكرا لكم. تم إرسال رسالتك بنجاح.",
            }
          }
            this.isShowForm = true
            this.user_name = ''
            this.email = ''
            this.comment = ''
        })
        .catch((err) => {
          this.modalData = {
            type: 'error',
            title: { 
              en: 'Comment',
              ar: "التعليقات"
            },
            description: {
              en: "Failed.",
              ar: "فشل.",
            }
          }
          console.log(err)
        })
    },
    setLike() {
      this.isLike = !this.isLike
      let vm = this
      let param = {
        blog_id: this.id,
        is_like: this.isLike
      }
      vm.$store.dispatch('saveLike', param)
    }
  }
}
</script>