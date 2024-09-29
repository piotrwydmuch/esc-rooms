<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import SectionHeader from "../components/SectionHeader.vue";
import { getUserDetails } from "../services/users";

const userDetails = ref();

onMounted(() => {
  getUserDetails().then((rsp: unknown) => {
    userDetails.value = rsp;
  });
});
</script>



<template>
  <SectionHeader
    :title="'Profil'"
    :subtitle="'Możesz tu zmienić ustawienia Twojego konta.'"
  />
  <div class="main">
    <h1>Profil</h1>
    <div class="user-details">
      <p>{{ userDetails }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
