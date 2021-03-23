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
</style>
