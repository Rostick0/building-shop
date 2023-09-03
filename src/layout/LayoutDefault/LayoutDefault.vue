<script setup>
import HeaderDefault from '@/layout/HeaderDefault/HeaderDefault.vue';
const FooterDefault = () => import('@/layout/FooterDefault/FooterDefault.vue');
</script>

<template>
    <div class="wrapper__inner">
        <HeaderDefault />
        <div class="wrapper__content">
            <v-slot></v-slot>
        </div>
        <FooterDefault />
    </div>
</template>