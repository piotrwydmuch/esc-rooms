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
    :title="'Dodaj pokój'"
    :subtitle="'Znasz pokój, którego nie ma na naszej stronie? Wypełnij formularz i poinformuj nas o tym!'"
  />
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Dodaj nowy pokój</h2>
    <form class="bg-white shadow-md rounded-lg p-6 space-y-6">
      <div class="space-y-2">
        <label for="name" class="block text-sm font-medium text-gray-700">Twoje imię i nazwisko</label>
        <input type="text" id="name" name="name" placeholder="np. Jan Kowalski" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      </div>

      <div class="space-y-2">
        <label for="room-name" class="block text-sm font-medium text-gray-700">Nazwa pokoju</label>
        <input type="text" id="room-name" name="room-name" placeholder="np. Opuszczony Hotel" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      </div>

      <div class="space-y-2">
        <label for="location" class="block text-sm font-medium text-gray-700">Lokalizacja</label>
        <input type="text" id="location" name="location" placeholder="np. Wrocław, ul. Rynek 65" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      </div>

      <div class="space-y-2">
        <label for="description" class="block text-sm font-medium text-gray-700">Opis pokoju</label>
        <textarea id="description" name="description" rows="3" placeholder="Opisz krótko na czym polega fabuła pokoju" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>

      <div class="space-y-2">
        <label for="additional-info" class="block text-sm font-medium text-gray-700">Dodatkowe informacje</label>
        <textarea id="additional-info" name="additional-info" rows="2" placeholder="np. dla ilu graczy, poziom trudności itp." 
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>

      <div>
        <button type="submit" 
          class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Wyślij
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
