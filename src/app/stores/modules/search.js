import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore('search', () => {
    const search = ref([]);

    const searchAsyncGet = async (query) => {
        search.value = [
            {
                id: 1,
                image: '/images/catalog/product/Group 9042642 — копия.png',
                name: 'Пила торцовочная электрическая КМ MS-1401/210 (680152) 1400 Вт',
                price: 7400,
                count: 100,
                weight: 0.009,
                voltage: 67
            }
        ];

        return;

        return axios.get('' + query).
            then(res => res.json())
            .then(res => search.value = res);
    }

    return { search, searchAsyncGet };
});