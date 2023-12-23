<script setup>
import { defineAsyncComponent } from 'vue';
import { useViewedsStore } from '@/app/stores/modules/viewed';
import { storeToRefs } from 'pinia';
// import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const viewedsStore = useViewedsStore();
const { vieweds } = storeToRefs(viewedsStore);
</script>

<template>
    <div class="last_catalog row">
        <h2>ВЫ <b>СМОТРЕЛИ</b></h2>
        <div class="last_catalog_list row">
            <ProductCart v-for="product in vieweds" @key="product.id" :product="product">
<!--                <template v-slot:button-icons>-->
<!--                    <ProductButtonsDefault :product="product" />-->
<!--                </template>-->
            </ProductCart>
        </div>
    </div>
</template>