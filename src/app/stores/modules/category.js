import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL_API_CATEGORY } from "../helper";
import axios from "axios";


export const useCategoriesStore = defineStore('category', () => {
    const categories = ref([]);

    const categoryAsyncGet = async () => {
        return axios.get(BACKEND_URL_API_CATEGORY + '/tree')
            .then(res => categories.value = res.data);
    }

    return { categories, categoryAsyncGet };
});