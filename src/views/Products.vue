<template>
  <div class="products">
    <div class="slider products-slider text-center loading">
      <img class="img-fluid" src="@/assets/img/bg_2.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('products.title') }}</h1>
        <hr/>
      </div>
    </div>
    <div class="row m-0 products-title-container">
      <div class="col-xl-9 mx-auto py-5">
        <h1 class="font-weight-lighter">{{ $t('products.sub_title')}}</h1>
          <hr/>
        <p>{{ $t('products.description') }}</p>
      </div>
    </div>
    <div class="container">
      <div class="row m-0" v-for="(product, index) in productList" :key="index">
        <div class="row col-12 m-0 p-0" v-if="index % 2 ===0">
          <div class="col-lg-6 bg-grey center-container">
            <div class="center-content bg-white py-3 px-4 px-lg-3 px-xl-4">
              <div class="one-products-container">
                <div class="logo-container mb-1">
                  <img :src="`/img/${product.logo[$i18n.locale]}`" class="img-fluid"/>
                </div>
                <div class="one-products-content">
                  <h2>{{ product.title[$i18n.locale] }}</h2>
                  <div class="hr-container">
                    <hr/>
                  </div>
                  <p>{{ product.description[$i18n.locale] }}</p>
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
                  <img :src="`/img/${product.logo[$i18n.locale]}`" class="img-fluid"/>
                </div>
                <div class="one-products-content">
                  <h2>{{ product.title[$i18n.locale] }}</h2>
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
            en: 'Mo-fiD® Klatu',
            ar: 'مو-فيد®كلاتو'
          },
          image: {
            en: 'product_1.png',
            ar: 'product_1_ar.png'
          },
          read_more: false,
          description: {
            en: 'Mo-fiD® Klatu is a Low Power Bluetooth device using state-of-the-art reconfigurable low power wireless adaptor. The Device seamlessly reads and transmits the blood glucose data from a variety of market glucose meters* and transmits the data to patient’s own smart phone or tablet using myMofiD® App.',
            ar: 'مو-فيد® كلاتو هو جهاز بلوتوث منخفض الطاقة يستخدم أحدث محول لاسلكي منخفض الطاقة قابل للشحن. يقرأ الجهاز بسهولة بيانات جلوكوز الدم وينقلها من مجموعة متنوعة من أجهزة قياس الجلوكوز في السوق*  ويقوم بنقل البيانات إلى الهاتف الذكي أو الجهاز اللوحي (تابلت) الخاص بالمريض باستخدام تطبيق ماي مو-فيد®. '
          },
          full_description: {
            en: '',
            ar: ''
          }
        },
        {
          logo: {
            en: 'mofid_logo.png',
            ar: 'mofid_logo_ar.png'
          },
          title: {
            en: 'Mo-fiD® ClinicalBooth',
            ar: 'مو-فيد®كلينيكال بوث'
          },
          image: {
            en: 'product_2.png',
            ar: 'product_2_ar.png'
          },
          read_more: true,
          description: {
            en: 'Mo-fiD® ClinicalBooth is a secure cloud based diabetes management portal developed for healthcare providers to empower the clinicians with complementary care insight of their diabetic patients’ care and management process using the Mo-fiD® platform.',
            ar: 'مو-فيد® كلينيكال بوث عبارة عن بوابة أون لاين آمنة لإدارة مرض السكري تم تطويرها لمقدمي الرعاية الصحية لتمكين الأطباء من الحصول على رؤية مقربة  تكميلية لرعاية مرضى السكري  وعملية إدارة مرضهم باستخدام منصة  مو-فيد®.'
          },
          full_description: {
            en: 'Mo-fiD® ClinicalBooth is a secure cloud based diabetes management portal developed for healthcare providers to empower the clinicians with complementary care insight of their diabetic patients’ care and management process using the Mo-fiD® platform.<br/><br/>The Mo-fiD® Clinical Booth provides the information and assessment of the patient’s data for better clinical outcomes by enabling the Mo-fiD® technology to  achieve the patient’s glycaemic targets and therapy. The Clinical Booth also assists the clinicians in making more informed decisions with minimized risks of any adverse complications with better care outcomes and less hospital admissions.<br/><br/>We have designed and developed the Mo-fiD® Clinical Booth based on the latest published clinical ‘ADA’ standards on diabetes clinical care procedures. We strive to provide a system that supports the clinicians for better healthcare and management of their patient’s condition, allowing better overseeing, prioritizing and making informed decisions on their critical therapy and optimize their care pathway.',
            ar: 'مو-فيد® كلينيكال بوث عبارة عن بوابة أون لاين آمنة لإدارة مرض السكري تم تطويرها لمقدمي الرعاية الصحية لتمكين الأطباء من الحصول على رؤية مقربة  تكميلية لرعاية مرضى السكري  وعملية إدارة مرضهم باستخدام منصة  مو-فيد®.<br/><br/>يوفر مو-فيد® كلينيكال بوث بيانات المريض وتقييمها للحصول على نتائج سريرية أفضل من خلال استخدام تقنية مو-فيد® في تحقيق أهداف نسبة جلوكوز الدم وتناول الجرعات العلاجية. كما يساعد مو-فيد®كلينيكال بوث الأطباء في اتخاذ قرارات أفضل مع تقليل مخاطر حدوث أي مضاعفات سلبية بما يؤدي إلى نتائج أفضل وتقليل معدلات دخول المستشفى.<br/><br/>لقد قمنا بتصميم وتطوير مو-فيد® كلينيكال بوث بناءً على أحدث المعايير السريرية المنشورة للجمعية الأمريكية  ‘ADA’  حول إجراءات الرعاية السريرية لمرض السكري. حيث نسعى جاهدين لتوفير نظام يساعد الأطباء في إدارة حالة مرضاهم من أجل رعاية صحية أفضل. هذا النظام سيتيح لهم الإشراف بشكل أفضل، تحديد الأولويات، اتخاذ القرارات، علاج مرضاهم وتحسين مستوى رعايتهم.'
          }
        },
        {
          logo: {
            en: 'mofid_logo.png',
            ar: 'mofid_logo_ar.png'
          },
          title: {
            en: 'myMo-fiD® App',
            ar: 'تطبيق ماي مو-فيد®'
          },
          image: {
            en: 'product_3.png',
            ar: 'product_3_ar.png'
          },
          read_more: true,
          description: {
            en: 'myMofiD® App is an easy to use Android/iOS based application dedicated for Middle East patients in Arabic and English languages. It is designed to provide all the information the patient needs for self-management including blood glucose, food and water intake, activities performed and much more.',
            ar: 'تطبيق ماي مو-فيد® هو تطبيق سهل الاستخدام يعمل بنظام  أندرويد / iOS   مخصص لمرضى الشرق الأوسط باللغتين العربية والإنجليزية. وهو مصمم لتوفير جميع المعلومات التي يحتاجها المريض لإدارة مرضه بشكل ذاتي بما في ذلك نسبة جلوكوز الدم ، وتناول الطعام والماء ، والأنشطة اليومية وغير ذلك الكثير.'
          },
          full_description: {
            en: 'myMofiD® App is an easy to use Android/iOS based application dedicated for Middle East patients in Arabic and English languages. It is designed to provide all the information the patient needs for self-management including blood glucose, food and water intake, activities performed and much more. It generates alarms, notifications and warnings when the blood glucose goes lower or higher than the normal range. It is specially customised for Middle Eastern patients to take care of their health during Ramadan fasting month, Hajj and Umrah.',
            ar: 'تطبيق ماي مو-فيد® هو تطبيق سهل الاستخدام يعمل بنظام  أندرويد / iOS  مخصص لمرضى الشرق الأوسط باللغتين العربية والإنجليزية. وهو مصمم لتوفير جميع المعلومات التي يحتاجها المريض لإدارة مرضه بشكل ذاتي بما في ذلك نسبة جلوكوز الدم ، وتناول الطعام والماء ، والأنشطة اليومية وغير ذلك الكثير.حيث إنه يقوم بإصدار إنذارات، إشعارات وتحذيرات عندما ينخفض أو يرتفع مستوى جلوكوز الدم عن المعدل الطبيعي. وقد تم تطويره خصيصا لمرضى الشرق الأوسط للعناية بصحتهم خلال شهر رمضان وموسم الحج والعمرة.'
          }
        },
        {
          logo: {
            en: 'mofid_logo.png',
            ar: 'mofid_logo_ar.png'
          },
          title: {
            en: 'Mo-fiD® POD',
            ar: 'مو-فيد® بودبود'
          },
          image: {
            en: 'product_4.png',
            ar: 'product_4_ar.png'
          },
          read_more: true,
          description: {
            en: 'The Mo-fiD® POD is a secure supplementary web IoT ready portal developed for Mo-fiD®’s patients and fully synchronized seamlessly with myMo-fiD® App. It automatically updates the captured glucose reading and allows the Mo-fiD® users to track and view their blood glucose readings and correlate with food intake and activities performed during the day.',
            ar: 'مو-فيد® بود عبارة عن بوابة تكميلية آمنة من شبكة إنترنت الأشياء تم تطويرها لمرضى مو-فيد® ومتزامنة تمامًا و بسلاسة مع تطبيق ماي مو-فيد®.حيث  يقوم تلقائيًا بتحديث قراءة نسبة الجلوكوز التي تم قياسها ويسمح لمستخدمي  مو-فيد® بتتبع وعرض قراءات نسبة جلوكوز الدم وربطها بتناول الطعام والأنشطة التي يتم ممارستها خلال اليوم.'
          },
          full_description: {
            en: 'The Mo-fiD® POD is a secure supplementary web IoT ready portal developed for Mo-fiD®’s patients and fully synchronized seamlessly with myMo-fiD® App. It automatically updates the captured glucose reading and allows the Mo-fiD® users to track and view their blood glucose readings and correlate with food intake and activities performed during the day.<br/><br/>The Mo-fiD® POD includes personalized information on medications, appointments and messages from the healthcare provider besides other features for easy and illustrative graphical patterns and presentations that assist and educate the patients in their monitoring and management therapy. It allows smart alerting for any potential acute hypoglycemia, low insulin intake levels and medication intake gaps.',
            ar: ' مو-فيد® بود عبارة عن بوابة تكميلية آمنة من شبكة إنترنت الأشياء تم تطويرها لمرضى  مو-فيد® ومتزامنة تمامًا و بسلاسة مع تطبيق ماي  مو-فيد®.حيث  يقوم تلقائيًا بتحديث قراءة نسبة الجلوكوز التي تم قياسها ويسمح لمستخدمي   مو-فيد® بتتبع وعرض قراءات نسبة جلوكوز الدم وربطها بتناول الطعام والأنشطة التي يتم ممارستها خلال اليوم.<br/><br/>يشتمل مو-فيد® بود على معلومات شخصية عن الأدوية، المواعيد ورسائل مقدمي الرعاية الصحية إلى جانب ميزات أخرى كرسوم بيانية، عروض تقديمية وتوضيحية بسيطة توضح المرضى طرق مراقبة وإدارة علاجهم. كما يتيح أيضاً التنبيه الذكي لأي نقص حاد محتمل في جلوكوز الدم أوانخفاض مستويات تناول الأنسولين والفترات البينية لمواعيد تناول الدواء.'
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
            en: 'Jamel® is the first tailored pedometer app for people with diabetes to monitor daily walking or jogging besides burning calories, distance covered, active time, as well as average speed per hour.',
            ar: 'جمل ® هو أول تطبيق لحساب الخطوات مخصص للأشخاص الذين يعانون من مرض السكري. حيث يراقب معدل المشي اليومي أو الركض إلى جانب حرق السعرات الحرارية وتغطية المسافة المقطوعة ووقت النشاط ، فضلاً عن متوسط السرعة في الساعة.'
          },
          full_description: {
            en: 'Jamel® is the first tailored pedometer app for people with diabetes to monitor daily walking or jogging besides burning calories, distance covered, active time, as well as average speed per hour.<br/><br/>Besides pedometering, Jamel® advises the weather condition, measures heart rate and checks health condition periodically while exercising.<br/><br/>Jamel® comes with a simple and sleek interface, which makes it quite easy to use. Moreover, the app gives the user the option to import all fitness data from Google Fit , iWatch and sync with most common fitness watches and bands like Fitbit.<br/><br/>Jamel® premium subscription allows the user free access to Mo-fiD®POD, a diabetes self-management portal developed by iKleeniK to help the user monitor blood glucose, activities, diet, water, medications, weight control and much more! Jamel® synchronizes with Mo-fiD®POD portal via secure HIPAA compliance cloud server. This particular offering is known for its widget that sits on user’s home screen giving a constant view of all the user needs to know for better diabetes self-management.',
            ar: 'جمل® هو أول تطبيق لحساب الخطوات مخصص للأشخاص الذين يعانون من مرض السكري. حيث يراقب معدل المشي اليومي أو الركض إلى جانب حرق السعرات الحرارية وتغطية المسافة المقطوعة ووقت النشاط ، فضلاً عن متوسط السرعة في الساعة.<br/><br/>إلى جانب حساب الخطوات، يقدم جمل® النصائح بخصوص حالة الطقس، يقيس معدل ضربات القلب ويفحص الحالة الصحية بشكل دوري أثناء التمرين.<br/><br/>يأتي جمل® بواجهة بسيطة وأنيقة سهلة الاستخدام. وكذلك يمنح التطبيق المستخدم خيار استيراد جميع بيانات اللياقة من جوجل فيت (Google Fit) و   iWatch والمزامنة مع معظم ساعات و أربطة اللياقة البدنية مثل فيت بيت (Fitbit) .<br/><br/>يتيح الاشتراك المميز من جمل® للمستخدم إمكانية الوصول إلى مو-فيد® بود، وهي بوابة للإدارة الذاتية لمرض السكري قامت بتطويرها أيكلينيك لمساعدة المستخدم على مراقبة نسبة جلوكوز الدم، الأنشطة، النظام الغذائي، الماء، الأدوية، التحكم في الوزن وما هو أكثر من ذلك بكثير! يقوم  جمل® بالتزامن مع مو-فيد® بود بورتال عبر خادم انترنت آمن متوافق مع HIPAA. يُعرف هذا العرض الخاص بعنصر واجهة المستخدم الذي يقع على شاشة المستخدم الرئيسية، مما يوفر رؤية ثابتة لجميع احتياجات المستخدمين لإدارة ذاتية أفضل لمرض السكري.'
          }
        },
      ],
      product: {},
      isShowDetail: false
    }
  },
  created() {
    this.$store.dispatch('setStatus', 'loading')
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('setStatus', '')
    })
  },
  methods: {
    showDetail(val) {
      this.product = val
      this.isShowDetail = true
    }
  }
}
</script>