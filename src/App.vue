<script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import AllRooms from './components/AllRooms.vue'
import { supabase } from '../supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <template v-if="session">
      <header role="banner">
        to jest header
      </header>
      <AllRooms :session="session" />
      <Account :session="session" />
    </template>
    <Auth v-else />
  </div>
</template>

<style>
header {

}
</style>