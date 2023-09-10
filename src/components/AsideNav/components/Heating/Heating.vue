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
                <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.75 36.4286H0V37.6429H29.75C32.0875 37.6429 34 35.7304 34 33.3929C34 31.0554 32.0875 29.1429 29.75 29.1429H23.375V28.5357H31.5714V27.0179C33.1196 25.7429 34 23.8911 34 21.8571V8.19643C34 4.70536 31.3286 1.85179 27.9286 1.54821V0H5.46429V4.25H27.9286V2.7625C30.6607 3.06607 32.7857 5.37321 32.7857 8.19643V21.8571C32.7857 23.1321 32.3607 24.3464 31.5714 25.2875V8.80357H1.82143V28.5357H10.0179V29.1429H7.58929V30.3571H10.0179V32.1786H23.375V30.3571H29.75C31.4196 30.3571 32.7857 31.7232 32.7857 33.3929C32.7857 35.0625 31.4196 36.4286 29.75 36.4286ZM26.7143 3.03571H6.67857V1.21429H26.7143V3.03571ZM3.03571 10.0179H30.3571V27.3214H3.03571V10.0179ZM11.2321 30.9643V28.5357H22.1607V30.9643H11.2321Z"
                        fill="#FF781F"></path>
                    <path
                        d="M3.94629 26.4106H29.4463V10.9285H3.94629V26.4106ZM16.0891 25.1963H11.232V12.1428H16.0891V25.1963ZM17.3034 12.1428H22.1606V25.1963H17.3034V12.1428ZM28.232 25.1963H23.3749V12.1428H28.232V25.1963ZM5.16057 12.1428H10.0177V25.1963H5.16057V12.1428Z"
                        fill="#FF781F"></path>
                </svg>
                <span>Отопление</span>
            </RouterLink>
        </div>
    </li>
</template>