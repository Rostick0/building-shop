import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useViewedsStore = defineStore('viewed', () => {
    const vieweds = ref([]);

    const viewedAdd = viewed => {
        vieweds.value = [...vieweds.value, viewed];
    };

    watch(vieweds, () => {
        const viewedsJson = JSON.stringify(vieweds.value);
        localStorage.setItem('vieweds', viewedsJson);
    });

    return { vieweds, viewedAdd };
});