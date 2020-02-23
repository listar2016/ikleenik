<template>
  <div class="modal fade show modal-product">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ product.title }}</h5>
          <button type="button" class="close" aria-label="Close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="one-products-container">
            <div class="logo-container mb-1">
              <img :src="`/img/${product.logo}`" class="img-fluid"/>
            </div>
            <div class="one-products-content">
              <h2>{{ product.title }}</h2>
              <div class="hr-container">
                <hr/>
              </div>
              <p v-html="product.full_description"></p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-read-more" @click="$emit('close')">Hide</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
}
</script>