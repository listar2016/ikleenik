<template>
  <div class="home">
    <div class="slider home-slider text-center">
      <img class="img-fluid" src="@/assets/img/bg_1.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">We Push Ourselves</h1>
        <h4 class="font-weight-lighter">to find better digital health solutions through insight, innovation and integration</h4>
        <hr/>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6">
        <div class="home-main-content">
          <div class="bg-icon">
            <img src="@/assets/img/mobile-phone.png" class="img-fluid"/>
          </div>
          <h3>Next platform for digital health,</h3>
          <h1>We are working on it!</h1>
          <div class="hr-container">
            <hr/>
          </div>
          <p>
            iKleeniK specializes in the provision of innovative digital healthcare solutions particularly in the areas of mobile health, big data and AI for health industry.
          </p>
          <a href="#" class="btn btn-read-more px-4" @click.prevent="isShowHomeWorking = true">Read More</a>
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
          <h4>Deep Learning</h4>
          <p>It is so cool to make it so hard!</p>
        </div>
        <div class="col-md-4 my-5">
          <div class="bg-icon mx-auto">
            <img src="@/assets/img/cognitive_evolvement.png"/>
          </div>
          <h4>Cognitive Evolvement</h4>
          <p>We find ways to turn concepts into objects!</p>
        </div>
        <div class="col-md-4 my-5">
          <div class="bg-icon mx-auto">
            <img src="@/assets/img/big_data.png"/>
          </div>
          <h4>Big Data</h4>
          <p>Building data subways for next healthcare industry</p>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6 col-xl-4 p-0 bg-primary">
        <div class="home-main-content span-content">
          <h1 class="text-white">Span of</h1>
          <h1>Expertise</h1>
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
                <h4>{{ spanEx.title }}</h4>
                <div class="hr-container">
                  <hr/>
                </div>
                <p v-html="spanEx.description"></p>
                <a href="#" class="read-more-link" @click.prevent="showSpanExpertise(spanEx)">Read More</a>
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
        <h1>Products</h1>
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
          <p>Klatu</p>
        </div>
        <p>
          Mo-fiD® is the world’s first interoperable and unifying multilingual mobile diabetes monitoring and self –management system with preferred native language options.
        </p>
        <router-link class="btn btn-white" :to="{name: 'products'}">More</router-link>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6 center-container bg-grey">
        <div class="center-content bg-white">
          <div class="home-main-content">
            <div class="bg-icon">
              <img src="@/assets/img/start-up.png"/>
            </div>
            <h1>Innovation</h1>
            <div class="hr-container">
              <hr/>
            </div>
            <p>
              Development of mobile devices is the key driving force behind our research vision at iKleeniK . We believe the role of 5G together with smart wearable sensors will play pivotal role in the future of personalized healthcare systems and be part of everyday life for many people.
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
            <h1>Research</h1>
            <div class="hr-container">
              <hr/>
            </div>
            <p>
              Our people are the driving force behind our achievements. We are committed to continue conducting leading research in the key challenging domains of digital health and big data analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5 m-0">
      <div class="col-12 normal-title-hr my-2">
        <h1>What we do?</h1>
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
                <h4>Mobile Health Solutions</h4>
                <p>We have the passion in developing mobile health and IoT solutions for personalized healthcare service providers.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/chronic_disease_management.png"/>
              </div>
              <div class="title-desc-content">
                <h4>Chronic Disease Management</h4>
                <p>Our research work is currently focusing on developing innovative chronic disease management software and apps for patient and clinicians.</p>
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
                <h4>Digital Clinic Portals</h4>
                <p>We are specialized in design and development of integrated clinical management systems supported to support medical equipment.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/electronic_patient_record.png"/>
              </div>
              <div class="title-desc-content">
                <h4>Electronic Patient Record</h4>
                <p>We have extensive experience in developing EPR as an alternative of paper medical record to manage personal life-long health and health care information</p>
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
                <h4>Wellbeing Mobile Apps</h4>
                <p>We take mobile wellbeing apps for smart devices to the next level for patients behavior change.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="icon-title-desc">
              <div class="icon-content">
                <img src="@/assets/img/assistive_technologies.png"/>
              </div>
              <div class="title-desc-content">
                <h4>Assistive Technologies</h4>
                <p>We are committed to work with our communities on developing assistive technologies that allow individuals to assist people with special needs using artificial intelligence (AI) technologies.</p>
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
            <h1>Latest News<span class="text-green">...</span></h1>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4 p-0" v-for="(news, index) in latestNews" :key="index">
        <div class="one-span-container">
          <div class="one-span-content">
            <p>{{ news.location }} / {{ news.date }}</p>
            <h4>{{ news.title }}</h4>
            <div class="hr-container">
              <hr/>
            </div>
            <p>{{ news.description }}</p>
            <a href="#" class="read-more-link">Read More</a>
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
          location: 'Auckland, New Zealand',
          date: '15.6.2019',
          title: 'iKleeniK Announces the Launch of Mobile Application Jamel®',
          description: 'iKleeniK Limited, New Zealand is excited to announce the launch of mobile application Jamel®, the first Android and iOS fitness app for people with diabetes in English and Arabic.'
        },
        {
          location: 'Medical',
          date: '04.08.2018',
          title: 'Excepteur sint occaecat cupidatat proident, sunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
        },
        {
          location: 'Medical',
          date: '14.10.2017',
          title: 'Consequuntur dolores eos qui ratione voluptatem',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
        },
        {
          location: 'Medical',
          date: '04.08.2018',
          title: 'Excepteur sint occaecat cupidatat proident, sunt',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
        },
        {
          location: 'Medical',
          date: '14.10.2017',
          title: 'Consequuntur dolores eos qui ratione voluptatem',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
        },
      ],
      isShowHomeWorking: false,
      isSpanExpertise: false,
      spanExpertiseList: [
        {
          title: 'Advanced IoT technology',
          description: 'Our team brings together a wide spectrum of IoT emerging technologies, business and innovation experience.',
          full_description: 'With many healthcare providers are struggling under the dual pressures of a growing demand for its services and chronic underfunding, the Internet of Things can help to make healthcare more efficient by equipping the patients with online sensors to monitor their environment and an internet connection to communicate, the Internet of Things gives healthcare providers greater ability to gather data on their patients and report back in real time. <br/><br/> The IoT presents big benefits for patient care by enabling hospitals to track and monitor patients from the moment they arrived at hospital -- or even in the home before that -- with real-time data from sensors being automatically added to patient records without the need for nurses to take readings or update charts. At a more prosaic level, our IoT vision is allow the healthcare provider to track the vitals more effectively. iKleeniK aims to help users to monitor their health and wellbeing, and alert health professionals to step in when needed. Mo-fiD®, our diabetes digital platform, is developed not only to help diabetics get a better handle on their condition, but has only a minimal IoT component, with links to internet-enabled glucose monitors.'
        },
        {
          title: 'Digital Health Solutions',
          description: 'We are committed to provide digital innovative solutions to transform healthcare services into the next generation of digital clinics.',
          full_description: 'We are committed to provide digital innovative solutions to transform healthcare services into the next generation of digital clinics.'
        },
        {
          title: 'M-health-Solutions',
          description: 'Our mobile wireless capabilities and expertise including leading edge technology development in all mobile health.',
          full_description: 'through secure cloud computing to allow users have seamless access to shared data, resources and common infrastructure over their healthcare providers’ network. We offer services on demand and carry out tasks that meet changing needs and standards. Our mHealth applications incorporates cloud computing technology and devices such as tablets and mobile phones to make medical information available anywhere at any time securely and easy to use.<br/><br/>Our range of applications and services supported by mHealth systems include:<ul class="li-green-color"><li>Mobile health for remote consultations</li><li>Storing and sharing of patient data</li><li>Personalized monitoring of vitals enhanced through interconnectedness with wearable devices</li><li>Location-based medical services to ensure delivery of locally-relevant information</li><li>Emergency response and management</li><li>Pervasive access to health care information.</li><li>But as mobile technology gathers pace, the possibilities may be limited only to our imagination.</li><ul>'
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
