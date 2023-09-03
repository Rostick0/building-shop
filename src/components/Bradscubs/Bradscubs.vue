<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    bradscubs: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div class="bradscubs row">
        <div v-for="bradscub in props?.bradscubs" @key="bradscub.id" class="bradscubs_item">
            <RouterLink v-if="!bradscub.active" :to="bradscub.link">{{ bradscub.name }}</RouterLink>
            <span v-else>доставкa</span>
        </div>
    </div>
</template>