<script setup>
import { defineProps } from 'vue';
import ProductCart from '@/components/ProductCart/ProductCart.vue';

const props = defineProps({
    products: {
        type: Array
    }
});

const { products } = props;
</script>

<template>
    <div class="catalog_b_inf">
        <div class="container row">
            <div class="col-3"></div>
            <div class="col-9">
                <div class="last_catalog row">
                    <h2>Товары с <b>похожими характеристиками</b></h2>
                    <div class="last_catalog_list row">
                        <ProductCart v-for="product in products" @key="product.id" :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>