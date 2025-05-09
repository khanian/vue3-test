<template>
  <div>
    <NoSlotTest />
    <SlotTest />
    <NamedSlotTest />
  </div>
</template>

<script>
import NamedSlotTest from './components/NamedSlotTest.vue';
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';

  export default {
    name: "App",
    components: {
      NoSlotTest, SlotTest, NamedSlotTest
    },
  }
</script>

<style scoped>

</style>