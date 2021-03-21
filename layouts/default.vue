<template>
  <div>
    <CoreTheNavbar />
    <main id="main" class="pb-5">
      <Nuxt />
    </main>
    <div id="chatIconBtn" class="chat-icon">
      <img src="img/icons/chat-icon.svg" width="50" alt="" />
    </div>
  </div>
</template>

<style>
html {
  overflow-x: hidden !important;
  min-height: 100vh;
  max-width: 100vw !important;
}
body {
  overflow-x: hidden !important;
  min-height: 100%;
  font-size: 16px;
  max-width: 100vw !important;
  font-family: 'Noto Sans', sans-serif;
}

.font-noto {
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.05em;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.justify-text {
  text-align: justify;
}

p {
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.05em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

#chatIconBtn {
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
}

.chat-icon {
  background-color: #c6bd95;
  opacity: 0.5;
  transition: all 0.5s ease;
}
.chat-icon:hover {
  opacity: 1;
  transition: all 0.5s ease;
}
</style>
