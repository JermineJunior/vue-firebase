<script setup>
import { RouterView } from 'vue-router'
import NavBar from './views/layout/NavBar.vue'
</script>

<template>
  <main>
   <NavBar />
    <section class="grid items-center justify-center">
      <RouterView />
    </section>
  </main>
</template>
