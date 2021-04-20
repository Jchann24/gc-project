<template>
  <div class="mb-5">
    <p v-if="!allLoaded" class="text-center mt-5">Loading ...</p>
    <div v-show="allLoaded">
      <BaseHero
        :img-src="document.heroImg"
        :title="document.heroText"
        @loaded="
          () => {
            allLoaded = true
          }
        "
      />
      <hr class="mx-5" />
      <div class="mt-4">
        <nuxt-content :document="document" />
      </div>
    </div>
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
