import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useNewProductsStore = defineStore('newProduct', () => {
    const newProducts = ref([
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

    const newProductAsyncGet = async () => {
        return;

        return axios.get('').
            then(res => res.json())
            .then(res => newProducts.value = res);
    }

    return { newProducts, newProductAsyncGet };
});