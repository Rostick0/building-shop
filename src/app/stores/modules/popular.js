import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { BACKEND_URL } from "../helper";

export const usePopularStore = defineStore('popular', () => {
    const popular = ref([
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

    const popularAsyncGet = async (query = '') => {
        return;

        return axios.get(BACKEND_URL + query).
            then(res => res.json())
            .then(res => popular.value = res);
    }

    return { popular, popularAsyncGet };
});