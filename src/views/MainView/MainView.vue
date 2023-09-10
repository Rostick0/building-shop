<script setup>
import { defineAsyncComponent } from 'vue';
import LayoutMain from '@/layout/LayoutMain/LayoutMain.vue';
const ProductsNew = defineAsyncComponent(() => import('@/components/ProductsNew/ProductsNew.vue'));
const ProductsRecommendation = defineAsyncComponent(() => import('@/components/ProductsRecommendation/ProductsRecommendation.vue'));
const Advantages = defineAsyncComponent(() => import('@/components/Advantages/Advantages.vue'));
const HowWork = defineAsyncComponent(() => import('@/components/HowWork/HowWork.vue'));
const ProductsPopular = defineAsyncComponent(() => import('@/components/ProductsPopular/ProductsPopular.vue'));
const Partners = defineAsyncComponent(() => import('@/components/Partners/Partners.vue'));
const ContactsBlock = defineAsyncComponent(() => import('@/components/ContactsBlock/ContactsBlock.vue'));
</script>

<template>
    <LayoutMain>
        <ProductsNew />
        <ProductsRecommendation />
        <Advantages />
        <HowWork />
        <ProductsPopular />
        <Partners />
        <ContactsBlock />
    </LayoutMain>
</template>