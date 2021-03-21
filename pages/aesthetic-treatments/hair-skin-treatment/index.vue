<template>
  <div>
    <BaseHero img-src="img/bgImg/bg-6.jpg" />
    <div class="container">
      <article>
        <div class="row mt-4">
          <div class="col">
            <h1>{{ permanentHair.title }}</h1>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-6 col-lg-4">
            <img src="img/bgImg/bg-2.jpg" class="w-100" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
            <nuxt-content :document="permanentHair" />
          </div>
        </div>
      </article>
      <article>
        <div class="row mt-4">
          <div class="col">
            <h1>{{ skinResurfacing.title }}</h1>
            <nuxt-content :document="skinResurfacing" />
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-6 col-lg-4">
            <img src="img/bgImg/bg-2.jpg" class="w-100" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
            <nuxt-content :document="skinResurfacingTwo" />
          </div>
        </div>
      </article>
      <article>
        <div class="row mt-4">
          <div class="col-12 col-md-6 col-lg-8">
            <h1>{{ cellulite.title }}</h1>
            <nuxt-content :document="cellulite" />
          </div>
          <div class="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
            <img src="img/bgImg/bg-2.jpg" class="w-100" alt="" />
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <nuxt-content :document="celluliteTwo" />
          </div>
        </div>
      </article>
      <article>
        <div class="row mt-4">
          <div class="col">
            <h1>{{ skinTightening.title }}</h1>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-6 col-lg-4">
            <img src="img/bgImg/bg-2.jpg" class="w-100" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
            <nuxt-content :document="skinTightening" />
          </div>
        </div>
      </article>
      <section>
        <div class="row mt-4">
          <div class="col text-center">
            <h1>Lifting</h1>
          </div>
        </div>
        <article>
          <div class="row mt-4">
            <div class="col">
              <h1>{{ hifu.title }}</h1>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 col-md-6 col-lg-8">
              <nuxt-content :document="hifu" />
            </div>
            <div class="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
              <img src="img/bgImg/bg-2.jpg" class="w-100" alt="" />
            </div>
          </div>
        </article>
        <article>
          <div class="row mt-4">
            <div class="col">
              <h1>{{ threadLift.title }}</h1>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 col-md-6 col-lg-4">
              <img src="img/bgImg/bg-2.jpg" class="w-100" alt="" />
            </div>
            <div class="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
              <nuxt-content :document="threadLift" />
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntensePulseLightPage',
  async asyncData({ $content }) {
    const cellulite = await $content(
      'hair-skin-treatment',
      'cellulite-reduction'
    ).fetch()
    const celluliteTwo = await $content(
      'hair-skin-treatment',
      'cellulite-reduction-2'
    ).fetch()
    const permanentHair = await $content(
      'hair-skin-treatment',
      'permanent-hair-reduction'
    ).fetch()
    const skinResurfacing = await $content(
      'hair-skin-treatment',
      'skin-resurfacing'
    ).fetch()
    const skinResurfacingTwo = await $content(
      'hair-skin-treatment',
      'skin-resurfacing-2'
    ).fetch()
    const skinTightening = await $content(
      'hair-skin-treatment',
      'skin-tightening'
    ).fetch()
    const hifu = await $content('hair-skin-treatment', 'hifu').fetch()
    const threadLift = await $content(
      'hair-skin-treatment',
      'thread-lift'
    ).fetch()

    return {
      cellulite,
      celluliteTwo,
      permanentHair,
      skinResurfacing,
      skinResurfacingTwo,
      skinTightening,
      hifu,
      threadLift,
    }
  },
  methods: {},
}
</script>

<style></style>
