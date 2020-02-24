<template>
  <div class="modal fade show modal-home-working">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t('home.working_title') }}</h5>
          <button type="button" class="close" aria-label="Close" @click="$emit('closeHomeWorking')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="bg-icon">
            <img src="@/assets/img/mobile-phone.png" class="img-fluid"/>
          </div>
          <h3>{{ $t('home.working_subtitle') }}</h3>
          <h1>{{ $t('home.working_title') }}</h1>
          <div class="hr-container">
            <hr/>
          </div>
          <p>{{ $t('home.working_full_desc_1') }}</p>
          <p>{{ $t('home.working_full_desc_2') }}</p>
          <p>{{ $t('home.working_full_desc_3') }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-read-more" @click="$emit('closeHomeWorking')">{{ $t('menu.hide') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>