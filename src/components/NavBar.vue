<script setup lang="ts">
const emit = defineEmits(['hashChange'])

window.addEventListener('hashchange', () => {
  emit('hashChange', window.location.hash)
})

</script>

<template>
    <header role="banner">
        <img src="#" alt="Logo" class="logo">
        <nav class="nav">
          <ol class="nav-links">
            <li class="link"><a href="#/">Wszystkie pokoje</a></li>
            <li class="link"><a href="#/odwiedzone-pokoje">Odwiedzone</a></li>
            <li class="link"><a href="#/dodaj-pokoj">Dodaj pokój</a></li>
            <li class="link"><a href="#/profil">Twoje konto</a></li>
          </ol>
        </nav>
        <button>Wyloguj</button>
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
</style>
