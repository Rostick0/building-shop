<script setup>
import { onMounted } from 'vue';
import { ROUTES } from '@/app/router/helper';
import { useCategoriesStore } from '@/app/stores/modules/category';
import { storeToRefs } from 'pinia';
import { categoryIcons } from '@/app/utils/category-icons';

const categoriesStore = useCategoriesStore();
const { categoryAsyncGet } = categoriesStore;
const { categories } = storeToRefs(categoriesStore);

onMounted(() => {
    if (!categories.value?.length) categoryAsyncGet()
});
</script>

<template>
    <div class="header_menu header_menu_index">
        <RouterLink :to="ROUTES.main" class="logo"></RouterLink>
        <ul class="header_menu_nav">
            <li v-for="(category, index) in categories" @key="category.id" class="header_menu_item">
                <div class="header_menu_item_wrap">
                    <RouterLink :to="ROUTES.catalog + '/' + category.id">
                        <span v-html="categoryIcons[index]"></span>
                        <span>{{ category?.name }}</span>
                    </RouterLink>
                    <div class="wrap_menu">
                        <div class="wrap_menu_sub">
                            <RouterLink :to="ROUTES.catalog + '/new'">
                                <div class="wrap_menu_sub_title">
                                    <span>{{ category?.name }}</span>
                                </div>
                            </RouterLink>
                            <ul v-if="category?.subCategories?.length">
                                <li v-for="subCategory in  category.subCategories " @key="subCategory.id">
                                    <RouterLink :to="ROUTES.catalog + '/' + subCategory.id">{{ subCategory?.name }}
                                    </RouterLink>
                                    <div v-if="subCategory?.subCategories" class="wrap_menu_sub2">
                                        <div class="wrap_menu_title">
                                            <span>{{ subCategory?.name }}</span>
                                        </div>
                                        <ul>
                                            <li v-for="subSubCategory in subCategory.subCategories"
                                                @key="subSubCategory.id">
                                                <RouterLink :to="ROUTES.catalog + '/' + subSubCategory.id">{{
                                                    subSubCategory.name }}</RouterLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>