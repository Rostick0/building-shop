import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL, BACKEND_URL_API_PRODUCT } from "../helper";

export const useCatalogStore = defineStore('catalog', () => {
    const catalog = ref([]);

    const catalogAsyncGet = async (query) => {
        return axios.get(BACKEND_URL_API_PRODUCT + '/getwithpaging' + query)
            .then(res => {
                catalog.value = res.data
            });
    }

    return { catalog, catalogAsyncGet };
});