<template>
  <div class="modal fade show modal-home-working">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title" v-html="spanEx.title[$i18n.locale]"></h5>
          <button type="button" class="close" aria-label="Close" @click="$emit('closeSpanExpertise')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-html="spanEx.full_description[$i18n.locale]"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-read-more" @click="$emit('closeSpanExpertise')">{{ $t('menu.hide') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    spanEx: Object
  }
}
</script>
