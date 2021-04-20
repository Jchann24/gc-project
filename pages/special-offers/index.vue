<template>
  <div>
    <nuxt-content :document="document" />
  </div>
</template>

<script>
export default {
  name: 'SpecialOffersIndex',
  async asyncData({ $content }) {
    const document = await $content('special-offers').fetch()
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
