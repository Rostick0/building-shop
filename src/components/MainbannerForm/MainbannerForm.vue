<script setup>
import { defineProps } from 'vue';
import MainbannerFormOnly from '@/components/MainbannerFormOnly/MainbannerFormOnly.vue';

const props = defineProps({
    closeModal: {
        type: Function
    },
    isModal : {
        type: Boolean
    }
});
</script>

<template>
    <div class="mainbanner_form" :class="(props.isModal) ? 'modal' : ''">
        <div class="logo"></div>
        <MainbannerFormOnly :="props" />
    </div>
</template>