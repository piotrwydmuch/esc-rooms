<script setup>
import { onMounted, ref, computed } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import NavBar from './components/NavBar.vue'
import AllRooms from './views/AllRooms.vue'
import { supabase } from '../supabase'

const session = ref()

/* TO DO: https://vuejs.org/guide/scaling-up/routing#simple-routing-from-scratch */
const changeView = (view) => {
  console.log(view)
}

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
      <NavBar @hashChange="changeView" />
      <component :is="AllRooms" />
      <!-- <AllRooms :session="session" />
      <Account :session="session" /> -->
    </template>
    <Auth v-else />
  </div>
</template>

<style scoped>

</style>