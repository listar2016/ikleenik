<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-white" :class="modalData.type === 'error' ? 'bg-warning': 'bg-primary'">
          <h5 class="modal-title">{{ modalData.title[$i18n.locale] }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p v-html="modalData.description[$i18n.locale]"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-read-more m-0" data-dismiss="modal" @click="$emit('close')">{{ $t('menu.close') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modalData: Object
  },
}
</script>
