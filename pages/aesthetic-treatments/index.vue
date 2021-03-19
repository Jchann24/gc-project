<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 px-0">
          <img src="img/bgImg/bg-2.jpg" class="hero-img w-100" alt="" />
          <h1 class="overlay-text">Aesthetic Treatments</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 text-center">
          <h1>Aesthetic Treatments</h1>
        </div>
        <div class="col-12 mt-3">
          <div class="card border-0" style="width: 250px">
            <img
              src="img/icons/GC-Icon-02.svg"
              class="card-img-top w-50 mx-auto p-2 c-bg-icon rounded-3"
              alt="..."
            />
            <div class="card-body text-center">
              <h5 class="c-color-ornaments">Laser Treatments</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AestheticTreatmentsIndex',
  data() {
    return {
      treatmentList: [
        {
          name: 'Laser Treatments',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero-img {
  height: 45vh;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 0.8;
}

.overlay-text {
  color: white;
  position: absolute;
  font-weight: 700;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
  opacity: 1;
}
</style>
