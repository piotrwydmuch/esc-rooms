<script setup lang="ts">
import { ref, defineProps, PropType } from 'vue'

interface Room {
    id: number;
    name: string;
    description?: string;
    location?: string;
    difficulty_level?: number;
    duration_minutes?: number;
    max_players?: number;
    average_rating?: number;
    total_reviews?: number;
    created_at?: string; // or Date
    tags?: any[]; // or a more specific type if known
    price?: number;
    company_name?: string;
    is_active?: boolean;
    image_url?: string;
    latitude?: number;
    longitude?: number;
    contact_phone?: string;
    website_url?: string;
    min_players?: number;
}

const props = defineProps({
    room: {
        type: Object as PropType<Room>,
        required: true
    }
})

const visited = ref(false); 

</script>

<template>
    <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full my-8">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48 p-6" :src="props.room.image_url">
            </div>
            <div class="bg- pr-6">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ props.room.name }}</a>
                <p class="mt-2 text-gray-500">{{ props.room.description }}</p>
                <label :for="`${visited}_${props.room.id}`">Odwiedzony</label>
                <input :id="`${visited}_${props.room.id}`" type="checkbox" name="visited"
                    :checked="visited">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>