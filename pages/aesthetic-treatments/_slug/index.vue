<template>
  <div class="mb-5">
    <transition-group name="fade">
      <client-only>
        <FlowerSpinner
          v-if="!allLoaded"
          key="spin"
          style="z-index: 2; position: absolute; top: 20%; left: 50%"
          :animation-duration="1500"
          :size="75"
          color="#c89900"
        />
      </client-only>
      <div v-show="allLoaded" key="content">
        <BaseHero
          :img-src="document.heroImg"
          :title="document.heroText"
          @loaded="onLoaded"
        />
        <hr class="mx-5" />
        <div class="mt-4">
          <nuxt-content :document="document" />
        </div>
      </div>
    </transition-group>
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
      setTimeout(() => (this.allLoaded = true), 1000)
    },
  },
}
</script>

<style></style>
