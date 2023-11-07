<script setup>
import AsideNav from '@/components/AsideNav/AsideNav.vue';
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductsCatalog from '@/components/ProductsCatalog/ProductsCatalog.vue';
import ProductsViewed from '@/components/ProductsViewed/ProductsViewed.vue';
import Partners from '@/components/Partners/Partners.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import { ROUTES } from '@/app/router/helper';

const categories = [
    {
        id: 1,
        name: 'Геотекстиль'
    },
    {
        id: 2,
        name: 'Пленки, мембраны, ленты, клеи'
    },
    {
        id: 3,
        name: 'Утеплители универсальные'
    },
    {
        id: 4,
        name: 'Пароизоляция для дома'
    },
    {
        id: 5,
        name: 'Гидроизоляция для дома'
    },
    {
        id: 6,
        name: 'Техническая изоляция'
    },
    {
        id: 7,
        name: 'Утеплители для дома'
    }
];

const bradscubs = [
    {
        id: 1,
        link: ROUTES.main,
        name: 'Главная страница'
    },
    {
        id: 2,
        link: ROUTES.catalog + '/a',
        name: 'Каталог стройматериалов'
    },
    {
        id: 3,
        link: ROUTES.catalog + '/a',
        name: 'Стройматериалы'
    },
    {
        id: 4,
        name: 'Изоляционные материалы',
        active: true
    }
];
</script>

<template>
    <LayoutDefault>
        <div class="text_page fav catalog">
            <div class="container row">
                <AsideNav />
                <div class="col-9 col-sm-12">
                    <div class="text_page_top">
                        <h1>Изоляционные <b>материалы</b></h1>
                        <Bradscubs :bradscubs="bradscubs" />
                    </div>
                    <div class="subsection row">
                        <!-- categories -->
                        <RouterLink v-for="category in categories" @key="category.id" class="subsection_item"
                            :to="ROUTES.catalog + '/' + category.id">{{ category.name }}</RouterLink>
                    </div>
                    <ProductsCatalog />
                </div>
            </div>
        </div>
        <div class="catalog_b_inf">
            <div class="container row">
                <div class="col-3 col-sm-12"></div>
                <div class="col-9 col-sm-12">
                    <ProductsViewed />
                </div>
            </div>
        </div>
        <Partners></Partners>
    </LayoutDefault>
</template>