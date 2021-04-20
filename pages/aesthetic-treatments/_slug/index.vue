<template>
  <div class="mb-5">
    <BaseHero
      v-show="allLoaded"
      :img-src="document.heroImg"
      :title="document.heroText"
      @loaded="
        () => {
          allLoaded = true
        }
      "
    />
    <nuxt-content v-show="allLoaded" :document="document" />
  </div>
</template>

<script>
export default {
  name: 'AestheticTreatments',
  async asyncData({ $content, params }) {
    const document = await $content('aesthetic-treatments', params.slug).fetch()
    return { document }
  },
  data() {
    return {
      allLoaded: false,
    }
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
