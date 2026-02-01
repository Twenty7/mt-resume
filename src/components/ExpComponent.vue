<script setup>
  const props = defineProps({
    company: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    locationClass: {
      type: String,
      required: false,
      default: ''
    },
    leftWidth: {
      type: Number,
      required: false,
      default: 1
    },
    rightWidth: {
      type: Number,
      required: false,
      default: 1
    },
  });
</script>
<template>
  <div class="exp-component">
    <div class="exp-container flex mt-2">
      <div :class="`w-${props.leftWidth} flex-auto`">
        <div class="subtitle font-bold">
          {{ props.company }}
        </div>
        <div class="subtitle font-semibold text-sm" :class="props.locationClass">
          {{ props.location }}
        </div>
      </div>
      <div :class="`w-${props.rightWidth} flex-auto text-right`">
        <div class="subtitle font-bold">
          {{ props.title }}
        </div>
        <div class="subtitle font-semibold text-sm">
          {{ props.date }}
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>