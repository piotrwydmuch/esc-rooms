<script setup lang="ts">
const props = defineProps(['title', 'subtitle'])
</script>

<template>
    <header>
        <h1>{{ props.title }}</h1>
        <h2>{{ props.subtitle }}</h2>
    </header>
</template>

<style scoped>
</style>
