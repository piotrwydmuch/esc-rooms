<script setup>
import { ref } from 'vue'
import { handleLogin } from '../services/auth'
import { supabase } from '../../supabase'

const loading = ref(false)
const email = ref('')

const logIn = async () => {
  try {
    loading.value = true
    handleLogin(email.value);
  } catch (error) {
  } finally {
    loading.value = false
  }
}
</script>

<template>
<form class="flex flex-col items-center justify-center min-h-screen bg-gray-100" @submit.prevent="logIn">
  <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold text-center text-gray-800">Supabase + Vue 3</h1>
    <p class="text-center text-gray-600">Sign in via magic link with your email below</p>
    <div>
      <input 
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        required 
        type="email" 
        placeholder="Your email" 
        v-model="email" 
      />
    </div>
    <div>
      <input
        type="submit"
        class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        :value="loading ? 'Loading' : 'Send magic link'"
        :disabled="loading"
      />
    </div>
  </div>
</form>
</template>