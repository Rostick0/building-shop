<script setup>
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import RecomemndCatalog from '@/components/RecomemndCatalog/RecomemndCatalog.vue';
import AsideNav from '@/components/AsideNav/AsideNav.vue';
import Product from '@/components/Product/Product.vue';
import Partners from '@/components/Partners/Partners.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import { ROUTES } from '@/app/router/helper';
import { useProductStore } from '@/app/stores/modules/product';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useViewedsStore } from '@/app/stores/modules/viewed';

const bradscubs = [
    {
        id: 1,
        link: ROUTES.main,
        name: 'Главная страница'
    },
    {
        id: 2,
        link: ROUTES.main,
        name: 'КАТАЛОГ СТРОЙМАТЕРИАЛОВ'
    },
    {
        id: 3,
        link: ROUTES.main,
        name: 'СТРОЙМАТЕРИАЛЫ'
    },
    {
        id: 4,
        name: 'ИЗОЛЯЦИОННЫЕ МАТЕРИАЛЫ',
        active: true
    }
];

const productStore = useProductStore();
const { productAsyncGet } = productStore;
const { product } = storeToRefs(productStore);

const viewedsStore = useViewedsStore();
const { viewedAdd } = viewedsStore;
// const { product } = storeToRefs(viewedsStore);

const route = useRoute();

onMounted(() => {
    (async () => {
        await productAsyncGet(route.params.id);
        viewedAdd(product.value)
    })()
});
</script>

<template>
    <LayoutDefault>
        <div class="text_page fav catalog product_element">
            <div class="container row">
                <AsideNav />
                <div class="col-9 col-sm-12">
                    <Bradscubs :bradscubs="bradscubs" />
                    <div class="text_page_top">
                        <h1>{{ product.name }}</h1>
                        <div class="article">{{ product.article }}</div>
                    </div>
                    <Product :="product" :сharacteristics="Object.entries(product?.сharacteristics ?? {})" />
                </div>
            </div>
        </div>
        <RecomemndCatalog />
        <Partners />
    </LayoutDefault>
</template>