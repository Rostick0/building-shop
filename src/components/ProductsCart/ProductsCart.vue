<script setup>
import { defineAsyncComponent } from 'vue';
import { useCartsStore } from '@/app/stores/modules/cart'
import { storeToRefs } from 'pinia';
// import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const cartStore = useCartsStore();
const { carts } = storeToRefs(cartStore);
</script>

<template>
    <div class="catalog_list row">
        <ProductCart v-for="product in carts" @key="product.id" :product="product"></ProductCart>
    </div>
</template>