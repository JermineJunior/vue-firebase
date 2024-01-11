<script setup>

</script>

<template>
  <main class="mt-10">
    <div role="tablist" class="tabs tabs-lifted tabs-lg ">
      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
      <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Users</div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 2" checked />
      <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

      <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
      <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
    </div>
  </main>
</template>