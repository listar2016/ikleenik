<template>
  <div class="contact">
    <div class="slider products-slider text-center">
      <img class="img-fluid" src="@/assets/img/bg_5.png">
      <div class="slider-text">
        <h1 class="font-weight-lighter">{{ $t('menu.contact') }}</h1>
        <hr/>
      </div>
    </div>
    <div class="row py-5 px-3">
      <div class="col-lg-9 col-xl-6 mx-auto">
        <form class="contact-form">
          <div class="form-group">
            <input type="text" class="form-control" v-model="user_name" :placeholder="$t('contact.name')"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" v-model="email" :placeholder="$t('contact.email')"/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" v-model="subject" :placeholder="$t('contact.subject')"/>
          </div>
          <div class="form-group">
            <textarea class="form-control" v-model="message" :placeholder="$t('contact.message')" rows=5></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-read-more" type="submit" >{{ $t('contact.send') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
}
</script>