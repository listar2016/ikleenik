<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-white" :class="modalData.type === 'error' ? 'bg-warning': 'bg-primary'">
          <h5 class="modal-title">{{ modalData.title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ modalData.description }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-read-more" data-dismiss="modal" @click="$emit('close')">Close</button>
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
