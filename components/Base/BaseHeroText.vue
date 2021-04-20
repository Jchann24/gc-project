<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <div class="hero-container">
          <img
            :src="heroImg"
            class="hero-img w-100"
            :alt="`${overlayText} banner`"
            @load="imgLoaded"
          />
          <h1 class="overlay-text">{{ overlayText }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeroText',
  props: {
    heroImg: {
      type: String,
      required: true,
    },
    overlayText: {
      type: String,
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

<style></style>
