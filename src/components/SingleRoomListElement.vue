<script setup lang="ts">
import { ref, defineProps, PropType } from 'vue'
import { supabase } from '../../supabase'

type Room = {
    id: number,
    name: string,
    description: string,
    image: string,
    visited: boolean,
}

const props = defineProps({
    room: {
        type: Object as PropType<Room>,
        required: true
    }
})

</script>

<template>
    <div class="room">
        <img class="room-img" :src="props.room.image" :alt="'Grafika pokoju o nazwie ' + props.room.name">
        <div class="room-info">
            <h1>{{ props.room.name }}</h1>
            <p>{{ props.room.description }}</p>
            <label :for="`${props.room.visited}_${props.room.id}`">Odwiedzony</label>
            <input :id="`${props.room.visited}_${props.room.id}`" type="checkbox" name="visited"
                :checked="props.room.visited">
        </div>
    </div>
</template>

<style scoped>
.room-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
    border: 1px solid #000;
}

.room-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
}

.room {
    display: flex;
    margin-bottom: 20px;
    border: 1px solid #000;
}

.room h1 {
    margin: 0;
}

.room p {
    margin: 0;
}
</style>