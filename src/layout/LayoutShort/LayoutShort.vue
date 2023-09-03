<script setup>
import { defineAsyncComponent } from 'vue';

import HeaderShort from '@/layout/HeaderShort/HeaderShort.vue';
const FooterDefault = defineAsyncComponent(() => import('@/layout/FooterDefault/FooterDefault.vue'));
</script>

<template>
    <div class="wrapper__inner">
        <HeaderShort />
        <div class="wrapper__content">
            <slot></slot>
        </div>
        <FooterDefault />
    </div>
</template>