<script setup>
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductsCart from '@/components/ProductsCart/ProductsCart.vue';
import AsideNav from '@/components/AsideNav/AsideNav.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import ClearCart from '@/components/ClearCart/ClearCart.vue';
import LayoutDefault from '@/layout/LayoutDefault/LayoutDefault.vue';
import { ref } from 'vue';
import Modal from '@/components/Modal/Modal.vue';
import MainbannerForm from '@/components/MainbannerForm/MainbannerForm.vue';
import { ROUTES } from '@/app/router/helper';
import { useCartsStore } from '@/app/stores/modules/cart'
import { storeToRefs } from 'pinia';

const cartStore = useCartsStore();
const { carts } = storeToRefs(cartStore);
const bradscubs = [
    {
        id: 1,
        link: ROUTES.main,
        name: 'Главная страница'
    },
    {
        id: 2,
        name: 'Корзина',
        active: true
    }
];

const activeModal = ref(false);
</script>

<template>
    <LayoutDefault>
        <div class="text_page fav catalog">
            <div class="container row">
                <AsideNav />
                <div class="col-9 col-sm-12">
                    <Bradscubs :bradscubs="bradscubs"></Bradscubs>
                    <div class="text_page_top">
                        <h1>Корзина <b>товаров</b></h1>
                    </div>
                    <template v-if="carts.length > 0">
                        <div class="catalog_list row">
                            <ProductsCart />
                        </div>
                        <div class="fav_info_text row">
                            <div class="col-8 col-sm-12 row">
                                <ClearCart></ClearCart>
                            </div>
                            <div class="col-4 col-sm-12" @click="(() => activeModal = true)">
                                <div class="btn">ОФОРМИТЬ ЗАКАЗ</div>
                            </div>
                        </div>
                        <Pagination />
                    </template>
                    <template v-else>
                        <h1 style="text-align: center; color: gray;">Корзина пуста</h1>
                    </template>
                </div>
            </div>
        </div>
        <Modal v-if="activeModal" :outClick="(() => activeModal = false)">
            <MainbannerForm :closeModal="(() => activeModal = false)" />
        </Modal>
    </LayoutDefault>
</template>