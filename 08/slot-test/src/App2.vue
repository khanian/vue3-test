<template>
  <Layout>
    <template v-slot:header>
      <h2>Header area</h2>
    </template>
    <template v-slot:sidebar>
      <h3>sidebar</h3>
      <h3>sidebar</h3>
      <h3>sidebar</h3>
    </template>
    <template v-slot:default>
      <h1>Contents area</h1><h1>Contents area</h1><h1>Contents area</h1>
      <h1>Contents area</h1><h1>Contents area</h1><h1>Contents area</h1>
    </template>
    <template v-slot:footer>
      <h2>Footer text</h2>
    </template>
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue';
  export default {
    name: "App2",
    components: {
      Layout
    },
  }
</script>

<style scoped>

</style>