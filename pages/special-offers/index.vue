<template>
  <div>
    <!-- <BaseHeroText
      v-show="allLoaded"
      :hero-img="document.heroImg"
      :overlay-text="document.overlayText"
      @loaded="
        () => {
          allLoaded = true
        }
      "
    /> -->
    <article>
      <nuxt-content :document="document" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'SpecialOffersIndex',
  async asyncData({ $content }) {
    const document = await $content('special-offers').fetch()
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
  methods: {
    onLoaded() {
      setTimeout(() => (this.allLoaded = true), 1500)
    },
  },
}
</script>

<style></style>
