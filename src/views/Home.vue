<template>
  <div class="home">
    <div class="slider home-slider text-center">
      <img class="img-fluid" src="@/assets/img/bg_1.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('home.slider_title') }}</h1>
        <h4 class="font-weight-lighter">{{ $t('home.slider_subtitle') }}</h4>
        <hr/>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6">
        <div class="home-main-content">
          <div class="bg-icon">
            <img src="@/assets/img/mobile-phone.png" class="img-fluid"/>
          </div>
          <h3>{{ $t('home.working_subtitle') }}</h3>
          <h1>{{ $t('home.working_title') }}</h1>
          <div class="hr-container">
            <hr/>
          </div>
          <p>
            {{ $t('home.working_desc') }}
          </p>
          <a href="#" class="btn btn-read-more px-4" @click.prevent="isShowHomeWorking = true">{{ $t('menu.read_more') }}</a>
        </div>
      </div>
      <div class="col-lg-6 p-0">
        <img class="img-fluid" src="@/assets/img/home_1.png" />
      </div>
    </div>
    <div class="row m-0 bg-grey">
      <div class="row col-xl-9 mx-auto text-center">
        <div class="col-md-4 my-5">
          <div class="bg-icon mx-auto">
            <img src="@/assets/img/deep_learning.png"/>
          </div>
          <h4>{{ $t('home.cat_1_title') }}</h4>
          <p>{{ $t('home.cat_1_desc') }}</p>
        </div>
        <div class="col-md-4 my-5">
          <div class="bg-icon mx-auto">
            <img src="@/assets/img/cognitive_evolvement.png"/>
          </div>
          <h4>{{ $t('home.cat_2_title') }}</h4>
          <p>{{ $t('home.cat_2_desc') }}</p>
        </div>
        <div class="col-md-4 my-5">
          <div class="bg-icon mx-auto">
            <img src="@/assets/img/big_data.png"/>
          </div>
          <h4>{{ $t('home.cat_3_title') }}</h4>
          <p>{{ $t('home.cat_3_desc') }}</p>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6 col-xl-4 p-0 bg-primary">
        <div class="home-main-content span-content">
          <h1 class="text-white">{{ $t('home.span_of') }}</h1>
          <h1>{{ $t('home.expertise') }}</h1>
          <div class="hr-container">
            <hr/>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-8 p-0">
        <div class="row m-0">
          <div class="col-xl-6 p-0" v-for="(spanEx, index) in spanExpertiseList" :key="index">
            <div class="one-span-container">
              <div class="one-span-content">
                <h4>{{ spanEx.title[$i18n.locale] }}</h4>
                <div class="hr-container">
                  <hr/>
                </div>
                <p v-html="spanEx.description[$i18n.locale]"></p>
                <a href="#" class="read-more-link" @click.prevent="showSpanExpertise(spanEx)">{{ $t('menu.read_more') }}</a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 p-0 bg-grey">
            <div class="one-span-container">
              <div class="one-span-content">
                <img src="@/assets/img/phone_blutooth.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 product-container">
      <div class="col-12">
        <h1>{{ $t('home.products_title') }}</h1>
        <hr/>
      </div>
      <div class="col-md-5 product-img-container">
          <div class="product-img">
            <img class="img-fluid" src="@/assets/img/mofid_device.png">
          </div>
      </div>
      <div class="col-md-7 product-description">
        <div class="logo-content">
          <img src="@/assets/img/mofid_white.png"/>
          <p>{{ $t('home.products_klatu') }}</p>
        </div>
        <p>
          {{ $t('home.products_desc') }}
        </p>
        <router-link class="btn btn-white" :to="{name: 'products'}">{{ $t('menu.more') }}</router-link>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6 center-container bg-grey">
        <div class="center-content bg-white">
          <div class="home-main-content">
            <div class="bg-icon">
              <img src="@/assets/img/start-up.png"/>
            </div>
            <h1>{{ $t('home.innovation_title') }}</h1>
            <div class="hr-container">
              <hr/>
            </div>
            <p>
              {{ $t('home.innovation_desc') }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 p-0">
        <img src="@/assets/img/home_2.png" class="img-fluid"/>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6 p-0">
        <img src="@/assets/img/home_3.png" class="img-fluid"/>
      </div>
      <div class="col-lg-6 center-container bg-grey">
        <div class="center-content bg-white">
          <div class="home-main-content">
            <div class="bg-icon">
              <img src="@/assets/img/research.png"/>
            </div>
            <h1>{{ $t('home.research_title') }}</h1>
            <div class="hr-container">
              <hr/>
            </div>
            <p>
              {{ $t('home.research_desc') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5 m-0">
      <div class="col-12 normal-title-hr my-2">
        <h1>{{ $t('home.wedo_title') }}</h1>
        <hr/>
      </div>
      <div class="col-lg-12 col-xl-9 mx-auto my-3">
        <div class="row">
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/mobile_health_solutions.png"/>
              </div>
              <div class="title-desc-content">
                <h4>{{ $t('home.wedo_1_title') }}</h4>
                <p>{{ $t('home.wedo_1_desc') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/chronic_disease_management.png"/>
              </div>
              <div class="title-desc-content">
                <h4>{{ $t('home.wedo_2_title') }}</h4>
                <p>{{ $t('home.wedo_2_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-9 mx-auto my-3">
        <div class="row">
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/digital_clinic_portals.png"/>
              </div>
              <div class="title-desc-content">
                <h4>{{ $t('home.wedo_3_title') }}</h4>
                <p>{{ $t('home.wedo_3_desc') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/electronic_patient_record.png"/>
              </div>
              <div class="title-desc-content">
                <h4>{{ $t('home.wedo_4_title') }}</h4>
                <p>{{ $t('home.wedo_4_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xl-9 mx-auto my-3">
        <div class="row">
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/wellbeing_mobile_apps.png"/>
              </div>
              <div class="title-desc-content">
                <h4>{{ $t('home.wedo_5_title') }}</h4>
                <p>{{ $t('home.wedo_5_desc') }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/assistive_technologies.png"/>
              </div>
              <div class="title-desc-content">
                <h4>{{ $t('home.wedo_6_title') }}</h4>
                <p>{{ $t('home.wedo_6_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 bg-grey" style="height:100px;">
      
    </div>
    <div class="row m-0">
      <div class="col-lg-6 col-xl-4 p-0 bg-dark text-white">
        <div class="one-span-container">
          <div class="one-span-content">
            <h1>{{ $t('home.latest_news') }}<span class="text-green">...</span></h1>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4 p-0" v-for="(news, index) in latestNews" :key="index">
        <div class="one-span-container">
          <div class="one-span-content">
            <p>{{ news.location[$i18n.locale] }} / {{ news.date }}</p>
            <h4>{{ news.title[$i18n.locale] }}</h4>
            <div class="hr-container">
              <hr/>
            </div>
            <p>{{ news.description[$i18n.locale] }}</p>
            <a href="#" class="read-more-link">{{ $t('menu.read_more') }}</a>
          </div>
        </div>
      </div>
    </div>
    
    <home-working 
      v-if="isShowHomeWorking"
      @closeHomeWorking="isShowHomeWorking = false">
    </home-working>
    <span-expertise
      v-if="isSpanExpertise"
      :spanEx="spanEx"
      @closeSpanExpertise="isSpanExpertise = false">
    </span-expertise>
  </div>
</template>

<script>
import HomeWorking from '../components/HomeWorking.vue'
import SpanExpertise from '../components/SpanExpertise.vue'
export default {
  name: 'Home',
  components: {
    HomeWorking,
    SpanExpertise
  },
  data() {
    return {
      latestNews: [
        {
          location: {
            en: 'Auckland, New Zealand',
            ar: 'أوكلاند ، نيوزيلندا'
          },
          date: '15.6.2019',
          title: {
            en: 'iKleeniK Announces the Launch of Mobile Application Jamel®',
            ar: 'تعلن أيكلينيك عن إطلاق تطبيق الهاتف المحمول جمل®'
          },
          description: {
            en: 'iKleeniK Limited, New Zealand is excited to announce the launch of mobile application Jamel®, the first Android and iOS fitness app for people with diabetes in English and Arabic.',
            ar: 'يسر أيكلينيك المحدودة  ، نيوزيلندا أن تعلن عن إطلاق تطبيق الهاتف المحمول جمل ® ، أول تطبيق للياقة البدنية يعمل بنظام أندرويد (Android ) وiOS للأشخاص الذين يعانون من مرض السكري باللغتين العربية والإنجليزية.'
          }
        },
      ],
      isShowHomeWorking: false,
      isSpanExpertise: false,
      spanExpertiseList: [
        {
          title: {
            en: 'Advanced IoT technology',
            ar: 'التقنية المتقدمة لإنترنت الأشياء(IoT)'
          },
          description: {
            en: 'Our team brings together a wide spectrum of IoT emerging technologies, business and innovation experience.',
            ar: 'يجمع فريقنا بين خبرة واسعة من التقنيات الناشئة في مجال إنترنت الأشياء وبين الخبرة في مجال الأعمال والابتكار.'
          },
          full_description: {
            en: 'With many healthcare providers are struggling under the dual pressures of a growing demand for its services and chronic underfunding, the Internet of Things can help to make healthcare more efficient by equipping the patients with online sensors to monitor their environment and an internet connection to communicate, the Internet of Things gives healthcare providers greater ability to gather data on their patients and report back in real time. <br/><br/> The IoT presents big benefits for patient care by enabling hospitals to track and monitor patients from the moment they arrived at hospital -- or even in the home before that -- with real-time data from sensors being automatically added to patient records without the need for nurses to take readings or update charts. At a more prosaic level, our IoT vision is allow the healthcare provider to track the vitals more effectively. iKleeniK aims to help users to monitor their health and wellbeing, and alert health professionals to step in when needed. Mo-fiD®, our diabetes digital platform, is developed not only to help diabetics get a better handle on their condition, but has only a minimal IoT component, with links to internet-enabled glucose monitors.',
            ar: 'نظرًا لمعاناة  العديد من مقدمي الرعاية الصحية في ظل الضغوط المزدوجة للطلب المتزايد على خدماتهم ونقص التمويل المزمن ، يمكن لإنترنت الأشياء المساعدة في جعل الرعاية الصحية أكثر فاعلية من خلال تزويد المرضى بأجهزة استشعار عبر الإنترنت لمراقبة بيئتهم واتصال بالإنترنت للتواصل ، يمنح إنترنت الأشياء لمقدمي الرعاية الصحية قدرة أكبر على جمع البيانات عن مرضاهم والإبلاغ عنها في الوقت الفعلي.<br/><br/>يقدم إنترنت الأشياء (IoT) فوائد كبيرة لرعاية المرضى من خلال تمكين المستشفيات من تتبع المرضى ومراقبتهم منذ لحظة وصولهم إلى المستشفى - أو حتى في المنزل قبل ذلك - مع إضافة بيانات تلقائيًا في الوقت الفعلي من أجهزة الاستشعار  إلى سجلات المرضى دون الحاجة للممرضات لاتخاذ قراءات أو تحديث الرسوم البيانية. على مستوى أكثر شفافية ، تسمح رؤيتنا في إنترنت الأشياء لمقدمي الرعاية الصحية بتتبع العوامل الحيوية بفعالية أكبر. يهدف أيكلينيك إلى مساعدة المستخدمين على مراقبة صحتهم ورفاهيتهم ، وتنبيه المختصين بالمجال الصحي إلى التدخل عند الحاجة.<br/></br/>تم تطوير منصتنا الرقمية لمرض السكري ،مو-فيد ® ليس فقط لمساعدة مرضى السكري على التعامل بشكل أفضل مع حالتهم ، ولكن أيضًا عبر إنترنت الأشياء المجهز  بروابط لمقاييس الجلوكوز الممكّنة عبر الإنترنت.'
          }
        },
        {
          title: {
            en: 'Digital Health Solutions',
            ar: 'الحلول الصحية الرقمية'
          },
          description: {
            en: 'We are committed to provide digital innovative solutions to transform healthcare services into the next generation of digital clinics.',
            ar: 'نحن ملتزمون بتوفير حلول رقمية مبتكرة لتحويل خدمات الرعاية الصحية إلى الجيل التالي من العيادات الرقمية.'
          },
          full_description: {
            en: 'We are committed to provide digital innovative solutions to transform healthcare services into the next generation of digital clinics.',
            ar: 'نحن ملتزمون بتوفير حلول رقمية مبتكرة لتحويل خدمات الرعاية الصحية إلى الجيل التالي من العيادات الرقمية.'
          }
        },
        {
          title: {
            en: 'M-health-Solutions',
            ar: 'حلول الصحة الجوالة'
          },
          description: {
            en: 'Our mobile wireless capabilities and expertise including leading edge technology development in all mobile health.',
            ar: 'لدينا قدرات وخبرات خاصة بشبكات المحمول اللاسلكية  بما في ذلك تطوير التكنولوجيا الرائدة في جميع مجالات الصحة الجوالة.'
          },
          full_description: {
            en: 'through secure cloud computing to allow users have seamless access to shared data, resources and common infrastructure over their healthcare providers’ network. We offer services on demand and carry out tasks that meet changing needs and standards. Our mHealth applications incorporates cloud computing technology and devices such as tablets and mobile phones to make medical information available anywhere at any time securely and easy to use.<br/><br/>Our range of applications and services supported by mHealth systems include:<ul class="li-green-color"><li>Mobile health for remote consultations</li><li>Storing and sharing of patient data</li><li>Personalized monitoring of vitals enhanced through interconnectedness with wearable devices</li><li>Location-based medical services to ensure delivery of locally-relevant information</li><li>Emergency response and management</li><li>Pervasive access to health care information.</li><ul>But as mobile technology gathers pace, the possibilities may be limited only to our imagination.',
            ar: 'من خلال الحوسبة السحابية الآمنة للسماح للمستخدمين بالوصول السلس إلى البيانات والموارد والبنية التحتية المشتركة عبر شبكة مزودي الرعاية الصحية الخاصة بهم. نحن نقدم خدمات حسب الطلب وننفذ المهام التي تلبي الاحتياجات والمعايير المتغيرة. تتضمن تطبيقات الصحة الجوالة الخاصة بنا تكنولوجيا الحوسبة السحابية والأجهزة مثل الأجهزة اللوحية (التابلت) والهواتف المحمولة لتوفير المعلومات الطبية في أي مكان وفي أي وقت بشكل آمن وسهل الاستخدام.<br/><br/>تشمل مجموعة التطبيقات والخدمات التي تدعمها أنظمة الصحة الجوالة ما يلي:<ul class="li-green-color"><li>الصحة الجوالة للاستشارات عن بعد</li><li>تخزين و مشاركة بيانات المريض</li><li>رصد شخصي للعلامات الحيوية من خلال الاتصال مع الأجهزة القابلة للارتداء.</li><li>خدمات طبية تعتمد على الموقع لضمان تقديم المعلومات ذات الصلة محليًا</li><li>الاستجابة لحالات الطوارئ وإدارتها</li><li>وصول واسع النطاق إلى معلومات الرعاية الصحية.</li></ul>ولكن مع تزايد تكنولوجيا الهاتف المحمول ، قد تكون الإمكانيات محدودة فقط بخيالنا.'
          }
        }
      ],
      spanEx: {}
    }
  },
  methods: {
    showSpanExpertise(val) {
      this.spanEx = val
      this.isSpanExpertise = true
    }
  }
}
</script>
