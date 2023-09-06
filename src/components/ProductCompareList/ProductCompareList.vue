<script setup>
import { useComparisonsStore } from '@/app/stores/comparison';
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
const ProductCompare = defineAsyncComponent(() => import('@/components/ProductCompare/ProductCompare.vue'));
const comparisonsStore = useComparisonsStore();
const { comparisons, сomparisonСount } = storeToRefs(comparisonsStore);
</script>

<template>
    <div v-if="сomparisonСount > 0" class="compare_list row">
        <ProductCompare v-for="comparison in comparisons" @key="comparison?.data?.id" :product="comparison"></ProductCompare>
    </div>
</template>