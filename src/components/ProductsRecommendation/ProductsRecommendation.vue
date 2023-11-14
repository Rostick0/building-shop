<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { ROUTES } from '@/app/router/helper';
import { getQuery } from '@/app/helpers/url';
import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
import { usePopularStore } from '@/app/stores/modules/popular';
import { storeToRefs } from 'pinia'
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

// const { popular, popularAsyncGet } = usePopularStore();

const popularStore = usePopularStore()
const { popular } = storeToRefs(popularStore)
const { popularAsyncGet } = popularStore;

const switchTab = ref(1);

onMounted(() => {
    popularAsyncGet();
});

const popularGet = (switchTabid) => {
    switchTab.value = switchTabid;

    popularAsyncGet(
        getQuery({
            CategoryId: switchTabid
        })
    );
}

const tabs = [
    {
        id: 1,
        name: 'Стройматериалы'
    },
    {
        id: 230,
        name: 'Отделочные материалы'
    },
    {
        id: 785,
        name: 'Инструменты'
    },
    {
        id: 1158,
        name: 'Крепежные системы'
    },
    {
        id: 1652,
        name: 'Сантехническая группа'
    },
    {
        id: 1813,
        name: 'Отопление'
    },
    {
        id: 1857,
        name: 'Электрика и вентиляция'
    }
];
</script>

<template>
    <div class="recomend_product recomend_product_main">
        <div class="container">
            <div class="recomend_title row">
                <h2>Вам может <b>понадобиться</b></h2>
                <div class="recomend_product_tabs_panel row">
                    <div v-for="tab in tabs" @key="tab.id" class="recomend_product_tabs_item"
                        :class="{ active: tab.id === switchTab }" @click="popularGet(tab.id)">{{ tab.name }}</div>
                    <RouterLink :to="ROUTES.catalog + '/all'" class="recomend_product_tabs_item">весь каталог</RouterLink>
                </div>
            </div>
            <div class="recomend_product_tabs_blocks">
                <div class="recomend_product_tabs_block active">
                    <div class="products_list row">
                        <ProductCart v-for="productItem in popular?.items" @key="productItem.id" :product="productItem">
                            <template v-slot:button-icons>
                                <ProductButtonsDefault :product="productItem" />
                            </template>
                        </ProductCart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>