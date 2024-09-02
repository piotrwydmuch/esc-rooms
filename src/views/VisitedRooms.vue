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
  <div id="visited-rooms" class="main">
    <ul class="rooms">
      <li v-for="room in escapeRooms">
        <p>
          <span>
            {{ room.name }}
          </span>
        </p>
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
