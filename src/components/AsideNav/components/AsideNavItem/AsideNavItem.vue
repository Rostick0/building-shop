<script setup>
import { ref, defineProps } from 'vue';
import { ROUTES } from '@/app/router/helper';
import { categoryIcons } from '@/app/utils/category-icons';
import AsideNavItemSub from './compoments/AsideNavItemSub/AsideNavItemSub.vue';

const props = defineProps({
    category: {
        type: Object
    },
    index: Number
});
const active = ref(false);

const activeToggle = () => active.value = !active.value;
</script>

<template>
    <li class="header_menu_item" :class="{ active }">
        <div @click="activeToggle" class="header_menu_item_wrap">
            <RouterLink :to="ROUTES.catalog + '/' + category.id">
                <span v-html="categoryIcons[index]"></span>
                <span>{{ category.name }}</span>
            </RouterLink>
        </div>

        <ul v-show="category.subCategories">
            <AsideNavItemSub v-for="subCategory in category.subCategories" @key="subCategory.id" :subCategory="subCategory" />
        </ul>
    </li>
</template>