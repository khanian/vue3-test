<template>
  <div>
    <h2> 관심있는 K-POP 가수는? </h2>
    <hr>
    <ul>
      <CheckboxItem v-for="idol in idols" :idol="idol" />
    </ul>
  </div>
</template>

<script>
  import CheckboxItem from './components/CheckboxItem3.vue'
  import Idol from './idol'
  export default {
    name: "App3",
    components: {
      CheckboxItem
    },
    data() {
      return {
        idols: [
          new Idol(1, "BTS", true),
          new Idol(2, "BLACKPINK", false),
          new Idol(3, "TWICE", false),
          new Idol(4, "Red Velvet", false),
          new Idol(5, "EXO", false),
          new Idol(6, "NCT", false),
          new Idol(7, "ITZY", false),
          new Idol(8, "SEVENTEEN", false),
          new Idol(9, "MAMAMOO", false),
          new Idol(10, "IU", false)
        ]
      }
    }
  }
</script>:

<style scoped>

</style>