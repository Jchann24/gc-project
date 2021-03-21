<template>
  <div>
    <BaseHero img-src="img/bgImg/bg-6.jpg" />
    <div class="container">
      <article>
        <div class="row mt-4">
          <h1>{{ bts.title }}</h1>
        </div>
        <div class="row">
          <div class="col">
            <nuxt-content :document="bts" />
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-6 col-lg-3">
            <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-9 mt-4 mt-md-0">
            <nuxt-content :document="btsTwo" />
          </div>
        </div>
      </article>
    </div>
    <div class="container">
      <article>
        <div class="row mt-4">
          <div class="col-12 col-md-6 col-lg-9 mt-4 mt-md-0">
            <h1>{{ mesotheraphy.title }}</h1>
            <nuxt-content :document="mesotheraphy" />
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntensePulseLightPage',
  async asyncData({ $content }) {
    const bts = await $content('slimming-programs', 'bts-exilis-one').fetch()
    const btsTwo = await $content('slimming-programs', 'bts-exilis-two').fetch()
    const mesotheraphy = await $content(
      'slimming-programs',
      'mesotheraphy'
    ).fetch()

    return { bts, btsTwo, mesotheraphy }
  },
  methods: {},
}
</script>

<style scoped>
.custom-img {
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
}
</style>
