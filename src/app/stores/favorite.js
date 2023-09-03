import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";

export const useFavoritesStore = defineStore('favorite', () => {
    const favorites = ref([]);
    const favoriteCount = computed(() => favorites?.length);

    const favoriteAdd = favorite => {
        favorites.value = [...favorites.value, favorite];
    };

    const favoriteUpdate = (favorite, id) => {
        const index = favorites.value?.findIndex(favorite => favorite.id === id);

        if (index === -1) return;

        favorites.value[index] = favorite;
    };

    const favoriteRemove = id => {
        const index = favorites.value?.findIndex(favorite => favorite.id === id);
        const oldFavorites = [...favorites.value];
        oldFavorites.splice(index, 1);

        favorites.value = oldFavorites;
    }

    watchEffect(favorites, () => {
        const favoritesJson = JSON.stringify(favorites.value);
        localStorage.setItem('favorites', favoritesJson);
    });

    return { favorites, favoriteCount, favoriteAdd, favoriteUpdate, favoriteRemove };
});