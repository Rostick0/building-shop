import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useComparisonsStore = defineStore('comparison', () => {
    const comparisons = ref(
        JSON.parse(localStorage.getItem('comparisons')) ?? []
    );
    const comparisonCount = computed(() => comparisons?.value?.length ?? 0);

    const checkComparison = (id) => comparisons?.value?.findIndex(item => item.data.id === id) !== -1;

    const comparisonAdd = comparison => {
        const newComparsion = {
            data: comparison
        };

        comparisons.value = [...comparisons.value, newComparsion];
    };

    const comparisonRemove = id => {
        const index = comparisons.value?.findIndex(comparison => comparison.data.id === id);
        const oldComparisons = [...comparisons.value];
        oldComparisons.splice(index, 1);

        comparisons.value = oldComparisons;
    }

    watch(comparisons, () => {
        const comparisonsJson = JSON.stringify(comparisons.value);
        localStorage.setItem('comparisons', comparisonsJson);
    });

    return { comparisons, comparisonCount, checkComparison, comparisonAdd, comparisonRemove };
});