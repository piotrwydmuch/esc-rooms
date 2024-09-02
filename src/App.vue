<script setup>
import { onMounted, ref, computed } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import NavBar from './components/NavBar.vue'
import AllRooms from './views/AllRooms.vue'
import VisitedRooms from './views/VisitedRooms.vue'
import AddRoom from './views/AddRoom.vue'
import UserProfile from './views/UserProfile.vue'
import { supabase } from '../supabase'

const session = ref()

const routes = {
  '/': {
    name: 'Wszystkie pokoje',
    component: AllRooms
  },
  '/odwiedzone-pokoje': {
    name: 'Odwiedzone',
    component: VisitedRooms,
  },
  '/dodaj-pokoj': {
    name: 'Dodaj pokój',
    component: AddRoom,
  },
  '/profil': {
    name: 'Twój profil',
    component: UserProfile
  },
}

const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'].component || NotFound
})

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
      <NavBar :routes="routes" />
      <component :is="currentView" />
      <!-- <Account :session="session" /> -->
    </template>
    <Auth v-else />
  </div>
</template>

<style scoped>

</style>