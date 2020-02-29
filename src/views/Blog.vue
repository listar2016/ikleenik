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
          <img :src="`/img/blog/${blog.thumb_img}`" class="img-fluid"/>
          <h3>{{ blog.title[$i18n.locale] }}</h3>
          <p>{{ getBlogText(blog.description[$i18n.locale]) }}</p>
          <div class="blog-action">
            <span class="blog-date span-number">{{ blog.blog_date }}</span>
            <span class="blog-comment span-number">{{ blog.comment }}</span>
            <span class="blog-favorite span-number">{{ blog.favorite }}</span>
            <router-link class="read-more-link" :to="{name: 'blog-detail', params: {blog: blog}}">{{ $t('menu.read_more') }}</router-link>
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
          id: 1,
          thumb_img: 'blog_1.png',
          origin_img: 'blog_1_origin.png',
          title: {
            en: 'iKleeniK Announces the Launch of Mobile Application Jamel®',
            ar: 'تعلن أيكلينيك عن إطلاق تطبيق الهاتف المحمول جمل®'
          },
          description: {
            en: 'iKleeniK Limited, New Zealand is excited to announce the launch of mobile application Jamel®, the first Android and iOS fitness app for people with diabetes in English and Arabic.',
            ar: 'يسر أيكلينيك المحدودة  ، نيوزيلندا أن تعلن عن إطلاق تطبيق الهاتف المحمول جمل ® ، أول تطبيق للياقة البدنية يعمل بنظام أندرويد (Android ) وiOS للأشخاص الذين يعانون من مرض السكري باللغتين العربية والإنجليزية.'
          },
          content: {
            en: 'At iKleeniK, we are working on a broad range of technologies to make health information more accessible beyond traditional care settings including mHealth, big data, artificial intelligence systems for digital diagnostics, digital therapeutics and clinical decision support solutions, as well as the advanced algorithms that are increasingly capable of supporting those solutions. At our core R&D, we believe digital health represents a much-needed connection between data science and healthcare, one that more comprehensively connects the dots for better, more informed health decisions and more personalized patient care.',
            ar: 'في أيكلينيك، نعمل على مجموعة واسعة من التقنيات لتسهيل الوصول إلى المعلومات الصحية بشكل غير تقليدي. تشمل هذه التقنيات الصحة الجوالة، البيانات الضخمة، أنظمة الذكاء الاصطناعي للتشخيصات والعلاجات الرقمية وحلول دعم القرارات السريرية. فضلاً عن الخوارزميات المتقدمة القادرة بشكل متزايد على دعم هذه الحلول. نؤمن من خلال نظامنا للبحث والتطوير أن الصحة الرقمية تمثل حلقة وصل ضرورية بين علم البيانات والرعاية الصحية، تصل النقاط بشكل أشمل لاتخاذ قرارات صحية أدق وتقديم رعاية طبية متخصصة'
          },
          comment: 3,
          favorite: 2,
          blog_date: '02.01.2019',
          comments: [
            {
              name: {
                en: 'Nicole Burke',
                ar: 'أحمد محمد'
              },
              email: '',
              comment: {
                en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                ar: "لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايتسيت دو أيوسمويمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم يسكينج أليايتسيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوازلوريم ايبسوم دولار سيت أمي"
              },
              comment_date: '19.02.2020',
            },
          ]
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
    }
  }
  
}
</script>