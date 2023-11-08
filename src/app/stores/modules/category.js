import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL_API_CATEGORY } from "../helper";
import axios from "axios";
import { findCategoryById, findCategoryIdWithPath } from "@/app/utils/category";
import { ROUTES } from "@/app/router/helper";

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

        const cat = findCategoryIdWithPath({ subCategories: categories.value }, id);
        const catLast = cat?.splice(-1, 1)?.[0];
        const formatCat = cat?.map(({ id, name }) => ({ id, name, link: ROUTES.catalog + '/' + id }))
        formatCat?.push({ id: catLast.id, name: catLast.name, active: true });

        return cache[id] = formatCat;
    }

    return { categories, currentCategory, currentCategoryWithPath, categoryAsyncGet };
});