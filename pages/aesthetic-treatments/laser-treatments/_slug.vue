<template>
  <div>
    <BaseHero img-src="img/bgImg/bg-6.jpg" />
    <article>
      <div class="container-fluid px-4">
        <div class="row mt-4">
          <div class="col">
            <h1>{{ doc.title }}</h1>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-6 col-lg-4">
            <img
              src="img/bgImg/bg-3.jpg"
              class="w-100 shadow custom-img"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
            <nuxt-content :document="doc" />
          </div>
        </div>
      </div>
    </article>
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

.custom-img {
  max-height: 500px;
  object-fit: cover;
}
</style>
