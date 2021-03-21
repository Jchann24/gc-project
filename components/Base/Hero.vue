<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0 d-flex align-items-center justify-content-center">
        <img :src="imgSrc" class="hero-img w-100" alt="" />
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
  },
}
</script>

<style scoped>
.hero-img {
  height: 45vh;
  object-fit: cover;
}
</style>
