<template>
  <div>
    <CoreTheNavbar />
    <main id="main">
      <Nuxt />
    </main>
    <CoreTheChatButton />
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

::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  background-color: whitesmoke;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #c6bd95;
  border: 4px solid transparent;
  background-clip: content-box;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #aaa073;
}

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

.object-fit-cover {
  object-fit: cover;
  object-position: center;
}

.object-fit-contain {
  object-fit: contain;
  object-position: center;
}
</style>
