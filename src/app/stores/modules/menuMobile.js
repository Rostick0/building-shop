import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuMobileStore = defineStore('menuMobile', () => {
    const menuMobile = ref(false);

    const menuMobileSetTrue = () => {
        menuMobile.value = true;
    };

    const menuMobileSetFalse = () => {
        menuMobile.value = false;
    };

    return { menuMobile, menuMobileSetTrue, menuMobileSetFalse, };
});