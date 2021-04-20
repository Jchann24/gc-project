<template>
  <div class="row">
    <div class="col-12 col-xl-4 text-center">
      <h2>{{ title }}</h2>
    </div>
    <div class="col-12 col-xl-8">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsVisionMission',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style></style>
