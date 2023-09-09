<script setup>
import { useMenuMobileStore } from '@/app/stores/modules/menuMobile';

const mobileStore = useMenuMobileStore();
const { menuMobileSetTrue } = mobileStore;
</script>

<template>
    <div class="open_menu" @click="menuMobileSetTrue"></div>
</template>