import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useCartsStore = defineStore('cart', () => {
    const carts = ref(
        JSON.parse(localStorage.getItem('carts')) ?? []
    );

    const cartCount = computed(() => carts?.value?.length ?? 0);

    const checkCart = (id) => carts?.value?.findIndex(item => item.id === id) !== -1;

    const cartAdd = cart => {
        carts.value = [...carts.value, cart];
    };

    const cartUpdate = (cart, id) => {
        const index = carts.value?.findIndex(cart => cart.id === id);

        if (index === -1) return;

        carts.value[index] = cart;
    };

    const cartRemove = id => {
        const index = carts.value?.findIndex(cart => cart.id === id);
        const oldCarts = [...carts.value];
        oldCarts.splice(index, 1);

        carts.value = oldCarts;
    }

    const cartClear = () => {
        carts.value = [];
    }

    watch(carts, () => {
        const cartsJson = JSON.stringify(carts.value);
        localStorage.setItem('carts', cartsJson);
    });

    return { carts, cartCount, checkCart, cartAdd, cartUpdate, cartRemove, cartClear };
});