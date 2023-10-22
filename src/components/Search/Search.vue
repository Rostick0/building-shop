<script setup>
import { ref, onMounted } from 'vue';
import { useForm } from 'vee-validate';
import { useSearchStore } from '@/app/stores/modules/search';
import { getQuery } from '@/app/helpers/url';
import { storeToRefs } from 'pinia';
import { throttle } from '@/app/helpers/optimization';

const searchStore = useSearchStore();
const { searchAsyncGet } = searchStore;
const { search } = storeToRefs(searchStore);

const { handleSubmit, defineInputBinds } = useForm();

const SearchName = defineInputBinds('SearchName');

const onSubmit = throttle(handleSubmit(values => {
    if (values.SearchName.length < 3) {
        isActive.value = false
        return;
    }

    isActive.value = true

    console.log(values);

    searchAsyncGet(
        getQuery(values)
    );
}), 200)

const isActive = ref(false);
</script>

<template>
    <div class="search_panel_text">Доставка в день заказа </div>
    <div v-click-outside="(() => isActive = false)">
        <form class="search" @input="onSubmit" @submit.prevent>
            <input type="text" name="SearchName" v-bind="SearchName" placeholder="Поиск стройматериалов">
            <button type="submit">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.35542 9.33629L12 12M10.7778 5.88889C10.7778 8.58896 8.58896 10.7778 5.88889 10.7778C3.18883 10.7778 1 8.58896 1 5.88889C1 3.18883 3.18883 1 5.88889 1C8.58896 1 10.7778 3.18883 10.7778 5.88889Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </form>
        <div class="search-block" v-if="isActive && search?.length">
            <div v-for="product in search" @key="product.id" class="seach-block__item">
                <div class="search-block__info">
                    <div class="search-block__title">{{ product.name }}</div>
                    <div class="search-block__price">{{ product.priceLess100000 }} ₽</div>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.search-block {
    background-color: white;
    padding: 10px;
    position: absolute;
    right: 250px;
    top: 50px;
    z-index: 1;
}

.search-block__price {
    font-size: 14px;
    font-weight: 700;
}
</style>