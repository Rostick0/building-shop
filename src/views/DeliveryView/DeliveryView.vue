<script setup>
import { defineAsyncComponent } from 'vue';
import { ROUTES } from '@/app/router/helper';
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import LayoutShort from '@/layout/LayoutShort/LayoutShort.vue';
const DeliveryMap = defineAsyncComponent(() => import('@/components/DeliveryMap/DeliveryMap.vue'));
const Advantages = defineAsyncComponent(() => import('@/components/Advantages/Advantages.vue'));
const bradscubs = [
    {
        id: 1,
        link: ROUTES.main,
        name: 'Главная страница'
    },
    {
        id: 2,
        name: 'Доставка',
        active: true
    }
];
</script>

<template>
    <LayoutShort>
        <div class="text_page delivery">
            <div class="container">
                <div class="text_page_top">
                    <h1>Доставка</h1>
                    <Bradscubs :bradscubs="bradscubs"></Bradscubs>
                </div>
                <div class="row">
                    <div class="col-5 col-sm-12">
                        <h2>Условия доставки</h2>
                        <br>
                        <ul>
                            <li>В зону "Рублевка" доставки осуществляются транспортом 1,5 -3 тонн.</li>
                            <li>Существует ограничение по длине и объёму груза в каждой тоннажности.</li>
                            <li>Клиент обязан организовать безопасный и беспрепятственный подъезд к месту разгрузки.
                            </li>
                            <li>Цена за 1 км cвыше 120 км от МКАД рассчитывается индивидуально логистом.</li>
                            <li>Второе и последующие места выгрузки до 2 км:- для 0,5 – 1,5 тонн – 500 р.- для 3 – 13
                                тонн + 8,5 (манипуляторы) – 970 р.- для 20 тонн – 1500 р.Свыше 2 км, как доставка
                                согласно тоннажности.</li>
                            <li>Отказ от доставки во время погрузки- оплачивается одним часом простоя согласно
                                тоннажности.</li>
                            <li>Отказ от доставки во время её исполнения- оплачивается как 1,5 доставки от тоннажности.
                                Данный пункт не распространяется на доставку тоннажностью 0,5 тонн.</li>
                            <li>Возврат материала- оплачивается как 0,5 от веса забираемого груза, согласно тарифной
                                сетке. Данный пункт не распространяется на доставку тоннажностью 0,5 тонн.</li>
                            <li>Данная сетка действительна для всего холдинга.</li>
                            <li>В случае формы оплаты наличными при получении и стоимости доставки более 5 000 р.,
                                доставка оплачивается до осуществления доставки. </li>
                        </ul>
                    </div>
                    <div class="col-7 col-sm-12">
                        <DeliveryMap></DeliveryMap>
                    </div>
                </div>
            </div>
        </div>
        <Advantages></Advantages>
    </LayoutShort>
</template>