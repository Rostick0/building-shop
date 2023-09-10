import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL } from "../helper";

export const useLastReceiptStore = defineStore('lastReceipt', () => {
    const lastReceipts = ref([
        {
            id: 1,
            link: '1',
            name: 'Дюбели Driva для гипсокартона',
            description: `Всё очень просто - половину всех купленных
                стройматериалов Вы получаете по себестоимости, то есть по оптовой
                цене!`
        },
        {
            id: 2,
            link: '1',
            name: 'Керамогранит - прочно и выгодно!',
            description: `Всё очень просто - половину всех купленных
                стройматериалов Вы получаете по себестоимости, то есть по оптовой
                цене!`
        },
        {
            id: 3,
            link: '1',
            name: 'Инструмент для захвата',
            description: `Всё очень просто - половину всех купленных
                    стройматериалов Вы получаете по себестоимости, то есть по оптовой
                    цене!`
        },
        {
            id: 4,
            link: '1',
            name: 'Дюбели Driva для гипсокартона',
            description: `Всё очень просто - половину всех купленных
                    стройматериалов Вы получаете по себестоимости, то есть по оптовой
                    цене!`
        },
        {
            id: 5,
            link: '1',
            name: 'Керамогранит - прочно и выгодно!',
            description: `Всё очень просто - половину всех купленных
                    стройматериалов Вы получаете по себестоимости, то есть по оптовой
                    цене!`
        },
        {
            id: 6,
            link: '1',
            name: 'Инструмент для захвата',
            description: `Всё очень просто - половину всех купленных
                стройматериалов Вы получаете по себестоимости, то есть по оптовой
                цене!`
        }
    ]);

    const lastReceiptAsyncGet = async () => {
        return;

        return axios.get(BACKEND_URL).
            then(res => res.json())
            .then(res => lastReceipts.value = res);
    }

    return { lastReceipts, lastReceiptAsyncGet };
});