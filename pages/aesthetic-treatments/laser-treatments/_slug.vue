<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-12 px-0 d-flex align-items-center justify-content-center"
        >
          <img src="img/bgImg/bg-6.jpg" class="hero-img w-100" alt="" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h1>{{ doc.title }}</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <img src="img/bgImg/bg-3.jpg" class="w-100" alt="" srcset="" />
        </div>
        <div class="col-8">
          <nuxt-content :document="doc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaserTreatmentDetails',
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug).fetch()

    return { doc }
  },
  head() {
    return {
      title: this.doc.meta_title + ' - GC Aesthetics',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Aesthetic Treatments - GC Aesthetics',
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
}
</style>
