<script setup>
import { ref, defineProps } from 'vue';
import { ROUTES } from '@/app/router/helper';

const props = defineProps({
    subCategory: {
        type: Object
    }
});

const active = ref(false);

const activeToggle = () => active.value = !active.value;
</script>

<template>
    <li @click="activeToggle" :class="{ active: active && subCategory?.subCategories }">
        <RouterLink :to="ROUTES.catalog + '/' + subCategory.id">{{ subCategory.name }}</RouterLink>
        <ul v-show="subCategory?.subCategories && active">
            <li v-for="subSubCategory in subCategory?.subCategories" @key="subSubCategory.id" class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/' + subSubCategory.id">{{ subSubCategory.name }}</RouterLink>
                <div v-show="subSubCategory.subCategories" class="wrap_menu">
                    <div v-for="subSubSubCategory in subSubCategory.subCategories" @key="subSubSubCategory.id"
                        class="wrap_menu_sub">
                        <RouterLink :to="ROUTES.catalog + '/' + subSubSubCategory.id">
                            <div class="wrap_menu_sub_title">
                                <span>{{ subSubSubCategory.name }}</span>
                            </div>
                        </RouterLink>
                        <ul v-show="subSubSubCategory.subCategories">
                            <li v-for="subSubSubSubCategory in subSubSubCategory.subCategories">
                                <RouterLink :to="ROUTES.catalog + '/' + subSubSubSubCategory.id">{{
                                    subSubSubSubCategory.name }}</RouterLink>
                                <!-- <div class="wrap_menu_sub2">
                                            <div class="wrap_menu_title">
                                                <span>Пленки, мембраны, ленты, клеи</span>
                                            </div>
                                            <ul>
                                                <li>
                                                    <RouterLink :to="ROUTES.catalog + '/new'">Клеи изоляционные
                                                    </RouterLink>
                                                </li>
                                            </ul>
                                        </div> -->
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </li>
</template>