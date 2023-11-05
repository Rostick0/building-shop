<script setup>
import { defineAsyncComponent, onMounted, defineProps } from 'vue';
import { useCatalogStore } from '@/app/stores/modules/catalog'
import { storeToRefs } from 'pinia';
import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const props = defineProps({
    catalogId: Number
});

const catalogStore = useCatalogStore();
const { catalogAsyncGet } = catalogStore;
const { catalog } = storeToRefs(catalogStore);

onMounted(() => {
    catalogAsyncGet(props.catalogId);
});
</script>

<template>
    <div class="catalog_list row">
        <ProductCart v-for="product in catalog?.items" @key="product.id" :product="product">
            <template v-slot:button-icons>
                <ProductButtonsDefault :product="product" />
            </template>
        </ProductCart>
    </div>

    <Pagination />
</template>