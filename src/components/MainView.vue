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
    <li v-for="(i, n) in escapeRooms">
      <p>
        <span>
          {{ n + 6 }}
          {{ i.id }}
        </span>
        <span>
          {{ i.name }}
        </span>
      </p>
    </li>
  </ul>
</template>

<style scoped>

</style>
