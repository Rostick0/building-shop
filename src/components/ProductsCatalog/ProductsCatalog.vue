<script setup>
import { defineAsyncComponent, onMounted, defineProps, ref, watch, watchEffect } from 'vue';
import { useCatalogStore } from '@/app/stores/modules/catalog'
import { storeToRefs } from 'pinia';
// import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import { getQuery } from '@/app/helpers/url';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const props = defineProps({
    catalogId: Number,
});

const catalogStore = useCatalogStore();
const { catalogAsyncGet } = catalogStore;
const { catalog } = storeToRefs(catalogStore);

const query = ref({
    Items: 12,
    CategoryId: props.catalogId,
    Page: 1,
});

watchEffect(() => {
    query.value = {
        ...query,
        CategoryId: props.catalogId,
    }
}, {
    flush: 'post'
})

onMounted(() => {
    catalogAsyncGet(
        getQuery(query.value)
    );
});

watch(() => ({ ...query.value }), () => {
    catalogAsyncGet(
        getQuery(query.value)
    );
});

const changePage = (value) => query.value.Page = value
</script>

<template>
    <div class="catalog_list row">
        <pre>{{ query }}</pre>
        <ProductCart v-for="product in catalog?.items" @key="product.id" :product="product">
<!--            <template v-slot:button-icons>-->
<!--                <ProductButtonsDefault :product="product" />-->
<!--            </template>-->
        </ProductCart>
    </div>
    <Pagination v-if="catalog?.totalCountItems > query.Items" :currentPage="query.Page"
        :totalPages="Math.floor(catalog?.totalCountItems / 12)" @more="(() => query.Items += 12)" @page="changePage" />
</template>