<template>
  <div>
    <h2> 관심있는 K-POP 가수는? </h2>
    <hr>
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id"
        :id="idol.id" :name="idol.name" :checked="idol.checked" />
    </ul>
  </div>
</template>

<script>
  import CheckboxItem from './components/CheckboxItem.vue'
  export default {
    name: "App",
    components: {
      CheckboxItem
    },
    data() {
      return {
        idols: [
          { id: 1, name: "BTS", checked: true },
          { id: 2, name: "BLACKPINK", checked: false },
          { id: 3, name: "TWICE", checked: true },
          { id: 4, name: "Red Velvet" },
          { id: 5, name: "EXO" },
          { id: 6, name: "NCT" },
          { id: 7, name: "ITZY" },
          { id: 8, name: "SEVENTEEN", checked: false },
          { id: 9, name: "MAMAMOO", checked: false },
          { id: 10, name: "IU", checked: false }
        ]
      }
    }
  }
</script>

<style scoped>

</style>