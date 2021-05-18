<template>
  <div class="mb-5">
    <client-only>
      <FlowerSpinner
        v-show="!allLoaded"
        class="mx-auto mt-5"
        :animation-duration="1500"
        :size="90"
        color="#c89900"
      />
    </client-only>
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
  methods: {
    onLoaded() {
      setTimeout(() => (this.allLoaded = true), 1500)
    },
  },
}
</script>

<style></style>
