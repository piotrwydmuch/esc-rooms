<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getEscapeRooms } from "../services/escape-rooms";
import SectionHeader from "../components/SectionHeader.vue";
import Room from "../components/SingleRoomListElement.vue";

const escapeRooms = ref();

onMounted(() => {
  getEscapeRooms().then((rsp) => {
    escapeRooms.value = rsp;
  });
})
</script>


<template>
  <SectionHeader
    :title="'Wszystkie pokoje'"
    :subtitle="'Przeglądaj Escape Roomy. Oznacz pokoje, które odwiedziłeś.'"
  />
  <div id="all-rooms" class="main">
    <ul class="rooms">
      <Room v-for="room in escapeRooms" :room="room">
      </Room>
    </ul>
  </div>
</template>

<style scoped>
.main {

}

.rooms {

}
</style>
