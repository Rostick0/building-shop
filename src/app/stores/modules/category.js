import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL_API_CATEGORY } from "../helper";
import axios from "axios";
import { findCategoryById, findCategoryIdWithPath } from "@/app/utils/category";

export const useCategoriesStore = defineStore('category', () => {
    const categories = ref([]);

    const categoryAsyncGet = async () => {
        return axios.get(BACKEND_URL_API_CATEGORY + '/tree')
            .then(res => categories.value = res.data);
    }

    const currentCategory = (id) => {
        const cache = {};
        if (cache[id]) return cache[id];

        return cache[id] = findCategoryById(categories.value, id)
    }

    const currentCategoryWithPath = (id) => {
        const cache = {};
        if (cache[id]) return cache[id];

        return cache[id] = findCategoryIdWithPath(categories.value, id)
    }

    return { categories, currentCategory, currentCategoryWithPath, categoryAsyncGet };
});