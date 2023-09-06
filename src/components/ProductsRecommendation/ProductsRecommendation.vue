<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { usePopularStore } from '@/app/stores/modules/popular'
import { storeToRefs } from 'pinia';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const popularStore = usePopularStore();
const { popularAsyncGet } = popularStore;
const { popular } = storeToRefs(popularStore);

onMounted(() => {
    popularAsyncGet();
});
</script>

<template>
    <div class="recomend_product recomend_product_main">
        <div class="container">
            <div class="recomend_title row">
                <h2>Вам может <b>понадобиться</b></h2>
                <div class="recomend_product_tabs_panel row">
                    <div class="recomend_product_tabs_item active" data-tab="1">Стройматериалы</div>
                    <div class="recomend_product_tabs_item" data-tab="2">Отделочные материалы</div>
                    <div class="recomend_product_tabs_item" data-tab="3">Инструменты</div>
                    <div class="recomend_product_tabs_item" data-tab="4">Крепежные системы</div>
                    <div class="recomend_product_tabs_item" data-tab="5">Сантехническая группа</div>
                    <div class="recomend_product_tabs_item" data-tab="6">Отопление</div>
                    <div class="recomend_product_tabs_item" data-tab="7">Электрика и вентиляция</div>
                    <a href="" class="recomend_product_tabs_item">весь каталог</a>
                </div>
            </div>
            <div class="recomend_product_tabs_blocks">
                <div class="recomend_product_tabs_block active" data-tab-content="1">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem" />
                    </div>
                </div>
                <div class="recomend_product_tabs_block" data-tab-content="2">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem" />
                    </div>
                </div>
                <div class="recomend_product_tabs_block" data-tab-content="3">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem" />
                    </div>
                </div>
                <div class="recomend_product_tabs_block" data-tab-content="4">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem" />
                    </div>
                </div>
                <div class="recomend_product_tabs_block" data-tab-content="5">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem" />
                    </div>
                </div>
                <div class="recomend_product_tabs_block" data-tab-content="6">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem" />
                    </div>
                </div>
                <div class="recomend_product_tabs_block" data-tab-content="7">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="popular_product">
        <div class="container">
            <div class="title_products row">
                <h2>Популярная продукция<b>Grand Line</b></h2>
                <div class="title_products_all_wrap"><a href="" class="title_products_all">все новинки</a></div>
            </div>
            <div class="products_list row">
                <ProductCart v-for="popularItem in popular" :product="popularItem" />
            </div>
        </div>
    </div>
</template>