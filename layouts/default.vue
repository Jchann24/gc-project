<template>
  <div>
    <CoreTheNavbar />
    <main id="main" class="pb-5">
      <Nuxt />
    </main>
  </div>
</template>

<style>
html {
  overflow-x: hidden;
  min-height: 100vh;
  max-width: 100vw;
}
body {
  min-height: 100%;
  width: 100%;
}

.font-noto {
  font-family: 'Noto Sans', sans-serif;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.justify-text {
  text-align: justify;
}
</style>
