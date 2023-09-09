<script setup>
import { ROUTES } from '@/app/router/helper';

const links = [
    {
        id: 1,
        link: ROUTES.catalog + '/new',
        name: 'Стройматериалы'
    },
    {
        id: 2,
        link: ROUTES.catalog + '/new',
        name: 'Отделочные материалы'
    },
    {
        id: 3,
        link: ROUTES.catalog + '/new',
        name: 'Инструменты'
    },
    {
        id: 4,
        link: ROUTES.catalog + '/new',
        name: 'Крепежные системы'
    },
    {
        id: 5,
        link: ROUTES.catalog + '/new',
        name: 'Сантехническая группа'
    },
    {
        id: 6,
        link: ROUTES.catalog + '/new',
        name: 'Отопление'
    },
    {
        id: 7,
        link: ROUTES.catalog + '/new',
        name: 'Электрика и вентиляция'
    },
    {
        id: 8,
        link: ROUTES.catalog + '/new',
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