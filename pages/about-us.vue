<template>
  <div class="mb-5">
    <BaseHeroText
      :hero-img="document.heroImg"
      :overlay-text="document.overlayText"
    />
    <article>
      <nuxt-content :document="document" />
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
}
</script>

<style></style>
