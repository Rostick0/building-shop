<script setup>
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductsFavorite from '@/components/ProductsFavorite/ProductsFavorite.vue';
import AsideNav from '@/components/AsideNav/AsideNav.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import ClearFavorite from '@/components/ClearFavorite/ClearFavorite.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';

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
    <LayoutDefault>
        <div class="text_page fav catalog">
            <div class="container row">
                <AsideNav />
                <div class="col-9 col-sm-12">
                    <div class="text_page_top">
                        <h1>Избранные <b>товары</b> / ваши заказанные <b>товары</b></h1>
                        <Bradscubs :bradscubs="bradscubs"></Bradscubs>
                    </div>
                    <div class="catalog_list row">
                        <ProductsFavorite />
                    </div>
                    <div class="fav_info_text row">
                        <div class="col-8 col-sm-12 row">
                            <ClearFavorite></ClearFavorite>
                            <p>При нажатии на кнопку ОТПРАВИТЬ ЗАЯВКАУ, будет сформирован весь нужный список указанный в
                                избранном</p>
                        </div>
                        <div class="col-4 col-sm-12">
                            <div class="btn">ОТПРАВИТЬ ЗАЯВКУ</div>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    </LayoutDefault>
</template>