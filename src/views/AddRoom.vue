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
  <div class="main">
    formularz
  </div>
</template>

<style scoped>
.main {

}

.rooms {

}
</style>
