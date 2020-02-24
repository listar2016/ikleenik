<template>
  <div class="modal fade show modal-home-working">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">We are working on it!</h5>
          <button type="button" class="close" aria-label="Close" @click="$emit('closeHomeWorking')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="bg-icon">
            <img src="@/assets/img/mobile-phone.png" class="img-fluid"/>
          </div>
          <h3>Next platform for digital health,</h3>
          <h1>We are working on it!</h1>
          <div class="hr-container">
            <hr/>
          </div>
          <p>iKleeniK specializes in the provision of innovative digital healthcare solutions particularly in the areas of mobile health, big data and AI for health industry.</p>
          <p>At iKleeniK, we are working on a broad range of technologies to make health information more accessible beyond traditional care settings including mHealth, big data, artificial intelligence systems for digital diagnostics, digital therapeutics and clinical decision support solutions, as well as the advanced algorithms that are increasingly capable of supporting those solutions. At our core R&D, we believe digital health represents a much-needed connection between data science and healthcare, one that more comprehensively connects the dots for better, more informed health decisions and more personalized patient care.</p>
          <p>The true potential of iKleenik digital health strategy go much further than the sum of its individual parts to integrated digital health solutions which can harness the power of connectivity and interoperability in ways health industry has never seen before by applying the innovation in digital technologies to break down the information and workflow silos that exist in healthcare today, filling in blanks between diagnostic, treatment and outcomes data, allowing physicians to better manage care at the individual patient level rather than at a disease level more efficiently and effectively while allowing patients to better manage their own health and become more actively involved in their own healthcare.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-read-more" @click="$emit('closeHomeWorking')">Hide</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>