import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useComparisonsStore = defineStore('comparison', () => {
    const comparisons = ref([
        {
            data: {
                id: 1,
                image: '/images/catalog/product/Group 9042642 — копия.png',
                name: 'Пила торцовочная электрическая КМ MS-1401/210 (680152) 1400 Вт',
                price: 7400,
                count: 100,
                weight: 0.009,
                voltage: 67
            },
            info: [
                {
                    name: 'Код',
                    value: 'С-000283647'
                },
                {
                    name: 'Артикул производителя',
                    value: '014091'
                },
                {
                    name: 'Страна происхождения',
                    value: 'КИТАЙ'
                },
                {
                    name: 'Диапазон регулирования сварочного тока в режиме MMA, А',
                    value: '10-200'
                },
                {
                    name: 'Бренд',
                    value: 'FUBAG'
                },
                {
                    name: 'Вес, кг',
                    value: 0.009
                },
                {
                    name: 'Напряжение холостого хода, В',
                    value: 67
                },
                // code: '',
                // article: '014091',
                // country: 'КИТАЙ',
                // weldingСurrent: {
                //     min: 10,
                //     max: 200
                // },
                // brand: 'FUBAG'
            ]
        }
    ]);
    const сomparisonСount = computed(() => comparisons?.value?.length);

    const comparisonAdd = comparison => {
        const newComparsion = {
            data: comparison
        };

        comparisons.value = [...comparisons.value, newComparsion];
    };

    // const comparisonUpdate = (comparison, id) => {
    //     const index = comparisons.value?.findIndex(comparison => comparison.data.id === id);

    //     if (index === -1) return;

    //     comparisons.value[index] = comparison;
    // };

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

    return { comparisons, сomparisonСount, comparisonAdd, comparisonRemove };
});