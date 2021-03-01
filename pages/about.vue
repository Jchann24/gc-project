<template>
  <div>
    <h1>Test about</h1>
    <p v-for="x in result" :key="x.title">{{ x }}</p>
  </div>
</template>

<script>
import data from 'static/data/test.json'
export default {
  name: 'AboutPage',
  asyncData() {
    let result = JSON.parse(JSON.stringify(data))
    result = result.data
    return { result }
  },
}
</script>

<style></style>
