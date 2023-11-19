import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useViewedsStore = defineStore('viewed', () => {
    const vieweds = ref(
        JSON.parse(localStorage.getItem('vieweds'))
        ??
        []
    );

    // [
    //     {
    //         id: 1,
    //         image: '/images/catalog/product/Group 9042642 — копия.png',
    //         name: 'Пила торцовочная электрическая КМ MS-1401/210 (680152) 1400 Вт',
    //         price: 7400,
    //         count: 100,
    //         weight: 0.009,
    //         voltage: 67
    //     }
    // ]

    const viewedAdd = product => {
        // console.log(product)
        // console.log(vieweds.value)
        if (vieweds.value?.findIndex(item => item == product.id) !== -1) return;

        vieweds.value = [...vieweds.value, product];
    };

    watch(vieweds, () => {
        const viewedsJson = JSON.stringify(vieweds.value);
        localStorage.setItem('vieweds', viewedsJson);
    });

    return { vieweds, viewedAdd };
});