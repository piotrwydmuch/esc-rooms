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
  <form class="row flex-center flex" @submit.prevent="logIn">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>