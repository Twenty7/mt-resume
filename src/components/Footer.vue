<script setup>
import { computed } from 'vue';
import ContactMenu from './ContactMenu.vue';

  const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer sm:footer-horizontal bg-base-300 text-content items-center p-4 print:hidden">
    <aside class="grid-flow-col items-center">
      <p>Copyright &copy; {{ currentYear}} All Rights Reserved by <a href="https://eight9.net" target="_blank" class="text-primary">Eight9 Design Network INC</a></p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <ContactMenu />
    </nav>
  </footer>
</template>

