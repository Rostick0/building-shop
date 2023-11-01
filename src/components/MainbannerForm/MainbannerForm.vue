<script setup>
import { defineProps } from 'vue';
import MainbannerFormOnly from '@/components/MainbannerFormOnly/MainbannerFormOnly.vue';

const props = defineProps({
    closeModal: {
        type: Function
    }
});
</script>

<template>
    <div class="mainbanner_form">
        <div class="logo"></div>
        <MainbannerFormOnly :="props" />
    </div>
</template>