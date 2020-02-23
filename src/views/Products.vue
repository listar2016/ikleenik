<template>
  <div class="products">
    <div class="slider products-slider text-center">
      <img class="img-fluid" src="@/assets/img/bg_2.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">Products</h1>
        <hr/>
      </div>
    </div>
    <div class="row m-0 products-title-container">
      <div class="col-xl-9 mx-auto py-5">
        <h1 class="font-weight-lighter">What we have developed?</h1>
          <hr/>
        <p>iKleeniK current focus is on interfacing of personal medical devices for chronic disease management using smart mobile and low energy Bluetooth® technologies as part of our strategy in development of digital healthcare industry</p>
      </div>
    </div>
    <div class="container">
      <div class="row m-0" v-for="(product, index) in productList" :key="index">
        <div class="row col-12 m-0 p-0" v-if="index % 2 ===0">
          <div class="col-lg-6 p-0 bg-grey center-container">
            <div class="center-content bg-white p-3">
              <div class="one-products-container">
                <div class="logo-container mb-1">
                  <img :src="`/img/${product.logo}`"/>
                </div>
                <div class="one-products-content">
                  <h2>{{ product.title }}</h2>
                  <div class="hr-container">
                    <hr/>
                  </div>
                  <p>{{ product.description }}</p>
                  <a v-if="product.read_more" href="#" class="btn btn-read-more my-1">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 p-0">
            <img :src="`/img/${product.image}`" class="img-fluid"/>
          </div>
        </div>
        <div class="row col-12 m-0 p-0" v-else>
          <div class="col-lg-6 p-0">
            <img :src="`/img/${product.image}`" class="img-fluid"/>
          </div>
          <div class="col-lg-6 p-0 bg-grey center-container">
            <div class="center-content bg-white p-3">
              <div class="one-products-container">
                <div class="logo-container mb-1">
                  <img :src="`/img/${product.logo}`"/>
                </div>
                <div class="one-products-content">
                  <h2>{{ product.title }}</h2>
                  <div class="hr-container">
                    <hr/>
                  </div>
                  <p v-html="product.description"></p>
                  <a v-if="product.read_more" href="#" class="btn btn-read-more my-1">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [
        {
          logo: 'mofid_logo.png',
          title: 'Mo-fiD® Klatu',
          image: 'product_1.png',
          read_more: false,
          description: 'Mo-fiD® Klatu is a Low Power Bluetooth device using state-of-the-art reconfigurable low power wireless adaptor. The Device seamlessly reads and transmits the blood glucose data from a variety of market glucose meters* and transmits the data to patient’s own smart phone or tablet using myMofiD® App.',
          full_description: ''
        },
        {
          logo: 'mofid_logo.png',
          title: 'Mo-fiD® ClinicalBooth',
          image: 'product_2.png',
          read_more: true,
          description: 'Mo-fiD® ClinicalBooth is a secure cloud based diabetes management portal developed for healthcare providers to empower the clinicians with complementary care insight of their diabetic patients’ care and management process using the Mo-fiD® platform.',
          full_description: 'Mo-fiD® ClinicalBooth is a secure cloud based diabetes management portal developed for healthcare providers to empower the clinicians with complementary care insight of their diabetic patients’ care and management process using the Mo-fiD® platform.<br/>The Mo-fiD® Clinical Booth provides the information and assessment of the patient’s data for better clinical outcomes by enabling the Mo-fiD® technology to  achieve the patient’s glycaemic targets and therapy. The Clinical Booth also assists the clinicians in making more informed decisions with minimized risks of any adverse complications with better care outcomes and less hospital admissions.<br/>We have designed and developed the Mo-fiD® Clinical Booth based on the latest published clinical ‘ADA’ standards on diabetes clinical care procedures. We strive to provide a system that supports the clinicians for better healthcare and management of their patient’s condition, allowing better overseeing, prioritizing and making informed decisions on their critical therapy and optimize their care pathway.'
        },
        {
          logo: 'mofid_logo.png',
          title: 'myMo-fiD® App',
          image: 'product_3.png',
          read_more: true,
          description: 'myMofiD® App is an easy to use Android/iOS based application dedicated for Middle East patients in Arabic and English languages. It is designed to provide all the information the patient needs for self-management including blood glucose, food and water intake, activities performed and much more.',
          full_description: 'myMofiD® App is an easy to use Android/iOS based application dedicated for Middle East patients in Arabic and English languages. It is designed to provide all the information the patient needs for self-management including blood glucose, food and water intake, activities performed and much more. It generates alarms, notifications and warnings when the blood glucose goes lower or higher than the normal range. It is specially customised for Middle Eastern patients to take care of their health during Ramadan fasting month, Hajj and Umrah.',
        },
        {
          logo: 'mofid_logo.png',
          title: 'Mo-fiD® POD',
          image: 'product_4.png',
          read_more: true,
          description: 'The Mo-fiD® POD is a secure supplementary web IoT ready portal developed for Mo-fiD®’s patients and fully synchronized seamlessly with myMo-fiD® App. It automatically updates the captured glucose reading and allows the Mo-fiD® users to track and view their blood glucose readings and correlate with food intake and activities performed during the day.',
          full_description: 'The Mo-fiD® POD is a secure supplementary web IoT ready portal developed for Mo-fiD®’s patients and fully synchronized seamlessly with myMo-fiD® App. It automatically updates the captured glucose reading and allows the Mo-fiD® users to track and view their blood glucose readings and correlate with food intake and activities performed during the day.<br/>The Mo-fiD® POD includes personalized information on medications, appointments and messages from the healthcare provider besides other features for easy and illustrative graphical patterns and presentations that assist and educate the patients in their monitoring and management therapy. It allows smart alerting for any potential acute hypoglycemia, low insulin intake levels and medication intake gaps.'
        },
        {
          logo: 'jamel_logo.png',
          title: 'Jamel App',
          image: 'product_5.png',
          read_more: true,
          description: 'Jamel® is the first tailored pedometer app for people with diabetes to monitor daily walking or jogging besides burning calories, distance covered, active time, as well as average speed per hour.',
          full_description: 'Jamel® is the first tailored pedometer app for people with diabetes to monitor daily walking or jogging besides burning calories, distance covered, active time, as well as average speed per hour.<br/>Besides pedometering, Jamel® advises the weather condition, measures heart rate and checks health condition periodically while exercising.<br/>Jamel® comes with a simple and sleek interface, which makes it quite easy to use. Moreover, the app gives the user the option to import all fitness data from Google Fit , iWatch and sync with most common fitness watches and bands like Fitbit.<br/>Jamel® premium subscription allows the user free access to Mo-fiD®POD, a diabetes self-management portal developed by iKleeniK to help the user monitor blood glucose, activities, diet, water, medications, weight control and much more! Jamel® synchronizes with Mo-fiD®POD portal via secure HIPAA compliance cloud server. This particular offering is known for its widget that sits on user’s home screen giving a constant view of all the user needs to know for better diabetes self-management.'
        },
      ]
    }
  }
}
</script>