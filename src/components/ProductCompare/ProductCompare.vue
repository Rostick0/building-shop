<script setup>
import { useComparisonsStore } from '@/app/stores/comparison';
import { useFavoritesStore } from '@/app/stores/favorite';
import { defineAsyncComponent } from 'vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));
const comparisonsStore = useComparisonsStore();

const { comparisonRemove } = comparisonsStore;
const { favoriteAdd } = useFavoritesStore;

const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});

const { product } = props;

</script>

<template>
    <div class="product_cart_compare">
        <ProductCart :product="product?.data">
            <template v-slot:button-icons>
                <div @click="comparisonRemove(product?.data?.id)" class="delcompare">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="31" height="31" fill="#A8A8A8"></rect>
                        <path d="M24.2188 6.78125L6.78125 24.2188" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M24.2188 24.2188L6.78125 6.78125" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div @click="favoriteAdd(product?.data?.id)" class="faw">
                    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.8549 1.56596C21.6581 0.559283 20.1211 0.00605331 18.5279 0.00605331C16.6878 0.00605331 14.9065 0.749976 13.6415 2.04934C13.4142 2.28327 13.201 2.53439 13.0009 2.80712C11.4519 0.711171 8.86363 -0.364244 6.30375 0.111378C4.1795 0.503295 2.50944 1.69013 1.34318 3.63642C-0.30234 6.38427 -0.437013 9.03456 0.945162 11.5141C1.68396 12.8406 2.64248 14.1334 3.87581 15.466C6.13472 17.9073 8.80856 20.2244 12.291 22.7555C12.5134 22.918 12.7517 23 13.0003 23C13.3831 23 13.6415 22.8032 13.7697 22.7068C16.9119 20.4257 19.3801 18.323 21.5382 16.0863C22.7432 14.8379 24.1106 13.3035 25.1106 11.3872C25.5391 10.5684 26.0277 9.46639 25.9988 8.20749C25.9344 5.49844 24.8772 3.2639 22.8549 1.56596ZM23.4738 10.5036C22.5834 12.2076 21.3272 13.6139 20.2149 14.7659C18.2193 16.8347 15.9375 18.7926 12.9971 20.9512C9.79708 18.5974 7.32007 16.4361 5.22636 14.1722C4.09608 12.951 3.22316 11.7774 2.55743 10.5828C1.50348 8.69253 1.62071 6.79559 2.9271 4.61593C3.80602 3.14804 5.05352 2.25556 6.63579 1.96342C6.93894 1.90688 7.24591 1.87916 7.54852 1.87916C9.42413 1.87916 11.0855 2.9324 12.0238 4.76117L12.183 5.06661C12.3466 5.3787 12.6836 5.55609 13.0162 5.5644C13.3646 5.55775 13.6792 5.35542 13.8324 5.03723C14.1617 4.35428 14.521 3.82433 14.9594 3.3731C15.8786 2.43017 17.179 1.88859 18.5279 1.88859C19.6909 1.88859 20.8081 2.28937 21.6745 3.01777C23.2862 4.37091 24.0943 6.08382 24.1461 8.25017C24.1641 9.06782 23.8167 9.84722 23.4738 10.5036Z"
                            fill="#C1C1C1"></path>
                    </svg>
                </div>
            </template>
        </ProductCart>
        <div class="compare_property">
            <div v-for="info in product?.info" @key="info.name" class="compare_property_item">
                <i>{{ info.name }}</i>
                <span>{{ info.value }}</span>
            </div>
        </div>
    </div>
</template>