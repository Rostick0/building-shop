<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { useCatalogStore } from '@/app/stores/modules/catalog'
import { storeToRefs } from 'pinia';
import { ROUTES } from '@/app/router/helper';
import Pagination from '@/components/Pagination/Pagination.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const catalogStore = useCatalogStore();
const { catalogAsyncGet } = catalogStore;
const { catalog } = storeToRefs(catalogStore);

onMounted(() => {
    catalogAsyncGet();
});
</script>

<template>
    <div class="catalog_list row">
        <ProductCart v-for="product in catalog" @key="product.id" :product="product" />
    </div>

    <Pagination />
</template>