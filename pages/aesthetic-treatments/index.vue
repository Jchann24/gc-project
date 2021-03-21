<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 px-0">
          <div class="hero-container">
            <img src="img/bgImg/bg-2.jpg" class="hero-img w-100" alt="" />
            <h1 class="overlay-text">Aesthetic Treatments</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 text-center">
          <h1>Aesthetic Treatments</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 mt-4">
          <div class="row d-flex align-items-start justify-content-center">
            <div
              v-for="(item, index) in treatmentList"
              :key="index"
              class="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
            >
              <div class="card border-0 my-2 my-md-1" style="width: 200px">
                <div v-if="index == 0" class="hover-badge text-center">
                  <img
                    :src="item.icon"
                    class="card-img-top w-50 mx-auto p-2 c-bg-icon"
                    alt="..."
                    @click="handleLaser"
                  />
                </div>
                <nuxt-link v-else :to="`/aesthetic-treatments/${item.slug}`">
                  <div class="hover-badge text-center">
                    <img
                      :src="item.icon"
                      class="card-img-top w-50 mx-auto p-2 c-bg-icon"
                      alt="..."
                    />
                  </div>
                </nuxt-link>
                <div class="card-body text-center">
                  <h5 class="c-color-ornaments">{{ item.name }}</h5>
                  <div v-if="index != 0">
                    <p
                      v-for="(des, i) in item.description"
                      :key="i"
                      class="card-text mb-0"
                    >
                      {{ des
                      }}<span v-if="i != item.description.length - 1">,</span>
                    </p>
                  </div>
                  <div v-else>
                    <div class="dropdown d-flex justify-content-center">
                      <button
                        id="laserTreatmentDropdown"
                        class="btn btn-secondary dropdown-toggle font-noto w-100"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <u>Select Here</u
                        ><i class="ri-arrow-down-s-line ri-xs"></i>
                      </button>
                      <ul
                        class="dropdown-menu border-0 c-bg-navbar"
                        aria-labelledby="laserTreatmentDropdown"
                      >
                        <li v-for="(desc, idx) in item.description" :key="idx">
                          <nuxt-link
                            class="dropdown-item text-white"
                            :to="`/aesthetic-treatments/${item.slug}/${getSlug(
                              desc
                            )}`"
                            >{{ desc }}</nuxt-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AestheticTreatmentsIndex',
  data() {
    return {
      treatmentList: [
        {
          name: 'Laser Treatments',
          icon: 'img/icons/GC-Icon-09.svg',
          slug: 'laser-treatments',
          description: [
            'Fotona Laser Tattoo Removal',
            'Laser Kuku / Onchyomycosis',
            'Laser Pigmentation',
            'Fotona 4D',
            'Laser Bibir',
            'Laser Hollywood Peel',
            'Laser Stretchmark',
            'Laser Vaginal Tightening',
          ],
        },
        {
          name: 'Intense Pulse Light',
          icon: 'img/icons/GC-Icon-03.svg',
          slug: 'intense-pulse-light',
          description: ['Photo Rejuvenation (TRIBELLA)'],
        },
        {
          name: 'Slimming Programs',
          icon: 'img/icons/GC-Icon-06.svg',
          slug: 'slimming-programs',
          description: ['BTS-Exilis', 'Meso Slimming Injection'],
        },
        {
          name: 'Acne Treatment',
          icon: 'img/icons/GC-Icon-07.svg',
          slug: 'acne-treatment',
          description: [
            'Active Acne Laser',
            'Acne Injection',
            'Acne Scar Revision',
          ],
        },
        {
          name: 'Hair / Skin Treatment',
          icon: 'img/icons/GC-Icon-02.svg',
          slug: 'hair-skin-treatment',
          description: [
            'Permanent Hair Reduction',
            'Skin Resurfacing',
            'Cellulite Reduction',
            'Skin Tightening',
            'Lifting',
          ],
        },
        {
          name: 'Face Treatment',
          icon: 'img/icons/GC-Icon-04.svg',
          slug: 'face-treatment',
          description: [
            'Botox',
            'Filler',
            'Hydra Facial',
            'Chemical Peeling',
            'Skin Booster',
          ],
        },
        {
          name: 'Acupunture',
          icon: 'img/icons/GC-Icon-10.svg',
          slug: 'acupunture',
          description: [],
        },
      ],
    }
  },
  head() {
    return {
      title: 'Aesthetic Treatments - GC Aesthetics',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Aesthetic Treatments - GC Aesthetics',
        },
      ],
    }
  },
  methods: {
    getSlug(name) {
      return name
        .toLowerCase()
        .replace(/\//g, '')
        .replace(/ +/g, ' ')
        .replace(/\s/g, '-')
    },
    handleLaser() {
      document.getElementById('laserTreatmentDropdown').focus()
    },
  },
}
</script>

<style scoped>
.hero-container {
  position: relative;
  text-align: center;
}

.hero-img {
  height: 45vh;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 0.8;
}

.overlay-text {
  color: white;
  position: absolute;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-img-top {
  border-radius: 30px;
}

.hover-badge {
  transition: all 0.5s ease-out;
}

.hover-badge:hover {
  transform: scale(1.15);
}

.dropdown-toggle {
  border-radius: 30px;
}

.dropdown-toggle:focus {
  border-color: #66482e;
  box-shadow: none;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-item:hover {
  background-color: #66482e;
}
</style>
