<template>
  <div class="products">
    <div class="slider products-slider text-center loading">
      <img @load="handleLoad" class="img-fluid" src="@/assets/img/bg_2.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('products.title') }}</h1>
        <hr/>
      </div>
    </div>
    <div class="container p-0">
      <div class="row m-0 products-title-container">
        <div class="col-xl-9 mx-auto py-5">
          <h1 class="font-weight-lighter">{{ $t('products.sub_title')}}</h1>
            <hr/>
          <p v-html="$t('products.description')"></p>
        </div>
      </div>
      <div class="row m-0" v-for="(product, index) in productList" :key="index">
        <div class="row col-12 m-0 p-0" v-if="index % 2 ===0">
          <div class="col-lg-6 bg-grey center-container">
            <div class="center-content bg-white py-3 px-3 px-lg-3 px-xl-4">
              <div class="one-products-container">
                <div class="logo-container mb-1">
                  <img @load="handleLoad" :src="`/img/${product.logo[$i18n.locale]}`" style="max-width:100px"/>
                </div>
                <div class="one-products-content">
                  <h2 v-html="product.title[$i18n.locale]"></h2>
                  <div class="hr-container">
                    <hr/>
                  </div>
                  <p v-html="product.description[$i18n.locale]"></p>
                  <a 
                    v-if="product.read_more" 
                    href="#" 
                    class="btn btn-read-more my-1"
                    @click.prevent="showDetail(product)">
                    {{ $t('menu.read_more') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 p-0">
            <img :src="`/img/${product.image[$i18n.locale]}`" class="img-fluid"/>
          </div>
        </div>
        <div class="row col-12 m-0 p-0" v-else>
          <div class="col-lg-6 p-0">
            <img :src="`/img/${product.image[$i18n.locale]}`" class="img-fluid"/>
          </div>
          <div class="col-lg-6 bg-grey center-container">
            <div class="center-content bg-white py-3 px-4 px-lg-3 px-xl-4">
              <div class="one-products-container">
                <div class="logo-container mb-1">
                  <img @load="handleLoad" :src="`/img/${product.logo[$i18n.locale]}`" style="max-width:100px"/>
                </div>
                <div class="one-products-content">
                  <h2 v-html="product.title[$i18n.locale]"></h2>
                  <div class="hr-container">
                    <hr/>
                  </div>
                  <p v-html="product.description[$i18n.locale]"></p>
                  <a 
                    v-if="product.read_more" 
                    href="#" 
                    class="btn btn-read-more my-1"
                    @click.prevent="showDetail(product)">
                    {{ $t('menu.read_more') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <product-detail v-if="isShowDetail" :product="product" @close="isShowDetail = false"></product-detail>
  </div>
</template>
<script>
import ProductDetail from '../components/ProductDetail.vue'
export default {
  components: {
    ProductDetail
  },
  data() {
    return {
      productList: [
        {
          logo: {
            en: 'mofid_logo.png',
            ar: 'mofid_logo_ar.png'
          },
          title: {
            en: 'Mo-fiD<sup>®</sup> Klatu',
            ar: 'مو-فيد<sup>®</sup>كلاتو'
          },
          image: {
            en: 'product_1.png',
            ar: 'product_1_ar.png'
          },
          read_more: true,
          description: {
            en: 'Mo-fiD<sup>®</sup> Klatu is a Low Power Bluetooth device using state-of-the-art reconfigurable low power wireless adaptor. The Device seamlessly reads and transmits the blood glucose data from a variety of market glucose meters* and transmits the data to patient’s own smart phone or tablet using myMofiD<sup>®</sup> App.',
            ar: 'مو-فيد<sup>®</sup> كلاتو هو جهاز بلوتوث منخفض الطاقة يستخدم أحدث محول لاسلكي منخفض الطاقة قابل للشحن. يقرأ الجهاز بسهولة بيانات جلوكوز الدم وينقلها من مجموعة متنوعة من أجهزة قياس الجلوكوز في السوق*  ويقوم بنقل البيانات إلى الهاتف الذكي أو الجهاز اللوحي (تابلت) الخاص بالمريض باستخدام تطبيق ماي مو-فيد<sup>®</sup>. '
          },
          full_description: {
            en: 'Mo-fiD<sup>®</sup> Klatu is a Low Power Bluetooth device using state-of-the-art reconfigurable low power wireless adaptor. The Device seamlessly reads and transmits the blood glucose data from a variety of market glucose meters* and transmits the data to patient’s own smart phone or tablet using myMofiD<sup>®</sup> App.<br/><br/>For more information, please visit <a href="https://www.mymofid.com" target="_blank">www.mymofid.com</a>',
            ar: 'مو-فيد<sup>®</sup> كلاتو هو جهاز بلوتوث منخفض الطاقة يستخدم أحدث محول لاسلكي منخفض الطاقة قابل للشحن. يقرأ الجهاز بسهولة بيانات جلوكوز الدم وينقلها من مجموعة متنوعة من أجهزة قياس الجلوكوز في السوق*  ويقوم بنقل البيانات إلى الهاتف الذكي أو الجهاز اللوحي (تابلت) الخاص بالمريض باستخدام تطبيق ماي مو-فيد<sup>®</sup>. <br/><br/>للمزيد من المعلومات يرجى زياره موقعنا <a href="https://www.mymofid.com" class="span-number" target="_blank">www.mymofid.com</a>'
          }
        },
        {
          logo: {
            en: 'mofid_logo.png',
            ar: 'mofid_logo_ar.png'
          },
          title: {
            en: 'Mo-fiD<sup>®</sup> ClinicalBooth',
            ar: 'مو-فيد<sup>®</sup> كلينيكال بوث'
          },
          image: {
            en: 'product_2.png',
            ar: 'product_2_ar.png'
          },
          read_more: true,
          description: {
            en: 'Mo-fiD<sup>®</sup> ClinicalBooth is a secure cloud based diabetes management portal developed for healthcare providers to empower the clinicians with complementary care insight of their diabetic patients’ care and management process using the Mo-fiD<sup>®</sup> platform.',
            ar: 'مو-فيد<sup>®</sup> كلينيكال بوث عبارة عن بوابة أون لاين آمنة لإدارة مرض السكري تم تطويرها لمقدمي الرعاية الصحية لتمكين الأطباء من الحصول على رؤية مقربة  تكميلية لرعاية مرضى السكري  وعملية إدارة مرضهم باستخدام منصة  مو-فيد<sup>®</sup>.'
          },
          full_description: {
            en: 'Mo-fiD<sup>®</sup> ClinicalBooth is a secure cloud based diabetes management portal developed for healthcare providers to empower the clinicians with complementary care insight of their diabetic patients’ care and management process using the Mo-fiD<sup>®</sup> platform.<br/><br/>The Mo-fiD<sup>®</sup> Clinical Booth provides the information and assessment of the patient’s data for better clinical outcomes by enabling the Mo-fiD<sup>®</sup> technology to  achieve the patient’s glycaemic targets and therapy. The Clinical Booth also assists the clinicians in making more informed decisions with minimized risks of any adverse complications with better care outcomes and less hospital admissions.<br/><br/>We have designed and developed the Mo-fiD<sup>®</sup> Clinical Booth based on the latest published clinical ‘ADA’ standards on diabetes clinical care procedures. We strive to provide a system that supports the clinicians for better healthcare and management of their patient’s condition, allowing better overseeing, prioritizing and making informed decisions on their critical therapy and optimize their care pathway.<br/><br/>For more information, please visit <a href="https://www.mymofid.com" target="_blank">www.mymofid.com</a> ',
            ar: 'مو-فيد<sup>®</sup> كلينيكال بوث عبارة عن بوابة أون لاين آمنة لإدارة مرض السكري تم تطويرها لمقدمي الرعاية الصحية لتمكين الأطباء من الحصول على رؤية مقربة  تكميلية لرعاية مرضى السكري  وعملية إدارة مرضهم باستخدام منصة  مو-فيد<sup>®</sup>.<br/><br/>يوفر مو-فيد<sup>®</sup> كلينيكال بوث بيانات المريض وتقييمها للحصول على نتائج سريرية أفضل من خلال استخدام تقنية مو-فيد<sup>®</sup> في تحقيق أهداف نسبة جلوكوز الدم وتناول الجرعات العلاجية. كما يساعد مو-فيد<sup>®</sup>كلينيكال بوث الأطباء في اتخاذ قرارات أفضل مع تقليل مخاطر حدوث أي مضاعفات سلبية بما يؤدي إلى نتائج أفضل وتقليل معدلات دخول المستشفى.<br/><br/>لقد قمنا بتصميم وتطوير مو-فيد<sup>®</sup> كلينيكال بوث بناءً على أحدث المعايير السريرية المنشورة للجمعية الأمريكية  ‘<span class="span-number">ADA</span>’  حول إجراءات الرعاية السريرية لمرض السكري. حيث نسعى جاهدين لتوفير نظام يساعد الأطباء في إدارة حالة مرضاهم من أجل رعاية صحية أفضل. هذا النظام سيتيح لهم الإشراف بشكل أفضل، تحديد الأولويات، اتخاذ القرارات، علاج مرضاهم وتحسين مستوى رعايتهم.<br/><br/>للمزيد من المعلومات يرجى زياره موقعنا <a href="https://www.mymofid.com" class="span-number" target="_blank">www.mymofid.com</a>'
          }
        },
        {
          logo: {
            en: 'mofid_logo.png',
            ar: 'mofid_logo_ar.png'
          },
          title: {
            en: 'myMo-fiD<sup>®</sup> App',
            ar: 'تطبيق ماي مو-فيد<sup>®</sup>'
          },
          image: {
            en: 'product_3.png',
            ar: 'product_3_ar.png'
          },
          read_more: true,
          description: {
            en: 'myMofiD<sup>®</sup> App is an easy to use Android/iOS based application dedicated for Middle East patients in Arabic and English languages. It is designed to provide all the information the patient needs for self-management including blood glucose, food and water intake, activities performed and much more.',
            ar: 'تطبيق ماي مو-فيد<sup>®</sup> هو تطبيق سهل الاستخدام يعمل بنظام  أندرويد / <span class="span-number">iOS</span>   مخصص لمرضى الشرق الأوسط باللغتين العربية والإنجليزية. وهو مصمم لتوفير جميع المعلومات التي يحتاجها المريض لإدارة مرضه بشكل ذاتي بما في ذلك نسبة جلوكوز الدم ، وتناول الطعام والماء ، والأنشطة اليومية وغير ذلك الكثير.'
          },
          full_description: {
            en: 'myMofiD<sup>®</sup> App is an easy to use Android/iOS based application dedicated for Middle East patients in Arabic and English languages. It is designed to provide all the information the patient needs for self-management including blood glucose, food and water intake, activities performed and much more. It generates alarms, notifications and warnings when the blood glucose goes lower or higher than the normal range. It is specially customised for Middle Eastern patients to take care of their health during Ramadan fasting month, Hajj and Umrah.<br/><br/>For more information, please visit <a href="https://www.mymofid.com" target="_blank">www.mymofid.com</a> ',
            ar: 'تطبيق ماي مو-فيد<sup>®</sup> هو تطبيق سهل الاستخدام يعمل بنظام  أندرويد / <span class="span-number">iOS</span>  مخصص لمرضى الشرق الأوسط باللغتين العربية والإنجليزية. وهو مصمم لتوفير جميع المعلومات التي يحتاجها المريض لإدارة مرضه بشكل ذاتي بما في ذلك نسبة جلوكوز الدم ، وتناول الطعام والماء ، والأنشطة اليومية وغير ذلك الكثير.حيث إنه يقوم بإصدار إنذارات، إشعارات وتحذيرات عندما ينخفض أو يرتفع مستوى جلوكوز الدم عن المعدل الطبيعي. وقد تم تطويره خصيصا لمرضى الشرق الأوسط للعناية بصحتهم خلال شهر رمضان وموسم الحج والعمرة.<br/><br/>للمزيد من المعلومات يرجى زياره موقعنا <a href="https://www.mymofid.com" class="span-number" target="_blank">www.mymofid.com</a>'
          }
        },
        {
          logo: {
            en: 'mofid_logo.png',
            ar: 'mofid_logo_ar.png'
          },
          title: {
            en: 'Mo-fiD<sup>®</sup> POD',
            ar: 'مو-فيد<sup>®</sup> بود'
          },
          image: {
            en: 'product_4.png',
            ar: 'product_4_ar.png'
          },
          read_more: true,
          description: {
            en: 'The Mo-fiD<sup>®</sup> POD is a secure supplementary web IoT ready portal developed for Mo-fiD<sup>®</sup>’s patients and fully synchronized seamlessly with myMo-fiD<sup>®</sup> App. It automatically updates the captured glucose reading and allows the Mo-fiD<sup>®</sup> users to track and view their blood glucose readings and correlate with food intake and activities performed during the day.',
            ar: 'مو-فيد<sup>®</sup> بود عبارة عن بوابة تكميلية آمنة من شبكة إنترنت الأشياء تم تطويرها لمرضى مو-فيد<sup>®</sup> ومتزامنة تمامًا و بسلاسة مع تطبيق ماي مو-فيد<sup>®</sup>.حيث  يقوم تلقائيًا بتحديث قراءة نسبة الجلوكوز التي تم قياسها ويسمح لمستخدمي  مو-فيد<sup>®</sup> بتتبع وعرض قراءات نسبة جلوكوز الدم وربطها بتناول الطعام والأنشطة التي يتم ممارستها خلال اليوم.'
          },
          full_description: {
            en: 'The Mo-fiD<sup>®</sup> POD is a secure supplementary web IoT ready portal developed for Mo-fiD<sup>®</sup>’s patients and fully synchronized seamlessly with myMo-fiD<sup>®</sup> App. It automatically updates the captured glucose reading and allows the Mo-fiD<sup>®</sup> users to track and view their blood glucose readings and correlate with food intake and activities performed during the day.<br/><br/>The Mo-fiD<sup>®</sup> POD includes personalized information on medications, appointments and messages from the healthcare provider besides other features for easy and illustrative graphical patterns and presentations that assist and educate the patients in their monitoring and management therapy. It allows smart alerting for any potential acute hypoglycemia, low insulin intake levels and medication intake gaps.<br/><br/>For more information, please visit <a href="https://www.mymofid.com" target="_blank">www.mymofid.com</a> ',
            ar: ' مو-فيد<sup>®</sup> بود عبارة عن بوابة تكميلية آمنة من شبكة إنترنت الأشياء تم تطويرها لمرضى  مو-فيد<sup>®</sup> ومتزامنة تمامًا و بسلاسة مع تطبيق ماي  مو-فيد<sup>®</sup>.حيث  يقوم تلقائيًا بتحديث قراءة نسبة الجلوكوز التي تم قياسها ويسمح لمستخدمي   مو-فيد<sup>®</sup> بتتبع وعرض قراءات نسبة جلوكوز الدم وربطها بتناول الطعام والأنشطة التي يتم ممارستها خلال اليوم.<br/><br/>يشتمل مو-فيد<sup>®</sup> بود على معلومات شخصية عن الأدوية، المواعيد ورسائل مقدمي الرعاية الصحية إلى جانب ميزات أخرى كرسوم بيانية، عروض تقديمية وتوضيحية بسيطة توضح المرضى طرق مراقبة وإدارة علاجهم. كما يتيح أيضاً التنبيه الذكي لأي نقص حاد محتمل في جلوكوز الدم أوانخفاض مستويات تناول الأنسولين والفترات البينية لمواعيد تناول الدواء.<br/><br/>للمزيد من المعلومات يرجى زياره موقعنا <a href="https://www.mymofid.com" class="span-number" target="_blank">www.mymofid.com</a>'
          }
        },
        {
          logo: {
            en: 'jamel_logo.png',
            ar: 'jamel_logo_ar.png'
          },
          title: {
            en: 'Jamel App',
            ar: 'تطبيق جمل'
          },
          image: {
            en: 'product_5.png',
            ar: 'product_5_ar.png'
          },
          read_more: true,
          description: {
            en: 'Jamel<sup>®</sup> is the first tailored pedometer app for people with diabetes to monitor daily walking or jogging besides burning calories, distance covered, active time, as well as average speed per hour.',
            ar: 'جمل <sup>®</sup> هو أول تطبيق لحساب الخطوات مخصص للأشخاص الذين يعانون من مرض السكري. حيث يراقب معدل المشي اليومي أو الركض إلى جانب حرق السعرات الحرارية وتغطية المسافة المقطوعة ووقت النشاط ، فضلاً عن متوسط السرعة في الساعة.'
          },
          full_description: {
            en: 'Jamel<sup>®</sup> is the first tailored pedometer app for people with diabetes to monitor daily walking or jogging besides burning calories, distance covered, active time, as well as average speed per hour.<br/><br/>Besides pedometering, Jamel<sup>®</sup> advises the weather condition, measures heart rate and checks health condition periodically while exercising.<br/><br/>Jamel<sup>®</sup> comes with a simple and sleek interface, which makes it quite easy to use. Moreover, the app gives the user the option to import all fitness data from Google Fit , iWatch and sync with most common fitness watches and bands like Fitbit.<br/><br/>Jamel<sup>®</sup> premium subscription allows the user free access to Mo-fiD<sup>®</sup>POD, a diabetes self-management portal developed by iKleeniK to help the user monitor blood glucose, activities, diet, water, medications, weight control and much more! Jamel<sup>®</sup> synchronizes with Mo-fiD<sup>®</sup>POD portal via secure HIPAA compliance cloud server. This particular offering is known for its widget that sits on user’s home screen giving a constant view of all the user needs to know for better diabetes self-management.<br/><br/>For more information, please visit <a href="https://www.myjamel.com" target="_blank">www.myjamel.com</a> ',
            ar: 'جمل<sup>®</sup> هو أول تطبيق لحساب الخطوات مخصص للأشخاص الذين يعانون من مرض السكري. حيث يراقب معدل المشي اليومي أو الركض إلى جانب حرق السعرات الحرارية وتغطية المسافة المقطوعة ووقت النشاط ، فضلاً عن متوسط السرعة في الساعة.<br/><br/>إلى جانب حساب الخطوات، يقدم جمل<sup>®</sup> النصائح بخصوص حالة الطقس، يقيس معدل ضربات القلب ويفحص الحالة الصحية بشكل دوري أثناء التمرين.<br/><br/>يأتي جمل<sup>®</sup> بواجهة بسيطة وأنيقة سهلة الاستخدام. وكذلك يمنح التطبيق المستخدم خيار استيراد جميع بيانات اللياقة من جوجل فيت <span class="span-number">(Google Fit)</span> و   <span class="span-number">iWatch</span> والمزامنة مع معظم ساعات و أربطة اللياقة البدنية مثل فيت بيت <span class="span-number">(Fitbit)</span>.<br/><br/>يتيح الاشتراك المميز من جمل<sup>®</sup> للمستخدم إمكانية الوصول إلى مو-فيد<sup>®</sup> بود، وهي بوابة للإدارة الذاتية لمرض السكري قامت بتطويرها أيكلينيك لمساعدة المستخدم على مراقبة نسبة جلوكوز الدم، الأنشطة، النظام الغذائي، الماء، الأدوية، التحكم في الوزن وما هو أكثر من ذلك بكثير! يقوم  جمل<sup>®</sup> بالتزامن مع مو-فيد<sup>®</sup> بود بورتال عبر خادم انترنت آمن متوافق مع <span class="span-number">HIPAA</span>. يُعرف هذا العرض الخاص بعنصر واجهة المستخدم الذي يقع على شاشة المستخدم الرئيسية، مما يوفر رؤية ثابتة لجميع احتياجات المستخدمين لإدارة ذاتية أفضل لمرض السكري.<br/><br/>للمزيد من المعلومات يرجى زياره موقعنا <a href="https://www.myjamel.com" target="_blank" class="span-number">www.myjamel.com</a>'
          }
        },
      ],
      product: {},
      isShowDetail: false,
      cntLoadedImage: 0
    }
  },
  watch: {
    cntLoadedImage(val) {
      if (val >= this.productList.length + 1) {
        this.$store.dispatch('setStatus', '')  
      }
    }
  },
  created() {
    this.$store.dispatch('setStatus', 'loading')
  },
  methods: {
    showDetail(val) {
      this.product = val
      this.isShowDetail = true
    },
    handleLoad() {
      this.cntLoadedImage++
    }
  }
}
</script>