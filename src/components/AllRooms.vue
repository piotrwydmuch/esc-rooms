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
  <!-- / gtfo -->
  <div>
    <header>
      <h1>Wszystkie pokoje</h1>
      <h2>Przeglądaj Escape Roomy. Oznacz pokoje, które odwiedziłeś.</h2>
    </header>
  </div>
  <!-- gtfo / -->
  <div id="all-rooms" class="main">
    <ul>
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
</style>
