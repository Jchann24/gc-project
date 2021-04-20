<template>
  <div class="mb-5">
    <BaseHero :img-src="document.heroImg" :title="document.heroText" />
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
  head() {
    return {
      title: this.document.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.document.description,
        },
      ],
    }
  },
}
</script>

<style></style>
