<template>
  <div
    id="chatIconBtn"
    @mouseenter="isMobile ? null : handleMouse('enter')"
    @mouseleave="isMobile ? null : handleMouse('leave')"
  >
    <transition
      name="slide-fade"
      enter-active-class="delay-slide-fade-enter-active"
    >
      <div v-if="show" class="d-flex justify-content-center chat-icon my-2">
        <a
          href="https://wa.me/628119158967?text=Hello,%20GC%20Aesthetics"
          target="_blank"
          class="text-decoration-none c-color-title"
          rel="noopener noreferrer"
        >
          <i class="ri-whatsapp-line ri-2x"></i
        ></a>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="show" class="d-flex justify-content-center chat-icon my-2">
        <a
          href="tel:+62-811-9158-967"
          class="text-decoration-none c-color-title"
        >
          <i class="ri-phone-line ri-2x"></i
        ></a>
      </div>
    </transition>
    <div class="chat-icon" style="opacity: 0.5" @click="show = !show">
      <img src="img/icons/chat-icon.svg" width="50" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheChatButton',
  data() {
    return {
      show: false,
      isMobile: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.isMobile = window.matchMedia('(max-width: 992px)').matches
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.show) {
        this.show = false
      }
    },
    handleMouse(action) {
      if (action === 'enter') {
        this.show = true
      } else {
        this.show = false
      }
    },
  },
}
</script>

<style scoped>
#chatIconBtn {
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;
}

.chat-icon {
  background-color: #c6bd95;
  padding: 15px;
  border-radius: 50%;
  opacity: 0.5;
  transition: all 0.5s ease;
}
.chat-icon:hover {
  opacity: 1;
  transition: all 0.5s ease;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.delay-slide-fade-enter-active {
  transition-delay: 150ms;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
