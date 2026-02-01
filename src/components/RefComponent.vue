<script setup>
  const props = defineProps({
    person: {
      type: String,
      required: true
    },
    titles: {
      type: Array,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
  });
</script>
<template>
  <div class="ref-component">

    <div class="ref-container mt-5">
      <div class="flex flex-wrap gap-4">
        <div class="flex-1">
          <div class="subtitle font-bold">
            {{ props.person }}
          </div>
        </div>
        <div class="flex-2 subtitle text-right">
          <div v-for="job in props.titles" :key="job.role + job.company">
            <span class="font-medium">{{ job.role }} at </span>
            <span class="font-semibold">{{ job.company }}</span>
          </div>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="flex-1 text-sm">
          {{ props.phone }}
        </div>
        <div class="flex-1 text-sm text-right">
          {{ props.email }}
        </div>
      </div>
    </div>
  </div>
</template>