<script setup>
import { useFavoritesStore } from '@/app/stores/modules/favorite';
const { favoriteClear } = useFavoritesStore()
</script>

<template>
    <div class="clear_fav row" @click="favoriteClear">
        <span>Очистить избранное</span>
        <div class="icon"></div>
    </div>
</template>