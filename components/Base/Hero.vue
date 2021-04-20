<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-12 px-0 d-flex flex-column align-items-center justify-content-center"
      >
        <img
          :src="imgSrc"
          class="banner-photo"
          :alt="`${title} banner image`"
          @load="imgLoaded"
        />
        <h1 class="mt-n2 mt-md-n3 mt-xl-n4 text-center">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    imgSrc: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    imgLoaded() {
      this.loading = false
      this.$emit('loaded')
    },
  },
}
</script>

<style scoped>
.hero-img {
  object-fit: contain;
}

.banner-photo {
  max-width: 75%;
}

@media screen and (min-width: 576px) {
  .banner-photo {
    max-width: 60%;
  }
}

@media screen and (min-width: 768px) {
  .banner-photo {
    max-width: 50%;
  }
}

@media screen and (min-width: 992px) {
  .banner-photo {
    max-width: 40%;
  }
}

@media screen and (min-width: 1200px) {
  .banner-photo {
    max-width: 30%;
  }
}
</style>
