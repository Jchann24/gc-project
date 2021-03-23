<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col mx-0 px-0">
          <IndexTheCarousel />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-10 col-lg-8 mx-auto">
          <IndexTheWhySection />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <IndexTheTreatmentAndTherapiesSection />
        </div>
      </div>
    </div>
    <IndexTheContactUs />
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  head() {
    return {
      title: 'GC Aesthetics',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'GC Aesthetics',
        },
      ],
    }
  },
}
</script>

<style></style>
