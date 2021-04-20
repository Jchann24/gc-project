<template>
  <nav class="navbar navbar-expand-lg c-bg-navbar py-2 w-100">
    <div class="container-fluid d-flex align-items-center">
      <nuxt-link to="/" class="navbar-brand d-lg-none">
        <img
          src="img/GC_logo_white.png"
          width="50"
          alt="gc aesthetic logo"
          @click="closeNavbar"
        />
      </nuxt-link>
      <button
        id="navbarToggle"
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="collapse = !collapse"
      >
        <i class="ri-arrow-down-s-line ri-lg text-white"></i>
      </button>
      <div id="mainNavbar" class="collapse navbar-collapse">
        <ul
          class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center justify-content-evenly w-100"
        >
          <li class="nav-item" @click="closeNavbar">
            <nuxt-link to="/aesthetic-treatments" class="nav-link"
              >AESTHETIC TREATMENTS</nuxt-link
            >
          </li>
          <li class="nav-item" @click="closeNavbar">
            <nuxt-link to="/special-offers" class="nav-link"
              >SPECIAL OFFERS</nuxt-link
            >
          </li>
          <li
            class="nav-item d-flex align-items-center justify-content-center text-white d-none d-lg-block"
            @click="closeNavbar"
          >
            <nuxt-link to="/">
              <img
                src="img/GC_logo_white.png"
                width="50"
                alt="gc aesthetic logo"
              />
            </nuxt-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <nuxt-link to="/about-us" class="nav-link">ABOUT US</nuxt-link>
          </li>
          <li class="nav-item" @click="closeNavbar">
            <a
              class="nav-link"
              href="javascript:void(0);"
              @click="scrollContact"
              >BOOKING / CONTACT</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      collapse: false,
    }
  },
  watch: {
    collapse() {
      const el = document.getElementById('navbarToggle').classList
      this.collapse ? el.add('rotated') : el.remove('rotated')
    },
  },
  methods: {
    scrollContact() {
      if (this.$route.path !== '/') {
        this.$router.push('/#contactUsSection')
      } else {
        this.$scrollTo('#contactUsSection', 300, {
          easing: 'ease',
          offset: -125,
        })
      }
    },
    closeNavbar() {
      if (this.collapse) {
        document.getElementById('navbarToggle').click()
      }
    },
  },
}
</script>

<style scoped>
nav {
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 1.5px;
}

.nav-link {
  color: white;
}

.navbar-toggler:focus {
  outline: none;
  box-shadow: none;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.rotated {
  transform: rotate(-180deg);
  transition: all 0.5s ease;
}

.navbar-toggler {
  transition: all 0.5s ease;
}
</style>
