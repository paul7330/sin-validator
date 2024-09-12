<template>
  <form @submit.prevent="submitSIN" class="space-y-4">
    <div>
      <label for="sin" class="block text-lg font-semibold text-white mb-2">Social Insurance Number</label>
      <input
        type="text"
        maxlength="9"
        id="sin"
        v-model="sin"
        @input="validateInput"
        @keypress="allowOnlyNumbers"
        class="mt-1 block w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 
               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 
               transition duration-150 ease-in-out
               placeholder-gray-400 text-lg"
        placeholder="Enter 9-digit SIN"
      />
    </div>
    <div v-if="validationMessage" :class="[messageClass]">
      {{ validationMessage }}
    </div>
    <button
      type="submit"
      class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
    >
      Validate
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { validateSIN } from 'shared-utils'
import { useToast } from 'vue-toastification'
import { validateSINWithAPI } from '../services/sinValidationService'

const sin = ref('')
const isValid = ref(false)
const validationMessage = ref('')

const messageClass = computed(() => 
  isValid.value ? 'text-green-600' : 'text-red-600'
)

const toast = useToast()

const validateInput = () => {
  const result = validateSIN(sin.value)
  isValid.value = result.isValid
  validationMessage.value = sin.value ? result.message : ''
}

const submitSIN = async () => {
  if (!sin.value) {
    toast.error('Please enter a SIN before submitting', { timeout: 3000 })
    return
  }
  
  try {
    const response = await validateSINWithAPI(sin.value)
    toast[response.isValid ? 'success' : 'error'](response.message, { timeout: 3000 })
  } catch (error) {
    console.error('Error validating SIN:', error)
    toast.error('An error occurred while validating the SIN', { timeout: 3000 })
  }
}

const allowOnlyNumbers = (event: KeyboardEvent) => {
  const charCode = event.which ? event.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault()
  }
}
</script>
