import { defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";

export const useComparisonsStore = defineStore('comparison', () => {
    const comparisons = ref([]);
    const сomparisonСount = computed(() => comparisons?.length);

    const comparisonAdd = comparison => {
        comparisons.value = [...comparisons.value, comparison];
    };

    const comparisonUpdate = (comparison, id) => {
        const index = comparisons.value?.findIndex(comparison => comparison.id === id);

        if (index === -1) return;

        comparisons.value[index] = comparison;
    };

    const comparisonRemove = id => {
        const index = comparisons.value?.findIndex(comparison => comparison.id === id);
        const oldComparisons = [...comparisons.value];
        oldComparisons.splice(index, 1);

        comparisons.value = oldComparisons;
    }

    watchEffect(comparisons, () => {
        const comparisonsJson = JSON.stringify(comparisons.value);
        localStorage.setItem('comparisons', comparisonsJson);
    });

    return { comparisons, сomparisonСount, comparisonAdd, comparisonUpdate, comparisonRemove };
});