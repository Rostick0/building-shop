<script setup>
import { ref } from 'vue';
import { ROUTES } from '@/app/router/helper';
const active = ref(false);

const activeToggle = () => active.value = !active.value
</script>

<template>
    <li class="header_menu_item" @click="activeToggle" :class="{ active }">
        <div class="header_menu_item_wrap">
            <RouterLink :to="ROUTES.catalog + '/new'">
                <svg width="33" height="39" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M33.0002 18.9279V10.7011H31.4538V6.80416V6.1856V0H30.2167V6.1856H3.4021V10.7011H2.72168V11.9382H3.4021V16.4537H9.64955V38.3507H10.8867V16.4537H31.4538V11.9382H31.7631V17.8764L16.2991 20.4434V26.7836H14.5052V38.3507H19.3609V26.8146H17.5362V21.4949L33.0002 18.9279ZM30.2167 15.2166H4.63921V7.42272H30.2167V15.2166ZM18.0929 37.1136H15.7114V28.0517H18.0929V37.1136Z"
                        fill="#FF781F"></path>
                    <g opacity="0.3">
                        <path d="M6.55646 21.6497H5.31934V22.8868H6.55646V21.6497Z" fill="#FF781F"></path>
                    </g>
                    <g opacity="0.3">
                        <path d="M26.9695 0H25.7324V1.23712H26.9695V0Z" fill="#FF781F"></path>
                    </g>
                    <g opacity="0.3">
                        <path d="M20.783 3.09277H19.5459V4.32989H20.783V3.09277Z" fill="#FF781F"></path>
                    </g>
                    <g opacity="0.3">
                        <path d="M8.41192 0H7.1748V1.23712H8.41192V0Z" fill="#FF781F"></path>
                    </g>
                    <g opacity="0.3">
                        <path d="M1.29864 3.09277H0.0615234V4.32989H1.29864V3.09277Z" fill="#FF781F"></path>
                    </g>
                    <g opacity="0.3">
                        <path d="M6.55646 32.165H5.31934V38.3506H6.55646V32.165Z" fill="#FF781F"></path>
                    </g>
                    <g opacity="0.3">
                        <path d="M1.23712 34.3918H0V35.629H1.23712V34.3918Z" fill="#FF781F"></path>
                    </g>
                    <g opacity="0.3">
                        <path d="M1.23712 18.928H0V25.1136H1.23712V18.928Z" fill="#FF781F"></path>
                    </g>
                </svg>
                <span>Отделочные материалы</span>
            </RouterLink>
        </div>
    </li>
</template>