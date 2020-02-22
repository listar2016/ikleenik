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
    <div class="row m-0" v-for="(product, index) in productList" :key="index">
      <div class="col-md-6 center-container bg-grey">
        <div class="center-content bg-white">
          <div class="home-main-content">
            <img :src="`@assets/img/${product.logo}`"/>
            <h1>{{ product.title }}</h1>
            <div class="hr-container">
              <hr/>
            </div>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 p-0">
        <img :src="`@/assets/img/${product.image}`" class="img-fluid"/>
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
          logo: 'mofid.png',
          title: 'Mo-fiD® Klatu',
          image: 'product_1.png',
          description: 'Mo-fiD® Klatu is a Low Power Bluetooth device using state-of-the-art reconfigurable low power wireless adaptor. The Device seamlessly reads and transmits the blood glucose data from a variety of market glucose meters* and transmits the data to patient’s own smart phone or tablet using myMofiD® App.'
        },
        {
          logo: 'mofid.png',
          title: 'Mo-fiD® ClinicalBooth',
          image: 'product_2.png',
          description: 'Mo-fiD® ClinicalBooth is a secure cloud based diabetes management portal developed for healthcare providers to empower the clinicians with complementary care insight of their diabetic patients’ care and management process using the Mo-fiD® platform.'
        },
        {
          logo: 'mofid.png',
          title: 'myMo-fiD® App',
          image: 'product_3.png',
          description: 'myMofiD® App is an easy to use Android/iOS based application dedicated for Middle East patients in Arabic and English languages. It is designed to provide all the information the patient needs for self-management including blood glucose, food and water intake, activities performed and much more. It generates alarms, notifications and warnings when the blood glucose goes lower or higher than the normal range. It is specially customised for Middle Eastern patients to take care of their health during Ramadan fasting month, Hajj and Umrah.'
        },
        {
          logo: 'mofid.png',
          title: 'Mo-fiD® POD',
          image: 'product_4.png',
          description: 'The Mo-fiD® POD is a secure supplementary web IoT ready portal developed for Mo-fiD®’s patients and fully synchronized seamlessly with myMo-fiD® App. It automatically updates the captured glucose reading and allows the Mo-fiD® users to track and view their blood glucose readings and correlate with food intake and activities performed during the day.'
        },
        {
          logo: 'mofid.png',
          title: 'Jamel App',
          image: 'product_5.png',
          description: 'Jamel® is the first tailored pedometer app for people with diabetes to monitor daily walking or jogging besides burning calories, distance covered, active time, as well as average speed per hour.'
        },
      ]
    }
  }
}
</script>