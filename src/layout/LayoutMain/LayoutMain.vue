<script setup>
import { defineAsyncComponent } from 'vue';

import HeaderMain from '@/layout/HeaderMain/HeaderMain.vue';
const FooterDefault = defineAsyncComponent(() => import('@/layout/FooterDefault/FooterDefault.vue'));
</script>

<template>
    <div class="wrapper__inner">
        <HeaderMain />
        <div class="wrapper__content">
            <slot></slot>
        </div>
        <FooterDefault />
    </div>
</template>