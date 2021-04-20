<template>
  <div class="mb-5">
    <p v-if="!allLoaded" class="text-center mt-5">Loading ...</p>
    <div class="row">
      <div class="col mx-0 px-0">
        <IndexTheCarousel />
      </div>
    </div>
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
      allLoaded: true,
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
