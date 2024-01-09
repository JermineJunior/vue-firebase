<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- component -->
  <main class="mt-10">
    <div class="card w-96 bg-base-200 rounded-none shadow-lg">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-2">
          Sign Up
        </h2>
        <!-- input -->
        <div class="flex items-center text-lg md:mb-4">
          <svg class="absolute ml-3  fill-primary" width="24" viewBox="0 0 24 24">
            <path
              d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-4.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
          </svg>
          <input type="email address" id="email" class="input input-bordered pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="email" />
        </div>

        <!-- input -->
        <div class="flex items-center text-lg md:mb-4">
          <svg class="absolute ml-3  fill-primary" viewBox="0 0 24 24" width="24">
            <path
              d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
          </svg>
          <input type="password" id="password" class="input input-bordered pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Password" />
        </div>

        <!-- input -->
        <div class="flex items-center text-lg md:mb-2">
          <svg class="absolute ml-3  fill-primary" viewBox="0 0 24 24" width="24">
            <path
              d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
          </svg>
          <input type="password" id="password" class="input input-bordered pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Confirm Password" />
        </div>
      </div>
      <div class="mb-6 flex items-center justify-center">
        <button type="button"
          class=" w-48 p-3 text-white bg-primary rounded-md focus:outline-none duration-100 ease-in-out">Sign
          Up</button>
      </div>
      <p class="text-sm text-center text-gray-400">
        Already Have an account
        <RouterLink class="my-2 font-semibold text-primary " to="/login">Sign In</RouterLink>
      </p>
      <!-- seperator -->
      <div class="flex flex-row justify-center mb-8 mt-2">
        <span class="absolute bg-base-100 px-4 text-accent-500">or sign-up with</span>
        <div class="w-full bg-base-200 mt-3 h-px"></div>
      </div>

    <!-- alternate sign-in -->
        <div class="flex flex-row gap-2 mb-4 mx-2">
          <button
            class="bg-secondary text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
              class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <g fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                  fill="currentColor" />
              </g>
            </svg>
            Google
          </button>
          <button
            class="bg-accent text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
              class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <g fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                  fill="currentColor" />
              </g>
            </svg>
            Github
          </button>
        </div>
      </div>
    </main>
</template>