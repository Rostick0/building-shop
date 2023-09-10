<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { usePopularStore } from '@/app/stores/modules/popular'
import { storeToRefs } from 'pinia';
import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const popularStore = usePopularStore();
const { popularAsyncGet } = popularStore;
const { popular } = storeToRefs(popularStore);

onMounted(() => {
    popularAsyncGet();
});
</script>

<template>
    <div class="popular_product">
        <div class="container">
            <div class="title_products row">
                <h2>Популярная продукция<b>Grand Line</b></h2>
                <div class="title_products_all_wrap"><a href="" class="title_products_all">все новинки</a></div>
            </div>
            <div class="products_list row">
                <ProductCart v-for="popularItem in popular" :product="popularItem">
                    <template v-slot:button-icons>
                        <ProductButtonsDefault :product="popularItem" />
                    </template>
                </ProductCart>
            </div>
        </div>
    </div>
</template>