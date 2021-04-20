<template>
  <div class="mb-5">
    <BaseHero :img-src="document.heroImg" />
    <nuxt-content :document="document" />
  </div>
</template>

<script>
export default {
  name: 'AestheticTreatments',
  async asyncData({ $content, params }) {
    const document = await $content('aesthetic-treatments', params.slug).fetch()
    return { document }
  },
}
</script>

<style></style>
