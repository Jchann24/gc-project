<template>
  <div id="mainCarousel" class="carousel slide w-100" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(imgName, index) in carouselList"
        :key="index"
        class="carousel-item"
        :class="{ active: index == 0 }"
        data-bs-interval="4000"
      >
        <img
          :src="`img/banner/${imgName}`"
          class="d-block mx-auto"
          :alt="`banner ${imgName}`"
          loading="lazy"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#mainCarousel"
      data-bs-slide="prev"
    >
      <i
        class="ri-arrow-left-s-line c-color-navbar responsive-ri"
        aria-hidden="true"
      ></i>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#mainCarousel"
      data-bs-slide="next"
    >
      <i
        class="ri-arrow-right-s-line c-color-navbar responsive-ri"
        aria-hidden="true"
      ></i>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TheCarousel',
  data() {
    return {
      imgList: ['banner1.jpg', 'banner3.png', 'banner4.png'],
      aboutUsList: [
        'about-1.jpg',
        'about-2.jpg',
        'about-3.jpg',
        'about-4.jpg',
        'about-5.jpg',
        'about-6.jpg',
        'about-7.jpg',
      ],
    }
  },
  computed: {
    carouselList() {
      if (this.$route.name === 'index') {
        return this.imgList
      }

      return this.aboutUsList
    },
  },
}
</script>

<style scoped>
img {
  width: 100%;
  height: 65vh;
  object-fit: cover;
  object-position: 50% 50%;
}
.carousel-control-prev,
.carousel-control-next {
  width: 10%;
}

.responsive-ri {
  font-size: 1.5em;
}

@media screen and (min-width: 600px) {
  .responsive-ri {
    font-size: 3em;
  }
}

@media screen and (min-width: 900px) {
  .responsive-ri {
    font-size: 3em;
  }

  img {
    width: 90%;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }
}
</style>
