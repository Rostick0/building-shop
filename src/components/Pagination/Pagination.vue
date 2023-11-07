<script setup>
// import Paginate from 'vuejs-paginate'
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    currentPage: Number,
    totalPages: Number
});

const getPaginations = (currentPage, totalPages) => {
    const result = [];

    if (currentPage < 4) {
        for (let i = 2; i < 6; i++) {
            if (i === totalPages) continue;

            result.push(i);
        }
    } else if (totalPages < currentPage + 4) {
        for (let i = (totalPages - 4); i < totalPages; i++) {
            if (i === 1) continue;

            result.push(i);
        }
    } else {
        const number = currentPage - 1;

        for (let i = number; i < number + 4; i++) {
            if (i === 1) continue;
            if (i === totalPages) continue;

            result.push(i);
        }
    }

    return result;
};

const emits = defineEmits(['more', 'page']);

const prevClick = () => {
    if (props.currentPage < 2) return;

    emits('page', props.currentPage - 1);
};

const nextClick = () => {
    if (props.currentPage >= props.totalPages) return;

    emits('page', props.currentPage + 1);
};
</script>

<template>
    <div class="navigation row">
        <div class="col-8 col-sm-12">
            <div @click="emits('more')" class="nav_add">
                <span>ПОКАЗАТЬ ЕЩЕ</span>
            </div>
        </div>
        <div class="page_nav_wrap col-4 col-sm-12 row">
            <div class="page_nav">
                <span v-if="currentPage == 1">1</span>
                <a @click.prevent="emits('page', 1)" v-else>1</a>

                <a v-if="currentPage - 4 > 1" @click.prevent>...</a>

                <template v-for="paginate in getPaginations(currentPage, totalPages)">
                    <a v-if="paginate != currentPage" @click.prevent="emits('page', paginate)" href="">{{ paginate }}</a>
                    <span v-else>{{ paginate }}</span>
                </template>

                <a v-if="currentPage + 4 < totalPages" @click.prevent>...</a>

                <span v-if="currentPage == totalPages">{{ totalPages }}</span>
                <a @click.prevent="emits('page', totalPages)" v-else>{{ totalPages }}</a>
            </div>
            <div class="page_nav_str">
                <div @click="prevClick" class="prev"></div>
                <div @click="nextClick" class="next"></div>
            </div>
        </div>
    </div>
</template>