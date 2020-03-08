<template>
  <div class="blog">
    <div class="slider products-slider text-center">
      <img @load="handleLoad" class="img-fluid" src="@/assets/img/bg_3.png">
    </div>
    <!-- <div class="row m-0">
      <div class="row m-0 blog-green-back">
      </div>
    </div> -->
    <div class="container p-sm-2 p-lg-5">
      <div class="row">
        <div class="col-12">
          <div class="blog-detail bg-white">
            <div class="blog-action text-center">
              <span class="blog-date span-number">{{ blog.blog_date }}</span>
              <span class="blog-comment-lg span-number">{{ blog.comment }}</span>
              <span class="blog-favorite-lg span-number">{{ blog.favorite }}</span>
            </div>
            <h2 class="text-center pt-3 px-2" v-html="blog.title[$i18n.locale]"></h2>
            <hr/>
            <h5 class="font-weight-lighter text-center px-2" v-html="blog.description[$i18n.locale]"></h5>
            <div class="blog-img text-center py-5">
              <img @load="handleLoad"  :src="`/img/blog/${blog.origin_img}`" class="img-fluid"/>
            </div>
            <div class="blog-content px-sm-5">
              <p v-html="blog.content[$i18n.locale]"></p>
            </div>
            <div class="row blog-share-action pt-4 m-0">
              <div class="col-sm-6 mb-1">
                <div class="left-action">
                  <h5 class="share-title">{{ $t('blog.share') }}</h5>
                  <div class="social-icon-container bg-green">
                    <img src="@/assets/img/facebook-logo.png">
                  </div>
                  <div class="social-icon-container bg-green">
                    <img src="@/assets/img/twitter-logo.png">
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-1 right-action">
                <h5 class="like-title">{{ $t('blog.like') }}</h5>
                <div class="social-icon-container">
                  <img src="@/assets/img/ic_favorite_lg.png"/>
                </div>
                <h5 class="span-number">{{ blog.favorite }}</h5>
              </div>
            </div>
          </div>
          <hr/>
          <div class="row comments-list">
            <h2 class="mb-4">{{ $t('blog.comments') }}</h2>
            <div class="col-12 one-comment" v-for="(comment, index) in blog.comments" :key="index">
              <div class="icon-container bg-primary">
                <img src="@/assets/img/user_icon.png"/>
              </div>
              <div class="comment-content">
                <h5>{{ comment.name[$i18n.locale] }}</h5>
                <p class="span-number mb-2">{{ comment.comment_date }}</p>
                <p>{{ comment.comment[$i18n.locale] }}</p>
              </div>
            </div>
          </div>
          <hr/>
          <div class="row comment-input-container">
            <div class="col-12">
              <h2 class="mb-4">{{ $t('blog.leave_a_comment') }}</h2>
              <form class="contact-form">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="user_name" :placeholder="$t('contact.name')"/>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" v-model="email" :placeholder="$t('contact.email')"/>
                </div>
                <div class="form-group">
                  <textarea class="form-control" v-model="comment" :placeholder="$t('blog.comment_dot')" rows=5></textarea>
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
  </div>
</template>
<script>
export default {
  props:{
    blog: Object
  },
  data() {
    return {
      user_name: '',
      email: '',
      comment: '',
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