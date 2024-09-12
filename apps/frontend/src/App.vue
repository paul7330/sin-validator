<template>
  <div id="app" class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="max-w-md w-full bg-gray-800 rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-bold mb-4 text-center text-white">SIN Validator</h1>
      <SinValidator />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SinValidator from './components/sin-validator.vue'

export default defineComponent({
  name: 'App',
  components: {
    SinValidator
  }
})
</script>