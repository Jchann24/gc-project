<template>
  <div>
    <div
      id="carouselExampleFade"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(imgName, index) in imgList"
          :key="index"
          class="carousel-item"
          :class="{ active: index == 0 }"
        >
          <img
            :src="`/img/banner/${imgName}`"
            class="d-block mx-auto"
            :alt="`banner ${imgName}`"
            loading="lazy"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <i
          class="ri-arrow-left-s-line c-color-navbar ri-4x"
          aria-hidden="true"
        ></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <i
          class="ri-arrow-right-s-line c-color-navbar ri-4x"
          aria-hidden="true"
        ></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCarousel',
  data() {
    return {
      imgList: ['banner1.jpg', 'banner3.png', 'banner4.png'],
    }
  },
}
</script>

<style scoped>
img {
  width: 90%;
  height: 45vh;
  object-fit: cover;
  object-position: 50% 50%;
}
.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}
</style>
