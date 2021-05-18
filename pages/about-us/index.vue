<template>
  <div class="mb-5">
    <transition-group name="fade">
      <client-only>
        <FlowerSpinner
          v-show="!allLoaded"
          key="spin"
          style="z-index: 2; position: absolute; top: 20%; left: 50%"
          :animation-duration="1500"
          :size="75"
          color="#c89900"
        />
      </client-only>
      <div v-show="allLoaded" key="photo" class="row">
        <div class="col mx-0 px-0">
          <IndexTheCarousel />
        </div>
      </div>
      <article v-show="allLoaded" key="content">
        <nuxt-content :document="document" />
      </article>
    </transition-group>
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
  mounted() {
    this.onLoaded()
  },

  methods: {
    onLoaded() {
      setTimeout(() => (this.allLoaded = true), 1500)
    },
  },
}
</script>

<style></style>
