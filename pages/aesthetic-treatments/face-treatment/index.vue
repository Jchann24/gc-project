<template>
  <div>
    <BaseHero img-src="img/bgImg/bg-6.jpg" />
    <div class="container">
      <article>
        <div class="row mt-4">
          <div class="col-12 col-md-6 col-lg-9">
            <h1>{{ botox.title }}</h1>
            <nuxt-content :document="botox" />
          </div>
          <div class="col-12 col-md-6 col-lg-3 order-1 order-md-2">
            <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
          </div>
        </div>
      </article>
      <article>
        <div class="row mt-4">
          <h1>{{ filler.title }}</h1>

          <div class="col-12 col-md-6 col-lg-3">
            <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-9">
            <nuxt-content :document="filler" />
          </div>
        </div>
      </article>
      <article>
        <div class="row mt-4">
          <div class="col">
            <h1>{{ hydraFacial.title }}</h1>
            <nuxt-content :document="hydraFacial" />
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-6 col-lg-3">
            <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-9">
            <nuxt-content :document="hydraFacialTwo" />
          </div>
        </div>
      </article>
      <article>
        <div class="row mt-4">
          <div class="col-12 col-md-6 col-lg-9">
            <h1>{{ chemicalPeeling.title }}</h1>
            <nuxt-content :document="chemicalPeeling" />
          </div>
          <div class="col-12 col-md-6 col-lg-3 order-1 order-md-2">
            <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
          </div>
        </div>
      </article>
      <section>
        <div class="row mt-4">
          <div class="col text-center">
            <h1>Skin Booster</h1>
          </div>
        </div>
        <article>
          <div class="row mt-4">
            <div class="col">
              <h1>{{ salmonDna.title }}</h1>
              <nuxt-content :document="salmonDna" />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 col-md-6 col-lg-3">
              <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-9">
              <nuxt-content :document="salmonDnaTwo" />
            </div>
          </div>
        </article>
        <article>
          <div class="row mt-4">
            <div class="col-12 col-md-6 col-lg-9">
              <h1>{{ plateletRichPlasma.title }}</h1>
              <nuxt-content :document="plateletRichPlasma" />
            </div>
            <div class="col-12 col-md-6 col-lg-3 order-1 order-md-2">
              <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
            </div>
          </div>
        </article>
        <article>
          <div class="row mt-4">
            <div class="col-12 col-md-6 col-lg-9">
              <h1>{{ hydraGlow.title }}</h1>
              <nuxt-content :document="hydraGlow" />
            </div>
            <div class="col-12 col-md-6 col-lg-3 order-1 order-md-2">
              <img src="img/bgImg/bg-5.jpg" class="custom-img w-100" alt="" />
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaceTreatment',
  async asyncData({ $content }) {
    const botox = await $content('face-treatment', 'botox').fetch()
    const chemicalPeeling = await $content(
      'face-treatment',
      'chemical-peeling'
    ).fetch()
    const filler = await $content('face-treatment', 'filler').fetch()
    const hydraFacial = await $content('face-treatment', 'hydra-facial').fetch()
    const hydraFacialTwo = await $content(
      'face-treatment',
      'hydra-facial-2'
    ).fetch()
    const hydraGlow = await $content('face-treatment', 'hydra-glow').fetch()
    const plateletRichPlasma = await $content(
      'face-treatment',
      'platelet-rich-plasma'
    ).fetch()
    const salmonDna = await $content('face-treatment', 'salmon-dna').fetch()
    const salmonDnaTwo = await $content(
      'face-treatment',
      'salmon-dna-2'
    ).fetch()

    return {
      botox,
      chemicalPeeling,
      filler,
      hydraFacial,
      hydraFacialTwo,
      hydraGlow,
      plateletRichPlasma,
      salmonDna,
      salmonDnaTwo,
    }
  },
}
</script>

<style scoped>
.custom-img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
