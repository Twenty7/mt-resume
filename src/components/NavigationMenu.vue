<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: 'menu menu-horizontal px-1 text-lg grid-autoflow justify-center'
  },
  hover: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
});


</script>

<template>
  <ul :class="props.classes">
    <li><router-link class="btn" :to="{ name: 'home' }">Home</router-link></li>
  </ul>
</template>


<style scoped>
  .navbar .subnav {
    margin-block-start: 0px;
  }
</style>