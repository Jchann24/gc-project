<template>
  <section id="treatmentAndTherapies">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <h1>Treatment and Therapies</h1>
        </div>
      </div>
      <div class="row mt-4 g-4">
        <div
          v-for="(item, index) in cardItems"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="card" style="height: 300px">
            <figure class="tint mb-0">
              <img
                :src="`${item.bgImage}`"
                :alt="`${item.bgImage}`"
                class="card-img card-img-style"
              />
            </figure>
            <div
              class="card-img-overlay d-flex flex-column align-items-center justify-content-center"
            >
              <div class="row">
                <div
                  class="col d-flex flex-column align-items-center justify-content-center"
                >
                  <img
                    :src="`${item.icon}`"
                    width="75"
                    :alt="`${item.name} icon`"
                  />
                  <h2 class="c-color-ornaments h4">{{ item.name }}</h2>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <p class="mb-0 fs-6 justify-text">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheTratmentAndTherapiesSection',
  data() {
    return {
      cardItems: [
        {
          name: 'Laser Treatments',
          icon: '/img/icons/GC-icon-09.svg',
          bgImage: '/img/bgImg/bg-1.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Acne Treatment',
          icon: '/img/icons/GC-icon-07.svg',
          bgImage: '/img/bgImg/bg-3.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Acupunture',
          icon: '/img/icons/GC-icon-10.svg',
          bgImage: '/img/bgImg/bg-6.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Intense Pulse Light',
          icon: '/img/icons/GC-icon-03.svg',
          bgImage: '/img/bgImg/bg-3.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Hair / Skin Treatment',
          icon: '/img/icons/GC-icon-02.svg',
          bgImage: '/img/bgImg/bg-1.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Skin Booster',
          icon: '/img/icons/GC-icon-05.svg',
          bgImage: '/img/bgImg/bg-3.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Slimming Programs',
          icon: '/img/icons/GC-icon-06.svg',
          bgImage: '/img/bgImg/bg-6.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Face Treatment',
          icon: '/img/icons/GC-icon-04.svg',
          bgImage: '/img/bgImg/bg-3.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
        {
          name: 'Lifting',
          icon: '/img/icons/GC-icon-08.svg',
          bgImage: '/img/bgImg/bg-1.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magnam temporibus placeat perferendis? Placeat, atque!',
        },
      ],
    }
  },
}
</script>

<style scoped>
.tint {
  background: #eaece4;
  height: 100%;
}
.card-img-style {
  opacity: 0.2;
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
}
</style>
