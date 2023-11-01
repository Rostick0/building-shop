import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL_API_PRODUCT } from "../helper";

export const usePopularStore = defineStore('popular', () => {
    const popular = ref([]);

    const popularAsyncGet = async (query = '') => {
        return axios.get(BACKEND_URL_API_PRODUCT + '/popular' + query)
            .then(res => {
                popular.value = res.data;
            });
    }

    return { popular, popularAsyncGet };
});