<template>
  <div>
    <BaseHero img-src="img/bgImg/bg-6.jpg" />
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 col-md-6 col-lg-9">
          <nuxt-content :document="acneActive" />
        </div>
        <div class="col-12 col-md-6 col-lg-3 order-1 order-md-2">
          <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col"><nuxt-content :document="acneInjection" /></div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
        </div>
        <div class="col-12 col-md-6 col-lg-9">
          <nuxt-content :document="acneInjectionTwo" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <nuxt-content :document="acneScarRevision" />
        </div>
        <div class="col-12 col-md-6">
          <img src="img/bgImg/bg-1.jpg" class="w-100" alt="" />
        </div>
        <div class="col-12 col-md-6">
          <img src="img/bgImg/bg-1.jpg" class="w-100" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcneTreatment',
  async asyncData({ $content }) {
    const acneActive = await $content('acne-treatment', 'acne-active').fetch()
    const acneInjection = await $content(
      'acne-treatment',
      'acne-injection'
    ).fetch()
    const acneInjectionTwo = await $content(
      'acne-treatment',
      'acne-injection-two'
    ).fetch()
    const acneScarRevision = await $content(
      'acne-treatment',
      'acne-scar-revision'
    ).fetch()

    return { acneActive, acneInjection, acneInjectionTwo, acneScarRevision }
  },
}
</script>

<style scoped>
.custom-img {
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
}
</style>
