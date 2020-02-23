<template>
  <div class="career">
    <div class="slider career-slider">
      <img class="img-fluid" src="@/assets/img/bg_4.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">Careers</h1>
        <div class="hr-container">
          <hr/>
        </div>
        <p>We are geared to growth and are always on the lookout for top-grade and experienced software and apps designers and developers. We offer you challenging tasks, leeway for your own initiatives, and favorable, inspirational oriented challenges so that you see the outcome of your achievements. If this appeals to you and you wish to join us, talk to us!</p>
        <router-link class="btn btn-white" :to="{name: 'contact'}">Contact Us</router-link>
      </div>
    </div>
    <div class="row m-0 career-container">
      <div class="col-lg-4 career-img-container">
          <div class="career-img">
            <img class="img-fluid" src="@/assets/img/computer.png">
          </div>
      </div>
      <div class="col-lg-8 career-description">
        <h1>Application</h1>
        <div class="hr-container">
          <hr/>
        </div>     
        <p>
          Have you been unable to find any suitable vacancies? Then impress us with your speculative application. As a global player in the consultancy business, we are able to offer talented people perspectives and development opportunities within the Fichtner Group.<br/>Apply at Fichtner with your comprehensive application together with a brief cover letter.
        </p>
        <p>We look forward to receiving your application.</p>
        <router-link class="btn btn-read-more" :to="{name: 'contact'}">Conatct Us</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>