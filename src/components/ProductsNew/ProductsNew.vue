<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { useNewProductsStore } from '@/app/stores/modules/newProduct';
import { storeToRefs } from 'pinia';
import { ROUTES } from '@/app/router/helper';
// import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const newProductStore = useNewProductsStore();
const { newProductAsyncGet } = newProductStore;
const { newProducts } = storeToRefs(newProductStore);

onMounted(() => {
    newProductAsyncGet();
});
</script>

<template>
    <div class="new_product">
        <div class="new_product_top_while">
            <div class="container">
                <div class="title_products row">
                    <h2><b>НОВИНКИ</b></h2>
                    <div class="title_products_all_wrap"><a href="" class="title_products_all">все новинки</a></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="products_list row">
                <ProductCart v-for="product in newProducts?.items" @key="product.id" :product="product">
<!--                    <template v-slot:button-icons>-->
<!--                        <ProductButtonsDefault :product="product" />-->
<!--                    </template>-->
                </ProductCart>
                <RouterLink :to="ROUTES.catalog + '/new'" class="banner_to_catalog"></RouterLink>
            </div>
        </div>
    </div>
</template>