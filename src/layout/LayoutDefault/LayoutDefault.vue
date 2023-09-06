<script setup>
import { defineAsyncComponent } from 'vue';
import HeaderDefault from '@/layout/HeaderDefault/HeaderDefault.vue';
const FooterDefault = defineAsyncComponent(() => import('@/layout/FooterDefault/FooterDefault.vue'));
</script>

<template>
    <div class="wrapper__inner">
        <HeaderDefault />
        <div class="wrapper__content">
            <slot></slot>
        </div>
        <FooterDefault />
    </div>
</template>