<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
</script>

<template>
    <div class="mainbanner_products_list">
        <div class="title_top row">
            <h2>последние <b>поступления</b></h2>
            <a href="">все товары</a>
        </div>
        <div class="mainbanner_products_list_wrap">
            <Swiper class="swiper js_lastproduct_slider" direction="vertical" loop slidesPerView="auto" grabCursor
                autoHeight spaceBetween="0" :centeredSlides="false" :speed="1000" :autoplay="{
                    delay: 3500,
                    disableOnInteraction: false,
                }" :modules="[Autoplay]">
                <SwiperSlide>
                    <div class="mainbanner_products_list_item">
                        <a href="" class="name">Дюбели Driva для гипсокартона</a>
                        <div class="desc">Всё очень просто - половину всех купленных
                            стройматериалов Вы получаете по себестоимости, то есть по оптовой
                            цене!</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="mainbanner_products_list_item">
                        <a href="" class="name">Керамогранит - прочно и выгодно!</a>
                        <div class="desc">Всё очень просто - половину всех купленных
                            стройматериалов Вы получаете по себестоимости, то есть по оптовой
                            цене!</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="mainbanner_products_list_item">
                        <a href="" class="name">Инструмент для захвата</a>
                        <div class="desc">Всё очень просто - половину всех купленных
                            стройматериалов Вы получаете по себестоимости, то есть по оптовой
                            цене!</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="mainbanner_products_list_item">
                        <a href="" class="name">Дюбели Driva для гипсокартона</a>
                        <div class="desc">Всё очень просто - половину всех купленных
                            стройматериалов Вы получаете по себестоимости, то есть по оптовой
                            цене!</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="mainbanner_products_list_item">
                        <a href="" class="name">Керамогранит - прочно и выгодно!</a>
                        <div class="desc">Всё очень просто - половину всех купленных
                            стройматериалов Вы получаете по себестоимости, то есть по оптовой
                            цене!</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="mainbanner_products_list_item">
                        <a href="" class="name">Инструмент для захвата</a>
                        <div class="desc">Всё очень просто - половину всех купленных
                            стройматериалов Вы получаете по себестоимости, то есть по оптовой
                            цене!</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>