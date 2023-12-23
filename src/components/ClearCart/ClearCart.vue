<script setup>
import { useCartsStore } from '@/app/stores/modules/cart';
const { cartClear } = useCartsStore()
</script>

<template>
    <div class="clear_fav row" @click="cartClear">
        <span>Очистить корзину</span>
        <div class="icon"></div>
    </div>
</template>