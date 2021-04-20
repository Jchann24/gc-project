<template>
  <div class="mb-5">
    <BaseHeroText
      v-show="allLoaded"
      :hero-img="document.heroImg"
      :overlay-text="document.overlayText"
      @loaded="
        () => {
          allLoaded = true
        }
      "
    />
    <article>
      <nuxt-content v-show="allLoaded" :document="document" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData({ $content }) {
    const document = await $content('about-us').fetch()
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
