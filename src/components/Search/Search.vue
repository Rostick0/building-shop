<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { useSearchStore } from '@/app/stores/modules/search';
import { getQuery } from '@/app/helpers/url';
import { storeToRefs } from 'pinia';

const searchStore = useSearchStore();
const { searchAsyncGet } = searchStore;
const { search } = storeToRefs(searchStore);

const { handleSubmit, defineInputBinds } = useForm();

const title = defineInputBinds('title');

const onSubmit = handleSubmit(values => {
    console.log(values)

    if (values.title.length < 3) return;

    searchAsyncGet(
        getQuery(values)
    );
});

const search_block = ref(null);

console.log(search_block.value)
</script>

<template>
    <div class="search_panel_text">Доставка в день заказа </div>
    <div ref="search_block">
        <form class="search" @input="onSubmit" @submit.prevent>
            <input type="text" name="title" v-bind="title" placeholder="Поиск стройматериалов">
            <button type="submit">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.35542 9.33629L12 12M10.7778 5.88889C10.7778 8.58896 8.58896 10.7778 5.88889 10.7778C3.18883 10.7778 1 8.58896 1 5.88889C1 3.18883 3.18883 1 5.88889 1C8.58896 1 10.7778 3.18883 10.7778 5.88889Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </form>

        <div class="search-block" v-if="search?.length">
            <div v-for="product in search" @key="product.id" class="seach-block__item">
                <div class="search-block__info">
                    <div class="search-block__title">{{ product.name }}</div>
                    <div class="search-block__price">{{ product.price }} ₽</div>
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