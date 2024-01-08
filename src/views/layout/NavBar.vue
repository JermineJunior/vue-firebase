<script setup>
  import { RouterLink } from 'vue-router'
</script>
<template>
   <header>
        <div class="navbar bg-base-200">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 divide-y divide-slate-500">
                <RouterLink class="my-2" to="/">Home</RouterLink>
                <RouterLink class="my-3 pt-4" to="/about">About</RouterLink>

              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <a class="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div class="navbar-end">
            <button class='btn px-4 btn-accent'>
                <RouterLink class="my-2" to="/login">Sign In</RouterLink>
            </button>
          </div>
        </div>
      </header>
</template>