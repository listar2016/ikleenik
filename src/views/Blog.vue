<template>
  <div class="blog">
    <div class="slider products-slider text-center">
      <img class="img-fluid" src="@/assets/img/bg_3.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('menu.blog') }}</h1>
        <hr/>
      </div>
    </div>
    <div class="row m-0">
      <div class="row m-0 blog-green-back">
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3" v-for="(blog, index) in showList" :key="index">
        <div class="one-blog-container py-3">
          <img :src="`/img/blog/${blog.url}`" class="img-fluid"/>
          <h3>{{ blog.title[$i18n.locale] }}</h3>
          <p>{{ blog.description[$i18n.locale] }}</p>
          <div class="blog-action">
            <span class="blog-date">{{ blog.blog_date }}</span>
            <span class="blog-comment">{{ blog.comment }}</span>
            <span class="blog-favorite">{{ blog.favorite }}</span>
            <a href="#" class="read-more-link">{{ $t('menu.read_more') }}</a>
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
export default {
  data() {
    return {
      blogList: [
        {
          url: 'blog_1.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_2.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_3.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_4.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_4.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_2.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_1.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_3.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
        {
          url: 'blog_3.png',
          title: {
            en: 'Consequuntur dolores',
            ar: 'لوريم ايبسوم دولار'
          },
          description: {
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            ar: 'لوريم ايبسوم دولار سيت أميت  كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستري أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أس أ كوممودو كونسيكيوات . ديواس'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019.',
        },
      ],
      showList: [],
      showCnt: 4,
    }
  },
  created() {
    this.showMore()
  },
  methods: {
    getBlogText(str) {
      if (str && str.length>50) {
        return str.substring(0,50) + '...'
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
    }
  }
  
}
</script>