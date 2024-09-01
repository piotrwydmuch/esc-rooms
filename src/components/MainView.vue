<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getEscapeRooms } from "../services/escape-rooms";

const escapeRooms = ref();

onMounted(() => {
  getEscapeRooms().then((rsp) => {
    escapeRooms.value = rsp;
  });
})
</script>


<template>
  <div>
    Hey 
  </div>
  <p>Pokoje:</p>
  <ul>
    <li v-for="room in escapeRooms">
      <p>
        <span>
          {{ room.name }}
        </span>
      </p>
    </li>
  </ul>
</template>

<style scoped>

</style>
