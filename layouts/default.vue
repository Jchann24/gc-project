<template>
  <div>
    <CoreTheNavbar />
    <main id="main" class="pb-5">
      <Nuxt />
    </main>
    <CoreTheFooter />
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
</style>
