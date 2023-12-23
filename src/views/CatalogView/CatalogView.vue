<script setup>
import AsideNav from '@/components/AsideNav/AsideNav.vue';
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductsCatalog from '@/components/ProductsCatalog/ProductsCatalog.vue';
import ProductsViewed from '@/components/ProductsViewed/ProductsViewed.vue';
import Partners from '@/components/Partners/Partners.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import { ROUTES } from '@/app/router/helper';
import { useCategoriesStore } from '@/app/stores/modules/category'
import { useRoute } from 'vue-router';

const route = useRoute();

const categoryStore = useCategoriesStore();
const { currentCategory, currentCategoryWithPath } = categoryStore;
</script>

<template>
    <LayoutDefault>
        <div class="text_page fav catalog">
            <div class="container row">
                <AsideNav />
                <div class="col-9 col-sm-12">
                    <Bradscubs :bradscubs="currentCategoryWithPath(route.params?.id)" />
                    <div class="text_page_top">
                      <h1>{{ currentCategory(route.params?.id)?.name }}</h1>
                    </div>
                    <div v-if="currentCategory(route.params?.id)?.subCategories" class="subsection row">
                        <RouterLink v-for="category in currentCategory(route.params?.id)?.subCategories" @key="category.id"
                            class="subsection_item" :to="ROUTES.catalog + '/' + category.id">{{ category.name }}
                        </RouterLink>
                    </div>
                    <ProductsCatalog :catalogId="route.params?.id" />
                </div>
            </div>
        </div>
        <div class="catalog_b_inf">
            <div class="container row">
                <div class="col-3 col-sm-12"></div>
                <div class="col-9 col-sm-12">
                    <ProductsViewed />
                </div>
            </div>
        </div>
        <Partners></Partners>
    </LayoutDefault>
</template>