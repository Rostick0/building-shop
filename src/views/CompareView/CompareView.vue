<script setup>
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductCompareList from '@/components/ProductCompareList/ProductCompareList.vue';
import LayoutShort from '@/layout/LayoutShort/LayoutShort.vue';
import { ROUTES } from '@/app/router/helper';
const bradscubs = [
    {
        id: 1,
        link: ROUTES.main,
        name: 'Главная страница'
    },
    {
        id: 2,
        name: 'ИЗБРАННЫЕ ТОВАРЫ',
        active: true
    }
];
</script>

<template>
    <LayoutShort>
        <div class="text_page compare">
            <div class="container">
                <div class="text_page_top">
                    <h1>ТОВАРЫ <b>ДЛЯ СРАВНЕНИЯ</b></h1>
                    <Bradscubs :bradscubs="bradscubs"></Bradscubs>
                </div>
                <ProductCompareList></ProductCompareList>
            </div>
        </div>
    </LayoutShort>
</template>