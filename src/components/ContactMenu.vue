<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: 'menu menu-horizontal gap-2 justify-right'
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


const print = () => {
  window.print();
};
</script>

<template>
  <ul :class="props.classes">
    <li>
      <button class="btn" @click="print()">
        <font-awesome-icon :icon="['fa', 'print']" />
      </button>
    </li>
    <li>
      <a href="tel:+19513156113" class="btn">
        <FontAwesomeIcon :icon="['fa', 'phone']" />
      </a>
    </li>
    <li>
      <a href="mailto:mtaylor@eight9.net" class="btn">
        <FontAwesomeIcon :icon="['fa', 'envelope']" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/mtaylor-twenty7/" class="btn">
        <FontAwesomeIcon :icon="['fab', 'linkedin']" />
      </a>
    </li>
  </ul>
</template>


<style scoped>
  .navbar .subnav {
    margin-block-start: 0px;
  }
</style>