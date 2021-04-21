<template>
  <section id="treatmentAndTherapies">
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-12 text-center">
          <h1>Treatment and Therapies</h1>
        </div>
      </div>
      <div class="row mt-2 gx-5 gy-4 justify-content-center">
        <div
          v-for="(item, index) in cardItems"
          :key="index"
          class="col-12 col-md-6 col-xl-4"
        >
          <div class="card border-0" style="height: 350px">
            <figure class="tint mb-0">
              <img
                :src="`${item.bgImage}`"
                :alt="`${item.bgImage}`"
                class="card-img card-img-style"
                loading="lazy"
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
                    width="125"
                    :alt="`${item.name} icon`"
                    loading="lazy"
                  />
                  <h2 class="c-color-ornaments h4 text-center">
                    {{ item.name }}
                  </h2>
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
          icon: 'img/icons/GC-Icon-09.svg',
          bgImage: 'img/laser-treatment/fotona-laser-tattoo-removal.jpg',
          description:
            'Non-invasive aesthetic treatments GC Aesthetics Clinics using the best laser technology from Fotona which is designed to treat, beautify your appearance and treat your skin condition',
        },
        {
          name: 'Acne Treatment',
          icon: 'img/icons/GC-Icon-07.svg',
          bgImage: 'img/acne-treatments/acne-laser.png',
          description:
            'A series of treatments that are specialized by GC Aesthetics to treat acne or prevent acne growth in all areas.',
        },
        {
          name: 'Acupunture',
          icon: 'img/icons/GC-Icon-10.svg',
          bgImage: 'img/acupunture/acupunture.jpg',
          description:
            'An extension of traditional acupuncture treatment with many benefits to enhance your appearance and maintain your health',
        },
        {
          name: 'Intense Pulse Light',
          icon: 'img/icons/GC-Icon-03.svg',
          bgImage: 'img/intense-pulse-light/tribella.jpg',
          description:
            'A treatment that utilizes multiple light waves by Venus is a combination of photo facial, lifting & sculpting, and skin resurfacing in one session (Tribella)',
        },
        {
          name: 'Hair / Skin Treatment',
          icon: 'img/icons/GC-Icon-02.svg',
          bgImage: 'img/hair-skin-treatments/hifu.jpg',
          description:
            'Skin and Hair Care by GC Aesthetics Clinic which is supported by the best Venus Versa technology for all your aesthetic needs',
        },
        {
          name: 'Skin Booster',
          slug: 'skin-booster',
          icon: 'img/icons/GC-Icon-05.svg',
          bgImage: 'img/face-treatments/salmon-dna.jpg',
          description:
            'Best Skin Booster products by GC Aesthetics Clinic, accompanied by professional consultations and skin booster applications using the best technology to pamper your skin',
        },
        {
          name: 'Slimming Programs',
          icon: 'img/icons/GC-Icon-06.svg',
          bgImage: 'img/slimming-programs/mesotheraphy.jpg',
          description:
            'Consultation for professional weight loss program by GC Aesthetics Clinic accompanied by the best treatment to keep your body slim.',
        },
        {
          name: 'Face Treatment',
          icon: 'img/icons/GC-Icon-04.svg',
          bgImage: 'img/face-treatments/hydra-glow.jpg',
          description:
            'Minimal invasive (non laser / surgical) skin and facial treatments from GC Aesthetics Clinic for your cosmetic needs.',
        },
        {
          name: 'Lifting',
          slug: 'lifting',
          icon: 'img/icons/GC-Icon-08.svg',
          bgImage: 'img/hair-skin-treatments/thread-lift.jpg',
          description:
            'The Lifting Treatment by GC Aesthetics Clinic improves your skin to become firmer and helps you to reflect your desired facial shape.',
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
