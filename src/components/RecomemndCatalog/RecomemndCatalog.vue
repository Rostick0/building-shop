<script setup>
import { ROUTES } from '@/app/router/helper';

const links = [
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'Стройматериалы'
    },
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'Отделочные материалы'
    },
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'Инструменты'
    },
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'Крепежные системы'
    },
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'Сантехническая группа'
    },
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'Отопление'
    },
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'Электрика и вентиляция'
    },
    {
        id: 1,
        link: ROUTES.catalog,
        name: 'весь каталог'
    }
];
</script>

<template>
    <div class="recomend_product_catalog">
        <div class="container">
            <div class="recomend_title row">
                <h2>Вам может <b>понадобиться</b></h2>
                <div class="recomend_product_tabs_panel row">
                    <RouterLink v-for="link in links" @key="link.id" :to="link.link + '/' + link.id"
                        class="recomend_product_tabs_item" :class="{ 'active': false }">{{ link.name }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>