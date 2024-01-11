<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false)
let auth
const router = useRouter()

onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    }
    else {
      isLoggedIn.value = false
    }
  })
})

const handleLogOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>
<template>
  <header>
    <div class="navbar bg-base-200">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
            <RouterLink class="my-2" to="/">Home</RouterLink>
            <RouterLink class="my-3 pt-4" to="/about">About</RouterLink>

          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">
          <RouterLink to="/">
            BirdBoard
          </RouterLink>
        </a>
      </div>
      <div class="navbar-end">
        <button class='btn btn-outline px-4 bg-base text-base-900' v-show="!isLoggedIn">
          <RouterLink class="my-2" to="/login">Sign In</RouterLink>
        </button>
        <button class='btn btn-outline px-4 bg-base text-base-900 ml-3 inline-flex' @click="handleLogOut"
          v-show="isLoggedIn">
          <span>
            Logout
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd" />
          </svg>

        </button>
      </div>
    </div>
  </header>
</template>