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
            'Temukan perawatan estetika non invasive GC Aesthetics menggunakan teknologi laser terbaik dari Fotona yang di untuk merawat, mempercantik penampilan dan mengatasi kondisi kulit anda',
        },
        {
          name: 'Acne Treatment',
          icon: 'img/icons/GC-Icon-07.svg',
          bgImage: 'img/acne-treatments/acne-laser.png',
          description:
            'Rangkaian perawatan yang dispesialisasikan oleh GC Aesthetics untuk mengatasi jerawat atau mencegah pertumbuhan jerawat di semua area.',
        },
        {
          name: 'Acupunture',
          icon: 'img/icons/GC-Icon-10.svg',
          bgImage: 'img/acupunture/acupunture.jpg',
          description:
            'Perpanjangan dari perawatan acupuncture tradisional dengan banyak manfaat untuk mempercantik penampilan dan menjaga kesehatan anda',
        },
        {
          name: 'Intense Pulse Light',
          icon: 'img/icons/GC-Icon-03.svg',
          bgImage: 'img/intense-pulse-light/tribella.jpg',
          description:
            'Perawatan yang memanfaatkan banyak gelombang cahaya oleh Venus adalah gabungan perawatan photo facial, lifting & sculpting, dan pelapisan kulit dalam satu sesi (Tribella)',
        },
        {
          name: 'Hair / Skin Treatment',
          icon: 'img/icons/GC-Icon-02.svg',
          bgImage: 'img/hair-skin-treatments/hifu.jpg',
          description:
            'Perawatan Kulit dan Rambut oleh GC Aesthetic yang didukung oleh teknologi terbaik Venus Versa untuk segala keperluan Estetika anda',
        },
        {
          name: 'Skin Booster',
          slug: 'skin-booster',
          icon: 'img/icons/GC-Icon-05.svg',
          bgImage: 'img/face-treatments/salmon-dna.jpg',
          description:
            'Temukan rangkaian produk Skin Booster terbaik oleh GC Aesthetic, didampingi oleh konsultasi professional dan aplikasi skin booster menggunakan teknologi terbaik untuk memanjakan kulit anda',
        },
        {
          name: 'Slimming Programs',
          icon: 'img/icons/GC-Icon-06.svg',
          bgImage: 'img/slimming-programs/mesotheraphy.jpg',
          description:
            'Konsultasi program penurunan berat badan professional oleh GC Aesthetic didampingi oleh perawatan terbaik untuk menjaga kelangsingan tubuh anda',
        },
        {
          name: 'Face Treatment',
          icon: 'img/icons/GC-Icon-04.svg',
          bgImage: 'img/face-treatments/hydra-glow.jpg',
          description:
            'Temukan rangkaian perawatan kulit dan wajah minimum invasive (Non Laser / bedah) dari GC Aesthetics untuk kebutuhan kecantikan anda.',
        },
        {
          name: 'Lifting',
          slug: 'lifting',
          icon: 'img/icons/GC-Icon-08.svg',
          bgImage: 'img/hair-skin-treatments/thread-lift.jpg',
          description:
            'Perawatan Lifting oleh GC Aesthetics meningkatkan kulit Anda menjadi lebih kencang dan membantu anda dalam memperfeksikan bentuk wajah yang anda inginkan',
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
