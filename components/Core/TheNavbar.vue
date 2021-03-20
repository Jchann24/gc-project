<template>
  <nav class="navbar navbar-expand-lg c-bg-navbar py-2">
    <div class="container-fluid d-flex align-items-center">
      <nuxt-link to="/" class="navbar-brand d-lg-none">
        <img src="img/GC_logo_white.png" width="50" alt="gc aesthetic logo" />
      </nuxt-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="collapse = !collapse"
      >
        <transition name="fade">
          <i v-if="!collapse" class="ri-arrow-down-s-line ri-lg text-white"></i>
        </transition>
        <transition name="fade">
          <i v-if="collapse" class="ri-arrow-up-s-line ri-lg text-white"></i>
        </transition>
      </button>
      <div id="mainNavbar" class="collapse navbar-collapse">
        <ul
          class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center justify-content-evenly w-100"
        >
          <li class="nav-item">
            <nuxt-link
              to="/aesthetic-treatments"
              class="nav-link"
              aria-current="page"
              >AESTHETIC TREATMENTS</nuxt-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SPECIAL OFFERS</a>
          </li>
          <li
            class="nav-item d-flex align-items-center justify-content-center text-white d-none d-lg-block"
          >
            <nuxt-link to="/">
              <img
                src="img/GC_logo_white.png"
                width="50"
                alt="gc aesthetic logo"
              />
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BOOKING / CONTACT</a>
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
</style>
