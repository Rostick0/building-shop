<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    outClick: {
        type: Function
    }
});
</script>

<template>
    <div class="modal" @click.prevent='outClick'>
        <div class="modal__inner">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}
</style>