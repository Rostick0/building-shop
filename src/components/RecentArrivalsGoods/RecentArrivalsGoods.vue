<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { onMounted } from 'vue';
import { useLastReceiptStore } from '@/app/stores/modules/lastReceipt';
import { storeToRefs } from 'pinia';
import { ROUTES } from '@/app/router/helper';

const lastReceiptStore = useLastReceiptStore();
const { lastReceiptAsyncGet } = lastReceiptStore;
const { lastReceipts } = storeToRefs(lastReceiptStore);

onMounted(() => {
    lastReceiptAsyncGet();
});
</script>

<template>
    <div class="mainbanner_products_list">
        <div class="title_top row">
            <h2>последние <b>поступления</b></h2>
            <RouterLink :to="ROUTES.catalog + '/all'">все товары</RouterLink>
        </div>
        <div class="mainbanner_products_list_wrap">
            <Swiper class="swiper js_lastproduct_slider" direction="vertical" loop slidesPerView="auto" grabCursor
                autoHeight spaceBetween="0" :centeredSlides="false" :speed="1000" :autoplay="{
                    delay: 3500,
                    disableOnInteraction: false,
                }" :modules="[Autoplay]">
                <SwiperSlide v-for="receipt in lastReceipts" @key="receipt.id">
                    <div class="mainbanner_products_list_item">
                        <RouterLink :to="`${ROUTES.product}/${receipt.link}`" class="name">{{ receipt.name }}</RouterLink>
                        <div class="desc">{{ receipt.description }}</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>