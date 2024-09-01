<script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import MainView from './components/MainView.vue'
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
      <header>
        <Account :session="session" />
      </header>
      <MainView :session="session" />
    </template>
    <Auth v-else />
  </div>
</template>

<style>
header {
  position: absolute;
  top: 0;
  right: 0;
}
</style>