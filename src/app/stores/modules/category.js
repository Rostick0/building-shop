import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL } from "../helper";


export const useCategoriesStore = defineStore('category', () => {
    const categories = ref([
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

    const categoryAsyncGet = async () => {
        return;

        return axios.get(BACKEND_URL).
            then(res => res.json())
            .then(res => categories.value = res);
    }

    return { categories, categoryAsyncGet };
});