<script setup>
import { defineProps, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { ROUTES } from '@/app/router/helper';
import { useFavoritesStore } from '@/app/stores/modules/favorite';

const { favoriteAdd } = useFavoritesStore();

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const { product } = props;

const countCart = ref(product?.countCart ?? 1);
const countCartIncrement = () => countCart.value++;
const countCartDecrement = () => countCart.value--;

const cartAdd = () => {
    favoriteAdd({ ...product, countCart });
}

watch(countCart, () => {
    if (countCart.value < 1) return countCart.value = 1;

    if (product?.countCart <= countCart.value) return product?.count;
})
</script>

<template>
    <div class="product_cart">
        <div class="icons">
            <slot name="button-icons"></slot>
        </div>
        <div class="photo">
            <img decoding="async" loading="lazy" :src="product?.image" :alt="product?.name">
        </div>
        <RouterLink :to="ROUTES.product + '/' + product?.id" class="name">{{ product?.name }}</RouterLink>
        <div class="status">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.00033 16.6667C4.39783 16.6667 0.666992 12.9358 0.666992 8.33333C0.666992 3.73083 4.39783 0 9.00033 0C13.6028 0 17.3337 3.73083 17.3337 8.33333C17.3337 12.9358 13.6028 16.6667 9.00033 16.6667ZM9.00033 15C10.7684 15 12.4641 14.2976 13.7144 13.0474C14.9646 11.7971 15.667 10.1014 15.667 8.33333C15.667 6.56522 14.9646 4.86953 13.7144 3.61929C12.4641 2.36905 10.7684 1.66667 9.00033 1.66667C7.23222 1.66667 5.53652 2.36905 4.28628 3.61929C3.03604 4.86953 2.33366 6.56522 2.33366 8.33333C2.33366 10.1014 3.03604 11.7971 4.28628 13.0474C5.53652 14.2976 7.23222 15 9.00033 15ZM8.16949 11.6667L4.63366 8.13083L5.81199 6.9525L8.16949 9.31L12.8828 4.59583L14.062 5.77417L8.16949 11.6667Z"
                    fill="#09B01A"></path>
            </svg> В наличии: <span>{{ product?.count }} уп.</span>
        </div>
        <div class="prices">
            <div class="price">{{ product?.price * countCart }} ₽</div>
            <div class="price_desc">Цена за штуку</div>
        </div>
        <div class="btns">
            <button class="btn" @click="cartAdd">заказать</button>
            <div class="count">
                <input type="button" value="-" @click="countCartDecrement">
                <input type="number" step="1" min="1" max="10" id="num_count" name="quantity" v-model="countCart" title="Qty">
                <input type="button" value="+" @click="countCartIncrement">
            </div>
        </div>
    </div>
</template>