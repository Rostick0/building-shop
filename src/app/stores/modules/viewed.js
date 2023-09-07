import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useViewedsStore = defineStore('viewed', () => {
    const vieweds = ref([
        {
            id: 1,
            image: '/images/catalog/product/Group 9042642 — копия.png',
            name: 'Пила торцовочная электрическая КМ MS-1401/210 (680152) 1400 Вт',
            price: 7400,
            count: 100,
            weight: 0.009,
            voltage: 67
        }
    ]);

    const viewedAdd = viewed => {
        vieweds.value = [...vieweds.value, viewed];
    };

    watch(vieweds, () => {
        const viewedsJson = JSON.stringify(vieweds.value);
        localStorage.setItem('vieweds', viewedsJson);
    });

    return { vieweds, viewedAdd };
});