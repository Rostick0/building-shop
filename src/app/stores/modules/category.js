import { defineStore } from "pinia";
import { ref } from "vue";


export const useCategoriesStore = defineStore('category', () => {
    const categories = ref([
        {
            id: 1,
            name: 'Стройматериалы',
            children: [
                {
                    id: 2,
                    name: 'Изоляционные материалы',
                    children: [
                        {
                            id: 3,
                            name: 'Геотекстиль',
                            children: [
                                {
                                    id: 4,
                                    name: 'Клеи изоляционные',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]);

    const categoryAsyncGet = async () => {
        return;

        return axios.get('').
            then(res => res.json())
            .then(res => categories.value = res);
    }

    return { categories, categoryAsyncGet };
});