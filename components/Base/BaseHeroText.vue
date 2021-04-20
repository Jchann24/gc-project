<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <div class="hero-container">
          <img :src="heroImg" class="hero-img w-100" alt="" />
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
}
</script>

<style></style>
