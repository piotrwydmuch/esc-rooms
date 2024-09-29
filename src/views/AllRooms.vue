<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getEscapeRooms } from "../services/escape-rooms";
import SectionHeader from "../components/SectionHeader.vue";
import Room from "../components/SingleRoomListElement.vue";
import orderBy from "lodash/orderBy";

const escapeRooms = ref();

onMounted(() => {
  getEscapeRooms().then((rsp) => {
    escapeRooms.value = rsp;
    // later we can sort by visited and name like this:
    // escapeRooms.value = orderBy(escapeRooms.value, ['visited', 'name'], ['asc', 'asc'])
    escapeRooms.value = orderBy(escapeRooms.value, ['name'], ['asc'])
  });
})
</script>


<template>
  <SectionHeader
    :title="'Wszystkie pokoje'"
    :subtitle="'Przeglądaj Escape Roomy. Oznacz pokoje, które odwiedziłeś.'"
  />
  <div id="all-rooms" class="container mx-auto px-4 py-8 relative">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">All Escape Rooms</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
      <Room v-for="room in escapeRooms" :key="room.id" :room="room" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105" />
    </ul>
    <div class="right-0 flex justify-between fixed bottom-0 gap-4 p-4 bg-white shadow-md">
      <button class="px-4 py-2 bg-indigo-500 shadow-md text-white">Zapisz zmiany</button>
      <button class="px-4 py-2 bg-white shadow-md">Anuluj</button>
    </div>
  </div>
</template>

<style scoped>
</style>
