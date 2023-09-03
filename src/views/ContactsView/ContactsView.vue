<script setup>
import { defineAsyncComponent } from 'vue';
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import LayoutShort from '@/layout/LayoutShort/LayoutShort.vue';
import { ROUTES } from '@/app/router/helper';
const ContactsMap = defineAsyncComponent(() => import('@/components/ContactsMap/ContactsMap.vue'));
const Partners = defineAsyncComponent(() => import('@/components/Partners/Partners.vue'));
const bradscubs = [
    {
        id: 1,
        link: ROUTES.main,
        name: 'Главная страница'
    },
    {
        id: 2,
        name: 'Контакты',
        active: true
    }
];
</script>

<template>
    <LayoutShort>
        <div class="text_page contacts">
            <div class="container">
                <div class="text_page_top">
                    <h1>Контакты</h1>
                    <Bradscubs :bradscubs="bradscubs"></Bradscubs>
                </div>
                <div class="company_name">ООО "БУДЕМ СТРОИТЬ"</div>
                <p>Компания ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "БУДЕМ СТРОИТЬ" зарегистрирована 10.03.2022 г. Краткое
                    наименование: БУДЕМ СТРОИТЬ. При регистрации организации присвоен ОГРН 1227700126818, ИНН 9705166442 и
                    КПП 770501001. Юридический адрес: Г.Москва МУНИЦИПАЛЬНЫЙ ОКРУГ ЗАМОСКВОРЕЧЬЕ УЛ БОЛЬШАЯ СЕРПУХОВСКАЯ 40
                    СТРОЕНИЕ 2 ОФИС 105.</p>
                <div class="map">
                    <ContactsMap></ContactsMap>
                </div>
            </div>
        </div>
        <Partners></Partners>
    </LayoutShort>
</template>