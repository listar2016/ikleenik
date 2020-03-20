<template>
  <div class="blog">
    <div class="slider products-slider text-center">
      <img @load="handleLoad" class="img-fluid" src="@/assets/img/bg_3.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('menu.blog') }}</h1>
        <hr/>
      </div>
    </div>
    <!-- <div class="row m-0">
      <div class="col-12 blog-green-back"></div>
    </div> -->
    <div class="row m-0 blog-green-next">
      <div class="col-md-6 col-lg-4 col-xl-3" v-for="(blog, index) in showList" :key="index">
        <div class="one-blog-container py-3">
          <img @load="handleLoad" :src="`/img/blog/${blog.thumb_img}`" class="img-fluid"/>
          <h3 v-html="blog.title[$i18n.locale]"></h3>
          <p v-html="getBlogText(blog.description[$i18n.locale])"></p>
          <div class="blog-action">
            <span class="blog-date span-number">{{ blog.blog_date }}</span>
            <span class="blog-comment span-number">{{ blog.comment }}</span>
            <span class="blog-favorite span-number">{{ blog.favorite }}</span>
            <router-link class="read-more-link" :to="{name: 'blog-detail', params: {id: blog.id}}">{{ $t('menu.read_more') }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div v-if="showCnt<this.blogList.length" class="mx-auto">
        <a href="#" class="btn btn-read-more" @click.prevent="showMore">{{ $t('menu.show_more') }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      showList: [],
      showCnt: 4,
      cntLoadedImage: 0
    }
  },
  computed: {
    ...mapState({
      blogList: state => state.blogs
    })
  },
  watch: {
    cntLoadedImage(val) {
      if (val >= this.blogList.length + 1) {
        this.$store.dispatch('setStatus', '')  
      }
    }
  },
  created() {
    this.$store.dispatch('setStatus', 'loading')
    this.$store.dispatch('getBlogs')
      .then(() => {
        this.showMore()
      })
      .catch((err) => {
        console.log(err)
      })
    
  },
  methods: {
    getBlogText(str) {
      if (str && str.length>100) {
        return str.substring(0,100) + '...'
      } else {
        return str
      }
    },
    showMore() {
      this.showCnt += 4
      if (this.showCnt > this.blogList.length) {
        this.showCnt = this.blogList.length
      }
      this.showList = this.blogList.slice(0, this.showCnt)
    },
    handleLoad() {
      this.cntLoadedImage++
    }
  }
  
}
</script>