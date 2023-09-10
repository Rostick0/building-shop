<script setup>
import { ref } from 'vue';
import { ROUTES } from '@/app/router/helper';
const active = ref(true);

const activeToggle = () => active.value = !active.value
</script>

<template>
    <li class="header_menu_item" @click="activeToggle" :class="{ active }">
        <div class="header_menu_item_wrap">
            <RouterLink :to="ROUTES.catalog + '/new'">
                <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7368 34.055H0V29.6501H10.7368V34.055ZM1.10121 32.9538H9.63563V30.7514H1.10121V32.9538Z"
                        fill="#FF781F"></path>
                    <path d="M22.024 34.055H11.2871V29.6501H22.024V34.055ZM12.3883 32.9538H20.9227V30.7514H12.3883V32.9538Z"
                        fill="#FF781F"></path>
                    <path d="M33.312 34.055H22.5752V29.6501H33.312V34.055ZM23.6764 32.9538H32.2108V30.7514H23.6764V32.9538Z"
                        fill="#FF781F"></path>
                    <path
                        d="M16.2427 29.0997H5.50586V24.6948H16.2427V29.0997ZM6.60707 27.9985H15.1415V25.796H6.60707V27.9985Z"
                        fill="#FF781F"></path>
                    <path
                        d="M27.5308 29.0997H16.7939V24.6948H27.5308V29.0997ZM17.8952 27.9985H26.4296V25.796H17.8952V27.9985Z"
                        fill="#FF781F"></path>
                    <path d="M33.3118 29.0997H28.0811V24.6948H33.3118V25.796H29.1823V27.9985H33.3118V29.0997Z"
                        fill="#FF781F"></path>
                    <path d="M4.95547 29.0997H0V27.9985H3.85425V25.796H0V24.6948H4.95547V29.0997Z" fill="#FF781F"></path>
                    <path d="M10.7368 24.1441H0V19.7393H10.7368V24.1441ZM1.10121 23.0429H9.63563V20.8405H1.10121V23.0429Z"
                        fill="#FF781F"></path>
                    <path
                        d="M22.024 24.1441H11.2871V19.7393H22.024V24.1441ZM12.3883 23.0429H20.9227V20.8405H12.3883V23.0429Z"
                        fill="#FF781F"></path>
                    <path
                        d="M33.312 24.1441H22.5752V19.7393H33.312V24.1441ZM23.6764 23.0429H32.2108V20.8405H23.6764V23.0429Z"
                        fill="#FF781F"></path>
                    <path
                        d="M16.2427 19.1888H5.50586V14.7839H16.2427V19.1888ZM6.60707 18.0876H15.1415V15.8852H6.60707V18.0876Z"
                        fill="#FF781F"></path>
                    <path
                        d="M27.5308 19.1888H16.7939V14.7839H27.5308V19.1888ZM17.8952 18.0876H26.4296V15.8852H17.8952V18.0876Z"
                        fill="#FF781F"></path>
                    <path d="M33.3118 19.1888H28.0811V14.7839H33.3118V15.8852H29.1823V18.0876H33.3118V19.1888Z"
                        fill="#FF781F"></path>
                    <path d="M4.95547 19.1888H0V18.0876H3.85425V15.8852H0V14.7839H4.95547V19.1888Z" fill="#FF781F"></path>
                    <path d="M10.7368 14.2332H0V9.82837H10.7368V14.2332ZM1.10121 13.132H9.63563V10.9296H1.10121V13.132Z"
                        fill="#FF781F"></path>
                    <path d="M22.024 14.2332H11.2871V9.82837H22.024V14.2332ZM12.3883 13.132H20.9227V10.9296H12.3883V13.132Z"
                        fill="#FF781F"></path>
                    <g opacity="0.3">
                        <path d="M33.3112 13.1321H23.125V14.2333H33.3112V13.1321Z" fill="#FF781F"></path>
                    </g>
                    <path d="M4.95547 9.27766H0V8.17645H3.85425V5.97402H0V4.8728H4.95547V9.27766Z" fill="#FF781F"></path>
                    <path
                        d="M23.9243 7.79109L22.4102 3.66154L32.4863 0L34.0004 4.12955L23.9243 7.79109ZM23.8417 4.29474L24.5851 6.35951L32.5964 3.4413L31.8531 1.37652L23.8417 4.29474Z"
                        fill="#FF781F"></path>
                </svg>
                <span>Стройматериалы</span>
            </RouterLink>
        </div>
        <ul>
            <li class="active">
                <RouterLink :to="ROUTES.catalog + '/new'">Изоляционные материалы</RouterLink>
                <ul>
                    <li class="header_menu_item_sub">
                        <RouterLink :to="ROUTES.catalog + '/new'">Геотекстиль</RouterLink>
                        <div class="wrap_menu">
                            <div class="wrap_menu_sub">
                                <RouterLink :to="ROUTES.catalog + '/new'">
                                    <div class="wrap_menu_sub_title">
                                        <span>ИЗОЛЯЦИОННЫЕ МАТЕРИАЛЫ</span>
                                    </div>
                                </RouterLink>
                                <ul>
                                    <li>
                                        <RouterLink :to="ROUTES.catalog + '/new'">Геотекстиль</RouterLink>
                                        <div class="wrap_menu_sub2">
                                            <div class="wrap_menu_title">
                                                <span>Пленки, мембраны, ленты, клеи</span>
                                            </div>
                                            <ul>
                                                <li>
                                                    <RouterLink :to="ROUTES.catalog + '/new'">Клеи изоляционные
                                                    </RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink :to="ROUTES.catalog + '/new'">Ленты изоляционные
                                                    </RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink :to="ROUTES.catalog + '/new'">Мембраны
                                                        изоляционные</RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink :to="ROUTES.catalog + '/new'">Ножи изоляционные
                                                    </RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink :to="ROUTES.catalog + '/new'">Пленки
                                                        изоляционные</RouterLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <RouterLink :to="ROUTES.catalog + '/new'">Гидроизоляция для дома
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink :to="ROUTES.catalog + '/new'">Пароизоляция для дома
                                        </RouterLink>
                                    </li>

                                    <li>
                                        <RouterLink :to="ROUTES.catalog + '/new'">Пленки, мембраны, ленты, клеи
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink :to="ROUTES.catalog + '/new'">Техническая изоляция
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink :to="ROUTES.catalog + '/new'">КУтеплители для дома
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink :to="ROUTES.catalog + '/new'">Утеплители универсальные
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="header_menu_item_sub">
                        <RouterLink :to="ROUTES.catalog + '/new'">Гидроизоляция для дома</RouterLink>
                    </li>
                    <li class="header_menu_item_sub">
                        <RouterLink :to="ROUTES.catalog + '/new'">Пароизоляция для дома</RouterLink>
                    </li>
                    <li class="header_menu_item_sub">
                        <RouterLink :to="ROUTES.catalog + '/new'">Пленки, мембраны, ленты, клеи</RouterLink>
                    </li>
                    <li class="header_menu_item_sub">
                        <RouterLink :to="ROUTES.catalog + '/new'">Техническая изоляция</RouterLink>
                    </li>
                    <li class="header_menu_item_sub">
                        <RouterLink :to="ROUTES.catalog + '/new'">Утеплители для дома</RouterLink>
                    </li>
                    <li class="header_menu_item_sub">
                        <RouterLink :to="ROUTES.catalog + '/new'">Утеплители универсальные</RouterLink>
                    </li>
                </ul>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Битумные материалы</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Гипсовые материалы</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Засыпка сухая, керамзит</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Звукоизоляция и теплоизоляция</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Комплектующие для штукатурных фасадов</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Листовые материалы</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Материалы из древесины</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Монтажные материалы</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Общестроительные материалы</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Профили и комплектующие</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Ремонт, защита и гидроизоляция бетона</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Системы утепления фасадов</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Строительные ленты, сетки и серпянки</RouterLink>
            </li>
            <li class="header_menu_item_sub">
                <RouterLink :to="ROUTES.catalog + '/new'">Сухие смеси</RouterLink>
            </li>
        </ul>
    </li>
</template>
