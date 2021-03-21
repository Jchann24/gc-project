<template>
  <div id="chatIconBtn" @mouseenter="show = true" @mouseleave="show = false">
    <transition
      name="slide-fade"
      enter-active-class="delay-slide-fade-enter-active"
    >
      <div v-if="show" class="chat-icon my-2">
        <img src="img/icons/chat-icon.svg" width="50" alt="" />
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="show" class="chat-icon my-2">
        <img src="img/icons/chat-icon.svg" width="50" alt="" />
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
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
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
