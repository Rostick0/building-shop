<script setup>
import { useComparisonsStore } from '@/app/stores/modules/comparison';
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
const ProductCompare = defineAsyncComponent(() => import('@/components/ProductCompare/ProductCompare.vue'));
const comparisonsStore = useComparisonsStore();
const { comparisons, comparisonCount } = storeToRefs(comparisonsStore);
</script>

<template>
    <div v-if="comparisonCount > 0" class="compare_list row">
        <ProductCompare v-for="comparison in comparisons" @key="comparison?.data?.id" :product="comparison">
        </ProductCompare>
    </div>
</template>