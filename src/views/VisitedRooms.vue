<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getEscapeRooms } from "../services/escape-rooms";
import SectionHeader from "../components/SectionHeader.vue";

const escapeRooms = ref();

onMounted(() => {
  getEscapeRooms().then((rsp) => {
    escapeRooms.value = rsp;
  });
})
</script>


<template>
  <SectionHeader
    :title="'Odwiedzone pokoje'"
    :subtitle="'Zarządzaj pokojami, które odwiedziłeś. Dodaj oceny oraz napisz co Ci się najbardziej podobało.'"
  />
  <div id="visited-rooms" class="container mx-auto px-4 py-8">
  <h2 class="text-2xl font-bold mb-6 text-gray-800">Visited Rooms</h2>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <li v-for="room in escapeRooms" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ room.name }}</h3>
        <p class="text-gray-600">Escaped on: {{ room.date }}</p>
        <p class="text-gray-600">Difficulty: {{ room.difficulty }}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<style scoped>
.main {

}

.rooms {

}
</style>
