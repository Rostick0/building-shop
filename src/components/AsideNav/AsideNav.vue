<script setup>
import { ROUTES } from '@/app/router/helper';
import { BACKEND_URL_API_PRICELIST } from '@/app/stores/helper';
import AsideNavItem from './components/AsideNavItem/AsideNavItem.vue';
import { onMounted } from 'vue';
import { useCategoriesStore } from '@/app/stores/modules/category';
import { storeToRefs } from 'pinia';

const categoriesStore = useCategoriesStore();
const { categoryAsyncGet } = categoriesStore;
const { categories } = storeToRefs(categoriesStore);

onMounted(() => {
    if (!categories.value?.length) categoryAsyncGet()
});

</script>

<template>
    <div class="col-3 header_menu_wrap">
        <div class="header_menu">
            <RouterLink :to="ROUTES.main" class="logo"></RouterLink>
            <ul class="header_menu_nav">
                <AsideNavItem v-for="(category, index) in categories" @key="category.id" :index="index"
                    :category="category" />
                <li class="header_menu_item">
                    <div class="header_menu_item_wrap">
                        <a :href="BACKEND_URL_API_PRICELIST" download>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31.4314 18.7215C30.5456 17.8038 28.5772 17.3449 25.9199 17.3449C24.3452 17.3449 22.6721 17.5285 20.7037 17.8038C18.6195 15.9835 16.8881 13.8413 15.5859 11.4715C16.5701 8.71835 17.259 6.05696 17.259 4.03797C17.259 2.47785 16.6685 0 14.3064 0C13.6175 0 13.027 0.367089 12.6333 0.917722C11.6491 2.56962 12.0428 6.24051 13.9128 10.0949C12.5468 13.778 10.9023 17.3662 8.9918 20.8323C3.77559 22.8513 0.330919 25.0538 0.0356613 26.7975C-0.161177 27.6234 0.429338 29 2.49614 29C5.54713 29 8.89338 24.8703 11.4523 20.6487C14.4062 19.7016 17.4331 18.9653 20.5068 18.4462C24.2468 21.4747 27.4946 21.9335 29.0693 21.9335C32.2187 21.9335 32.514 19.8228 31.4314 18.7215ZM13.1254 1.19304C13.9128 0.0917722 15.6843 0.458861 15.6843 2.66139C15.6843 4.12975 15.1922 6.51582 14.208 9.26899C12.4365 5.41456 12.4365 2.38608 13.1254 1.19304ZM0.626176 26.8892C0.921433 25.4209 3.87401 23.4019 8.4997 21.6582C5.94081 25.6962 3.38191 28.2658 1.80721 28.2658C0.823014 28.2658 0.527757 27.4399 0.626176 26.8892ZM20.0147 17.8956C17.2416 18.3774 14.511 19.0523 11.846 19.9146C13.3026 17.4629 14.4897 14.8801 15.389 12.2057C16.6826 14.2672 18.2355 16.1774 20.0147 17.8956ZM21.2942 18.2627C24.4436 17.8038 27.1009 17.8956 28.2819 18.0791C31.1361 18.6297 30.1519 21.8418 27.0025 21.1076C24.7389 20.6487 22.8689 19.4557 21.2942 18.2627Z"
                                    fill="#FF781F"></path>
                            </svg>
                            <span>скачать прай-лист</span>
                        </a>
                    </div>
                </li>
            </ul>
            <div class="promobanner">
                <img src="/images/banner_to_catalog.png">
            </div>
        </div>
    </div>
</template>