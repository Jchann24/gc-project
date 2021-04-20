<template>
  <div
    id="mainCarousel"
    class="carousel slide w-100"
    data-bs-ride="carousel"
    data-bs-interval="10000"
  >
    <div class="carousel-inner">
      <div
        v-for="(imgNames, index) in imgList"
        :key="index"
        class="carousel-item"
        :class="{ active: index == 0 }"
      >
        <div class="d-flex justify-content-center">
          <a
            v-for="image in imgNames"
            :key="image"
            class="d-block mx-1"
            href="http://instagram.com/gc.aesthetics.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="`img/specialOffers/${image}`" :alt="`banner ${image}`" />
          </a>
        </div>
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
  name: 'SpecialOffersCarousel',
  data() {
    return {
      imgList: [
        [
          'facial-hydromagic.jpeg',
          'healthy-package.jpeg',
          'slimming-package.jpeg',
        ],
        ['test-covid.jpeg'],
      ],
    }
  },
}
</script>

<style scoped>
a {
  width: 30%;
}
img {
  width: 100%;
  object-fit: contain;
  object-position: 50% 50%;
}
.carousel-control-prev,
.carousel-control-next {
  width: 10%;
}

.responsive-ri {
  font-size: 1em;
}

@media screen and (min-width: 600px) {
  .responsive-ri {
    font-size: 2em;
  }
}

@media screen and (min-width: 900px) {
  .responsive-ri {
    font-size: 2em;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }
}
</style>
