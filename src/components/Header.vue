
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavigationMenu from './NavigationMenu.vue';
import ContactMenu from './ContactMenu.vue';

</script>

<template>
  <header class="header sticky top-0 z-50 print:hidden">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start flex-1">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-lg btn-ghost lg:hidden">
            <font-awesome-icon :icon="['fa', 'bars']" size="lg" />
          </div>
          <navigation-menu classes="menu menu-compact text-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100" :hover="false" :border="false" />
        </div>
        <div class="mx-2 subtitle font-bold text-lg">
          <router-link :to="{ name: 'home' }">
            Matthew Taylor's Resume / CV
          </router-link>
        </div>
      </div>

      <div class="navbar-center hidden lg:flex flex-auto justify-center">
        <navigation-menu />
      </div>

      <div class="navbar-end ml-5 flex-1">
        <contact-menu
          classes="menu menu-horizontal gap-y-2 gap-x-2 md:gap-x-4 xl:gap-x-6 text-sm md:text-lg md:text-xl justify-right"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>

