<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { usePopularStore } from '@/app/stores/modules/popular'
import { ROUTES } from '@/app/router/helper';
import { storeToRefs } from 'pinia';
import { getQuery } from '@/app/helpers/url';
import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const popularStore = usePopularStore();
const { popularAsyncGet } = popularStore;
const { popular } = storeToRefs(popularStore);

const switchTab = ref(1);

const popularGet = (switchTabid, param) => {
    switchTab.value = switchTabid;

    popularAsyncGet(
        getQuery(param)
    );
}

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
                    <div class="recomend_product_tabs_item" :class="{ active: 1 === switchTab }" @click="popularGet(1, '')">
                        Стройматериалы</div>
                    <div class="recomend_product_tabs_item" :class="{ active: 2 === switchTab }" @click="popularGet(2, '')">
                        Отделочные материалы</div>
                    <div class="recomend_product_tabs_item" :class="{ active: 3 === switchTab }" @click="popularGet(3, '')">
                        Инструменты</div>
                    <div class="recomend_product_tabs_item" :class="{ active: 4 === switchTab }" @click="popularGet(4, '')">
                        Крепежные системы</div>
                    <div class="recomend_product_tabs_item" :class="{ active: 5 === switchTab }" @click="popularGet(5, '')">
                        Сантехническая группа</div>
                    <div class="recomend_product_tabs_item" :class="{ active: 6 === switchTab }" @click="popularGet(6, '')">
                        Отопление</div>
                    <div class="recomend_product_tabs_item" :class="{ active: 7 === switchTab }" @click="popularGet(7, '')">
                        Электрика и вентиляция
                    </div>
                    <RouterLink :to="ROUTES.catalog" class="recomend_product_tabs_item">весь каталог</RouterLink>
                </div>
            </div>
            <div class="recomend_product_tabs_blocks">
                <div class="recomend_product_tabs_block active">
                    <div class="products_list row">
                        <ProductCart v-for="popularItem in popular" :product="popularItem">
                            <template v-slot:button-icons>
                                <ProductButtonsDefault :product="popularItem" />
                            </template>
                        </ProductCart>
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
                <ProductCart v-for="popularItem in popular" :product="popularItem">
                    <template v-slot:button-icons>
                        <ProductButtonsDefault :product="popularItem" />
                    </template>
                </ProductCart>
            </div>
        </div>
    </div>
</template>