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
    <section>
      <!-- Bottom-Right Corner -->
      <div class="fixed bottom-2 right-4 opacity-75">
        <div class="dropdown dropdown-top">
          <div tabindex="0" role="button" class="btn m-1">
            Theme
          </div>
          <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            <li><input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="dark" />
            </li>
            <li><input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" />
            </li>
            <li><input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="garden"
                value="garden" /></li>
            <li><input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine"
                value="valentine" /></li>
            <li><input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="cupcake"
                value="cupcake" /></li>
            <li><input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="synthwave"
                value="synthwave" /></li>
            <li><input type="radio" name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="luxury"
                value="luxury" /></li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
