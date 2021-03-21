<template>
  <div>
    <BaseHero img-src="img/bgImg/bg-6.jpg" />
    <div class="container-fluid px-4">
      <div class="row mt-4">
        <div class="col-12 col-md-6 col-lg-4">
          <img src="img/bgImg/bg-5.jpg" class="w-100" alt="" />
        </div>
        <div class="col-12 col-md-6 col-lg-8">
          <nuxt-content :document="doc" />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <nuxt-content :document="docTwo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntensePulseLightPage',
  async asyncData({ $content }) {
    const doc = await $content('intense-pulse-light', 'section-one').fetch()
    const docTwo = await $content('intense-pulse-light', 'section-two').fetch()

    return { doc, docTwo }
  },
  methods: {},
}
</script>

<style></style>
