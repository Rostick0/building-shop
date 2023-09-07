<script setup>
import { defineAsyncComponent } from 'vue';
import { useFavoritesStore } from '@/app/stores/modules/favorite'
import { storeToRefs } from 'pinia';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const favoritesStore = useFavoritesStore();
const { favorites } = storeToRefs(favoritesStore);
</script>

<template>
    <div class="catalog_list row">
        <ProductCart v-for="product in favorites" @key="product.id" :product="product" />
    </div>
</template>