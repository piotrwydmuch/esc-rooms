<script setup lang="ts">
const emit = defineEmits(['hashChange'])
defineProps(['routes'])
</script>

<template>
    <header role="banner">
        <img src="#" alt="Logo" class="logo">
        <nav class="nav">
          <ol class="nav-links">
            <li v-for="(route, i) in routes" class="link">
                <a :href="`#${i}`">{{ route.name }}</a>
            </li>
          </ol>
        </nav>
        <button class="link link-darker">Wyloguj</button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.nav-links {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 8px;
}
.link {
    padding: 8px;
}

.logo {
    margin-right: auto;
}

.nav {
    margin-right: 24px;
}

.link {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }

  .link-darker {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md bg-gray-800 text-white;
  }
</style>
