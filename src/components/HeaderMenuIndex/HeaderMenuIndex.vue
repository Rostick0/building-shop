<script setup>
  import {
    onMounted
  } from 'vue';
  import {
    ROUTES
  } from '@/app/router/helper';
  import {
    useCategoriesStore
  } from '@/app/stores/modules/category';
  import {
    storeToRefs
  } from 'pinia';
  import {
    categoryIcons
  } from '@/app/utils/category-icons';
  const categoriesStore = useCategoriesStore();
  const {
    categoryAsyncGet
  } = categoriesStore;
  const {
    categories
  } = storeToRefs(categoriesStore);
  onMounted(() => {
    if (!categories.value?.length) categoryAsyncGet()
  });
</script>
<template>
  <div class="header_menu header_menu_index">
    <a aria-current="page" href="/" class="router-link-active router-link-exact-active logo"></a>
    <ul class="header_menu_nav">
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/1" class="">
            <span>
              <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7368 34.055H0V29.6501H10.7368V34.055ZM1.10121 32.9538H9.63563V30.7514H1.10121V32.9538Z" fill="#FF781F"></path>
                <path d="M22.024 34.055H11.2871V29.6501H22.024V34.055ZM12.3883 32.9538H20.9227V30.7514H12.3883V32.9538Z" fill="#FF781F"></path>
                <path d="M33.312 34.055H22.5752V29.6501H33.312V34.055ZM23.6764 32.9538H32.2108V30.7514H23.6764V32.9538Z" fill="#FF781F"></path>
                <path d="M16.2427 29.0997H5.50586V24.6948H16.2427V29.0997ZM6.60707 27.9985H15.1415V25.796H6.60707V27.9985Z" fill="#FF781F"></path>
                <path d="M27.5308 29.0997H16.7939V24.6948H27.5308V29.0997ZM17.8952 27.9985H26.4296V25.796H17.8952V27.9985Z" fill="#FF781F"></path>
                <path d="M33.3118 29.0997H28.0811V24.6948H33.3118V25.796H29.1823V27.9985H33.3118V29.0997Z" fill="#FF781F"></path>
                <path d="M4.95547 29.0997H0V27.9985H3.85425V25.796H0V24.6948H4.95547V29.0997Z" fill="#FF781F"></path>
                <path d="M10.7368 24.1441H0V19.7393H10.7368V24.1441ZM1.10121 23.0429H9.63563V20.8405H1.10121V23.0429Z" fill="#FF781F"></path>
                <path d="M22.024 24.1441H11.2871V19.7393H22.024V24.1441ZM12.3883 23.0429H20.9227V20.8405H12.3883V23.0429Z" fill="#FF781F"></path>
                <path d="M33.312 24.1441H22.5752V19.7393H33.312V24.1441ZM23.6764 23.0429H32.2108V20.8405H23.6764V23.0429Z" fill="#FF781F"></path>
                <path d="M16.2427 19.1888H5.50586V14.7839H16.2427V19.1888ZM6.60707 18.0876H15.1415V15.8852H6.60707V18.0876Z" fill="#FF781F"></path>
                <path d="M27.5308 19.1888H16.7939V14.7839H27.5308V19.1888ZM17.8952 18.0876H26.4296V15.8852H17.8952V18.0876Z" fill="#FF781F"></path>
                <path d="M33.3118 19.1888H28.0811V14.7839H33.3118V15.8852H29.1823V18.0876H33.3118V19.1888Z" fill="#FF781F"></path>
                <path d="M4.95547 19.1888H0V18.0876H3.85425V15.8852H0V14.7839H4.95547V19.1888Z" fill="#FF781F"></path>
                <path d="M10.7368 14.2332H0V9.82837H10.7368V14.2332ZM1.10121 13.132H9.63563V10.9296H1.10121V13.132Z" fill="#FF781F"></path>
                <path d="M22.024 14.2332H11.2871V9.82837H22.024V14.2332ZM12.3883 13.132H20.9227V10.9296H12.3883V13.132Z" fill="#FF781F"></path>
                <g opacity="0.3">
                  <path d="M33.3112 13.1321H23.125V14.2333H33.3112V13.1321Z" fill="#FF781F"></path>
                </g>
                <path d="M4.95547 9.27766H0V8.17645H3.85425V5.97402H0V4.8728H4.95547V9.27766Z" fill="#FF781F"></path>
                <path d="M23.9243 7.79109L22.4102 3.66154L32.4863 0L34.0004 4.12955L23.9243 7.79109ZM23.8417 4.29474L24.5851 6.35951L32.5964 3.4413L31.8531 1.37652L23.8417 4.29474Z" fill="#FF781F"></path>
              </svg>
            </span>
            <span>СТРОЙМАТЕРИАЛЫ</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>СТРОЙМАТЕРИАЛЫ</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/2" class="">Битумные материалы</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/3" class="">Ремонт, защита и гидроизоляция бетона</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Ремонт, защита и гидроизоляция бетона</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/4" class="">Составы гидроизоляционные</a>
                      </li>
                      <li>
                        <a href="/catalog/5" class="">Составы подливочные</a>
                      </li>
                      <li>
                        <a href="/catalog/6" class="">Составы ремонтные</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/7" class="">Гипсовые материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Гипсовые материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/8" class="">Гипсоволокно</a>
                      </li>
                      <li>
                        <a href="/catalog/9" class="">Гипсокартон</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/13" class="">Материалы из древесины</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Материалы из древесины</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/14" class="">Ориентированно-стружечная плита (OSB)</a>
                      </li>
                      <li>
                        <a href="/catalog/15" class="">Древесно-волокнистая плита (ДВП)</a>
                      </li>
                      <li>
                        <a href="/catalog/16" class="">Фанера</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/17" class="">Изоляционные материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Изоляционные материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/18" class="">Геотекстиль</a>
                      </li>
                      <li>
                        <a href="/catalog/21" class="">Гидроизоляция для дома</a>
                      </li>
                      <li>
                        <a href="/catalog/22" class="">Пароизоляция для дома</a>
                      </li>
                      <li>
                        <a href="/catalog/23" class="">Пленки, мембраны, ленты, клеи</a>
                      </li>
                      <li>
                        <a href="/catalog/29" class="">Техническая изоляция</a>
                      </li>
                      <li>
                        <a href="/catalog/33" class="">Утеплители для дома</a>
                      </li>
                      <li>
                        <a href="/catalog/40" class="">Утеплители универсальные</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/41" class="">Засыпка сухая, керамзит</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/42" class="">Комплектующие для штукатурных фасадов</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Комплектующие для штукатурных фасадов</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/43" class="">Крепеж для цокольного профиля</a>
                      </li>
                      <li>
                        <a href="/catalog/44" class="">Профили ПВХ для систем фасадной теплоизоляции</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/45" class="">Строительные ленты, сетки и серпянки</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Строительные ленты, сетки и серпянки</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/46" class="">Ленты клейкие</a>
                      </li>
                      <li>
                        <a href="/catalog/52" class="">Строительные, малярные и клейкие ленты</a>
                      </li>
                      <li>
                        <a href="/catalog/61" class="">Серпянка (сетка самоклеящаяся)</a>
                      </li>
                      <li>
                        <a href="/catalog/62" class="">Сетки для штукатурки</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/73" class="">Общестроительные материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Общестроительные материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/74" class="">Металлопрокат</a>
                      </li>
                      <li>
                        <a href="/catalog/75" class="">Пиломатериалы</a>
                      </li>
                      <li>
                        <a href="/catalog/84" class="">Плиты пазогребневые</a>
                      </li>
                      <li>
                        <a href="/catalog/85" class="">Блоки и плиты</a>
                      </li>
                      <li>
                        <a href="/catalog/87" class="">Кирпичи</a>
                      </li>
                      <li>
                        <a href="/catalog/88" class="">Железобетонные изделия (ЖБИ)</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/91" class="">Монтажные материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Монтажные материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/92" class="">Напыляемый утеплитель</a>
                      </li>
                      <li>
                        <a href="/catalog/93" class="">Клей-пена для гипсокартона</a>
                      </li>
                      <li>
                        <a href="/catalog/94" class="">Уплотнители и ленты для изоляции</a>
                      </li>
                      <li>
                        <a href="/catalog/96" class="">Герметики</a>
                      </li>
                      <li>
                        <a href="/catalog/102" class="">Строительные клеи</a>
                      </li>
                      <li>
                        <a href="/catalog/123" class="">Клей для наружной теплоизоляции</a>
                      </li>
                      <li>
                        <a href="/catalog/124" class="">Клеи-герметики</a>
                      </li>
                      <li>
                        <a href="/catalog/125" class="">Мастики, праймеры</a>
                      </li>
                      <li>
                        <a href="/catalog/128" class="">Очистители герметика</a>
                      </li>
                      <li>
                        <a href="/catalog/129" class="">Очиститель монтажной пены</a>
                      </li>
                      <li>
                        <a href="/catalog/130" class="">Пены монтажные</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/139" class="">Листовые материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Листовые материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/140" class="">Аквапанель Knauf</a>
                      </li>
                      <li>
                        <a href="/catalog/141" class="">Цементно-стружечная плита (ЦСП)</a>
                      </li>
                      <li>
                        <a href="/catalog/142" class="">Лист стекломагниевый (СМЛ)</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/143" class="">Профили и комплектующие</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Профили и комплектующие</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/144" class="">Профили Праймет М</a>
                      </li>
                      <li>
                        <a href="/catalog/145" class="">Комплектующие для вентилируемого фасада</a>
                      </li>
                      <li>
                        <a href="/catalog/148" class="">Люк для гипсокартона</a>
                      </li>
                      <li>
                        <a href="/catalog/149" class="">Комплектующие для профиля</a>
                      </li>
                      <li>
                        <a href="/catalog/153" class="">Профиль для гипсокартона</a>
                      </li>
                      <li>
                        <a href="/catalog/162" class="">Профиль маячковый</a>
                      </li>
                      <li>
                        <a href="/catalog/163" class="">Профиль углозащитный</a>
                      </li>
                      <li>
                        <a href="/catalog/166" class="">Профиль арочный Кнауф</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/167" class="">Сухие смеси</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Сухие смеси</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/168" class="">Глина, мел, известь, гипс</a>
                      </li>
                      <li>
                        <a href="/catalog/169" class="">Грунтовки, пропитки, очистители</a>
                      </li>
                      <li>
                        <a href="/catalog/176" class="">Клеевые составы</a>
                      </li>
                      <li>
                        <a href="/catalog/181" class="">Вяжущие и наполнители</a>
                      </li>
                      <li>
                        <a href="/catalog/184" class="">Гидроизоляция</a>
                      </li>
                      <li>
                        <a href="/catalog/189" class="">Затирки для плитки</a>
                      </li>
                      <li>
                        <a href="/catalog/194" class="">Растворы кладочные и расшивки для кирпича</a>
                      </li>
                      <li>
                        <a href="/catalog/198" class="">Смеси для устройства полов</a>
                      </li>
                      <li>
                        <a href="/catalog/202" class="">Цемент и смеси общестроительные</a>
                      </li>
                      <li>
                        <a href="/catalog/209" class="">Шпатлевки</a>
                      </li>
                      <li>
                        <a href="/catalog/215" class="">Штукатурки и обрызги</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/219" class="">Звукоизоляция и теплоизоляция</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Звукоизоляция и теплоизоляция</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/220" class="">Утеплители из минеральной ваты</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/222" class="">Системы утепления фасадов</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Системы утепления фасадов</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/223" class="">Составы армировочные и клеевые</a>
                      </li>
                      <li>
                        <a href="/catalog/224" class="">Средства для очистки и защиты фасадов</a>
                      </li>
                      <li>
                        <a href="/catalog/225" class="">Штукатурки декоративные акриловые</a>
                      </li>
                      <li>
                        <a href="/catalog/226" class="">Штукатурки декоративные минеральные</a>
                      </li>
                      <li>
                        <a href="/catalog/227" class="">Штукатурки декоративные силикатно-силиконовые</a>
                      </li>
                      <li>
                        <a href="/catalog/228" class="">Штукатурки декоративные силиконовые</a>
                      </li>
                      <li>
                        <a href="/catalog/229" class="">Краски и грунтовки для фасадов</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/230" class="">
            <span>
              <svg width="33" height="39" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.0002 18.9279V10.7011H31.4538V6.80416V6.1856V0H30.2167V6.1856H3.4021V10.7011H2.72168V11.9382H3.4021V16.4537H9.64955V38.3507H10.8867V16.4537H31.4538V11.9382H31.7631V17.8764L16.2991 20.4434V26.7836H14.5052V38.3507H19.3609V26.8146H17.5362V21.4949L33.0002 18.9279ZM30.2167 15.2166H4.63921V7.42272H30.2167V15.2166ZM18.0929 37.1136H15.7114V28.0517H18.0929V37.1136Z" fill="#FF781F"></path>
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
            </span>
            <span>ОТДЕЛОЧНЫЕ МАТЕРИАЛЫ</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>ОТДЕЛОЧНЫЕ МАТЕРИАЛЫ</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/231" class="">Декоративно-отделочные материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Декоративно-отделочные материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/232" class="">Панели МДФ</a>
                      </li>
                      <li>
                        <a href="/catalog/239" class="">Пленки самоклеящиеся</a>
                      </li>
                      <li>
                        <a href="/catalog/240" class="">Панели ПВХ, вагонка</a>
                      </li>
                      <li>
                        <a href="/catalog/268" class="">Подоконники</a>
                      </li>
                      <li>
                        <a href="/catalog/269" class="">Плинтус напольный и потолочный</a>
                      </li>
                      <li>
                        <a href="/catalog/284" class="">Сайдинг</a>
                      </li>
                      <li>
                        <a href="/catalog/291" class="">Фурнитура к плитке</a>
                      </li>
                      <li>
                        <a href="/catalog/292" class="">Профиль угловой металлический</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/293" class="">Двери, окна</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Двери, окна</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/294" class="">Комплектующие к окнам</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/295" class="">Керамическая плитка</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Керамическая плитка</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/296" class="">Плитка Cersanit</a>
                      </li>
                      <li>
                        <a href="/catalog/297" class="">Плитка Kerama Marazzi</a>
                      </li>
                      <li>
                        <a href="/catalog/328" class="">Плитка НЗКМ</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/362" class="">Керамогранит</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Керамогранит</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/363" class="">Керамогранит Cersanit</a>
                      </li>
                      <li>
                        <a href="/catalog/389" class="">Керамогранит Kerranova</a>
                      </li>
                      <li>
                        <a href="/catalog/390" class="">Керамогранит Unitile</a>
                      </li>
                      <li>
                        <a href="/catalog/391" class="">Керамогранит ZERDE</a>
                      </li>
                      <li>
                        <a href="/catalog/392" class="">Керамогранит Estima</a>
                      </li>
                      <li>
                        <a href="/catalog/432" class="">Керамогранит Coliseum</a>
                      </li>
                      <li>
                        <a href="/catalog/453" class="">Керамогранит Kerama Marazzi</a>
                      </li>
                      <li>
                        <a href="/catalog/473" class="">Керамогранит Атем</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/474" class="">Лакокрасочные материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Лакокрасочные материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/475" class="">Противогололедные реагенты</a>
                      </li>
                      <li>
                        <a href="/catalog/477" class="">Фибра</a>
                      </li>
                      <li>
                        <a href="/catalog/478" class="">Противоморозные и пластифицирующие добавки</a>
                      </li>
                      <li>
                        <a href="/catalog/486" class="">Антисептики</a>
                      </li>
                      <li>
                        <a href="/catalog/547" class="">Удаление загрязнений, цементного налёта</a>
                      </li>
                      <li>
                        <a href="/catalog/548" class="">Краски аэрозольные</a>
                      </li>
                      <li>
                        <a href="/catalog/564" class="">Грунтовки</a>
                      </li>
                      <li>
                        <a href="/catalog/568" class="">Краски кузнечные</a>
                      </li>
                      <li>
                        <a href="/catalog/569" class="">Декоративные материалы</a>
                      </li>
                      <li>
                        <a href="/catalog/570" class="">Колеровочные пасты и красители</a>
                      </li>
                      <li>
                        <a href="/catalog/571" class="">Краски для садовых деревьев</a>
                      </li>
                      <li>
                        <a href="/catalog/572" class="">Краски водно-дисперсионные</a>
                      </li>
                      <li>
                        <a href="/catalog/599" class="">Краски для дорожной разметки</a>
                      </li>
                      <li>
                        <a href="/catalog/600" class="">Краски огнезащитные по металлу и дереву</a>
                      </li>
                      <li>
                        <a href="/catalog/601" class="">Краски резиновые</a>
                      </li>
                      <li>
                        <a href="/catalog/603" class="">Лаки</a>
                      </li>
                      <li>
                        <a href="/catalog/616" class="">Растворители (ацетон, олифа, уайт-спирит)</a>
                      </li>
                      <li>
                        <a href="/catalog/628" class="">Краски уретановые</a>
                      </li>
                      <li>
                        <a href="/catalog/630" class="">Сухие смеси мелкой фасовки</a>
                      </li>
                      <li>
                        <a href="/catalog/634" class="">Эмали</a>
                      </li>
                      <li>
                        <a href="/catalog/670" class="">Краски, грунты, шпатлевки для OSB</a>
                      </li>
                      <li>
                        <a href="/catalog/675" class="">Промышленные покрытия Tikkurila (Industrial)</a>
                      </li>
                      <li>
                        <a href="/catalog/685" class="">Масляные краски</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/686" class="">Напольные покрытия</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Напольные покрытия</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/687" class="">Плитка ПВХ</a>
                      </li>
                      <li>
                        <a href="/catalog/691" class="">Подложки</a>
                      </li>
                      <li>
                        <a href="/catalog/699" class="">Ламинат</a>
                      </li>
                      <li>
                        <a href="/catalog/713" class="">Линолеум</a>
                      </li>
                      <li>
                        <a href="/catalog/714" class="">Пороги</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/715" class="">Обои</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Обои</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/716" class="">Обои бумажные</a>
                      </li>
                      <li>
                        <a href="/catalog/719" class="">Стеклохолст малярный</a>
                      </li>
                      <li>
                        <a href="/catalog/720" class="">Обои под покраску</a>
                      </li>
                      <li>
                        <a href="/catalog/725" class="">Клей обойный</a>
                      </li>
                      <li>
                        <a href="/catalog/726" class="">Обои виниловые</a>
                      </li>
                      <li>
                        <a href="/catalog/727" class="">Флизелин малярный</a>
                      </li>
                      <li>
                        <a href="/catalog/728" class="">Стеклообои</a>
                      </li>
                      <li>
                        <a href="/catalog/729" class="">Фотообои</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/730" class="">Подвесные потолки</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Подвесные потолки</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/731" class="">Профили Armstrong DGS</a>
                      </li>
                      <li>
                        <a href="/catalog/732" class="">Подвесные потолки Грильято</a>
                      </li>
                      <li>
                        <a href="/catalog/739" class="">Каркасы для подвесных потолков</a>
                      </li>
                      <li>
                        <a href="/catalog/746" class="">Кассетные потолки</a>
                      </li>
                      <li>
                        <a href="/catalog/752" class="">Крепеж подвесных потолков</a>
                      </li>
                      <li>
                        <a href="/catalog/753" class="">Потолочные панели и плиты</a>
                      </li>
                      <li>
                        <a href="/catalog/761" class="">Реечные подвесные потолки</a>
                      </li>
                      <li>
                        <a href="/catalog/778" class="">Люки металлические</a>
                      </li>
                      <li>
                        <a href="/catalog/779" class="">Профили периметральные (уголки)</a>
                      </li>
                      <li>
                        <a href="/catalog/780" class="">Фасадные рейки, гребенки, уголки</a>
                      </li>
                      <li>
                        <a href="/catalog/784" class="">Потолки (распродажа)</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/2097" class="">Полезные мелочи</a>
                  <!--v-if-->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/785" class="">
            <span>
              <svg width="33" height="22" viewBox="0 0 33 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.65574 7.81728L12.4426 7.84433V1.08203H8.65574V1.10908C7.11393 1.24433 5.89672 2.43449 5.70738 3.94924H0V5.03121H5.70738C5.89672 6.51892 7.11393 7.70908 8.65574 7.81728ZM9.73771 2.164H11.3607V6.76236H9.73771V2.164ZM6.7623 4.32793C6.7623 3.21892 7.60082 2.32629 8.65574 2.19105V6.76236C7.60082 6.62711 6.7623 5.70744 6.7623 4.62547V4.32793Z" fill="#FF781F"></path>
                <path d="M29.2127 1.62305H26.5078V2.70501H29.2127V1.62305Z" fill="#FF781F"></path>
                <path d="M29.2127 3.24585H26.5078V4.32782H29.2127V3.24585Z" fill="#FF781F"></path>
                <path d="M10.9551 10.7115V11.7934H11.6313V20.2328H10.9551V21.3148H16.0944V20.2328H15.4182V11.7934H16.0944V10.7115H14.0657V8.92623H20.828V11.6311H22.1805H22.7215C23.1813 11.6311 23.5329 11.9828 23.5329 12.4426V21.3148H27.0493C28.1043 21.3148 28.9428 20.4762 28.9428 19.4213V8.89918C31.2149 8.68279 33.0002 6.78934 33.0002 4.46311C33.0002 2.00164 30.9985 0 28.537 0H12.9838V8.38525V8.92623V10.7115H10.9551ZM21.91 10.5492V8.92623H22.1805V10.5492H21.91ZM14.0657 1.08197H28.537C30.4034 1.08197 31.9182 2.59672 31.9182 4.46311C31.9182 6.32951 30.4034 7.84426 28.537 7.84426H27.8608V19.4213C27.8608 19.8811 27.5092 20.2328 27.0493 20.2328H24.6149V12.4426C24.6149 11.577 24.0469 10.8738 23.2625 10.6303V8.92623H24.6149V7.84426H23.2625H22.7215H14.0657V1.08197ZM14.3362 20.2328H12.7133V11.7934H14.3362V20.2328Z" fill="#FF781F"></path>
              </svg>
            </span>
            <span>ИНСТРУМЕНТЫ</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>ИНСТРУМЕНТЫ</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/786" class="">Измерительный инструмент</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Измерительный инструмент</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/787" class="">Гидроуровни</a>
                      </li>
                      <li>
                        <a href="/catalog/788" class="">Дальномеры, нивелиры лазерные, курвиметры</a>
                      </li>
                      <li>
                        <a href="/catalog/793" class="">Линейки, метры</a>
                      </li>
                      <li>
                        <a href="/catalog/794" class="">Рулетки геодезические</a>
                      </li>
                      <li>
                        <a href="/catalog/795" class="">Шаблоны профилей</a>
                      </li>
                      <li>
                        <a href="/catalog/796" class="">Рулетки измерительные</a>
                      </li>
                      <li>
                        <a href="/catalog/797" class="">Угольники столярные</a>
                      </li>
                      <li>
                        <a href="/catalog/798" class="">Уровни строительные</a>
                      </li>
                      <li>
                        <a href="/catalog/799" class="">Штангенциркули</a>
                      </li>
                      <li>
                        <a href="/catalog/800" class="">Мультиметры</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/801" class="">Автомобильный инструмент</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Автомобильный инструмент</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/802" class="">Автохимия, защитная сетка</a>
                      </li>
                      <li>
                        <a href="/catalog/803" class="">Домкраты, ключи баллонные</a>
                      </li>
                      <li>
                        <a href="/catalog/804" class="">Ключи свечные, захваты, аварийные знаки</a>
                      </li>
                      <li>
                        <a href="/catalog/805" class="">Приспособления для фиксации груза</a>
                      </li>
                      <li>
                        <a href="/catalog/806" class="">Провода стартовые</a>
                      </li>
                      <li>
                        <a href="/catalog/807" class="">Тросы буксировочные</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/808" class="">Ящики для инструментов</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/809" class="">Строительное оборудование ВПК (VPK)</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Строительное оборудование ВПК (VPK)</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/810" class="">Бухтодержатели</a>
                      </li>
                      <li>
                        <a href="/catalog/811" class="">Вибраторы для бетона</a>
                      </li>
                      <li>
                        <a href="/catalog/812" class="">Дорожная техника</a>
                      </li>
                      <li>
                        <a href="/catalog/813" class="">Затирочные машины</a>
                      </li>
                      <li>
                        <a href="/catalog/814" class="">Виброрейки</a>
                      </li>
                      <li>
                        <a href="/catalog/815" class="">Комплектующие для станков</a>
                      </li>
                      <li>
                        <a href="/catalog/816" class="">Правильно-отрезные станки</a>
                      </li>
                      <li>
                        <a href="/catalog/817" class="">Станки для гибки арматуры</a>
                      </li>
                      <li>
                        <a href="/catalog/818" class="">Станки для резки арматуры</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/819" class="">Малярно-штукатурный инструмент</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Малярно-штукатурный инструмент</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/820" class="">Валики и ручки для валиков</a>
                      </li>
                      <li>
                        <a href="/catalog/842" class="">Ленты малярные</a>
                      </li>
                      <li>
                        <a href="/catalog/843" class="">Ванночки, ведра, тазы строительные</a>
                      </li>
                      <li>
                        <a href="/catalog/847" class="">Гладилки</a>
                      </li>
                      <li>
                        <a href="/catalog/850" class="">Кельмы, мастерки</a>
                      </li>
                      <li>
                        <a href="/catalog/851" class="">Кисти малярные</a>
                      </li>
                      <li>
                        <a href="/catalog/856" class="">Ковши</a>
                      </li>
                      <li>
                        <a href="/catalog/857" class="">Краскораспылители пневматические</a>
                      </li>
                      <li>
                        <a href="/catalog/858" class="">Насадки для строительных миксеров</a>
                      </li>
                      <li>
                        <a href="/catalog/859" class="">Правила</a>
                      </li>
                      <li>
                        <a href="/catalog/860" class="">Терки штукатурные</a>
                      </li>
                      <li>
                        <a href="/catalog/861" class="">Шпатели</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/868" class="">Расходные материалы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Расходные материалы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/869" class="">Лезвия для скребков</a>
                      </li>
                      <li>
                        <a href="/catalog/870" class="">Полотна для сабельной пилы</a>
                      </li>
                      <li>
                        <a href="/catalog/871" class="">Биты</a>
                      </li>
                      <li>
                        <a href="/catalog/879" class="">Запчасти и комплектующие для электроинструмента</a>
                      </li>
                      <li>
                        <a href="/catalog/881" class="">Инструмент для резки и шлифования</a>
                      </li>
                      <li>
                        <a href="/catalog/908" class="">Лезвия сменные сегментированные</a>
                      </li>
                      <li>
                        <a href="/catalog/909" class="">Лезвия сменные трапецевидные</a>
                      </li>
                      <li>
                        <a href="/catalog/910" class="">Обтирочные материалы</a>
                      </li>
                      <li>
                        <a href="/catalog/911" class="">Полотна для ножовок</a>
                      </li>
                      <li>
                        <a href="/catalog/914" class="">Полотна для электролобзика</a>
                      </li>
                      <li>
                        <a href="/catalog/919" class="">Сверла, буры, коронки, ударный инструмент</a>
                      </li>
                      <li>
                        <a href="/catalog/947" class="">Скобы</a>
                      </li>
                      <li>
                        <a href="/catalog/948" class="">Стержни клеевые</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/949" class="">Садово-огородный инструмент</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Садово-огородный инструмент</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/950" class="">Грабли</a>
                      </li>
                      <li>
                        <a href="/catalog/951" class="">Инструмент садовый</a>
                      </li>
                      <li>
                        <a href="/catalog/952" class="">Шланги</a>
                      </li>
                      <li>
                        <a href="/catalog/953" class="">Насосы</a>
                      </li>
                      <li>
                        <a href="/catalog/954" class="">Ведра оцинкованные</a>
                      </li>
                      <li>
                        <a href="/catalog/955" class="">Лопаты</a>
                      </li>
                      <li>
                        <a href="/catalog/958" class="">Снегоуборочный инвентарь</a>
                      </li>
                      <li>
                        <a href="/catalog/959" class="">Черенки</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/960" class="">Сварочное оборудование</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Сварочное оборудование</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/961" class="">Проволока сварочная</a>
                      </li>
                      <li>
                        <a href="/catalog/962" class="">Аргонная сварка (TIG)</a>
                      </li>
                      <li>
                        <a href="/catalog/963" class="">Аппараты для сварки пластиковых труб</a>
                      </li>
                      <li>
                        <a href="/catalog/964" class="">Газосварочное оборудование</a>
                      </li>
                      <li>
                        <a href="/catalog/973" class="">Инверторы (сварочные аппараты)</a>
                      </li>
                      <li>
                        <a href="/catalog/974" class="">Паяльное оборудование</a>
                      </li>
                      <li>
                        <a href="/catalog/978" class="">Полуавтоматы сварочные (Mig-Mag)</a>
                      </li>
                      <li>
                        <a href="/catalog/979" class="">Электроды</a>
                      </li>
                      <li>
                        <a href="/catalog/980" class="">Электросварочные расходники</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/985" class="">Средства защиты труда</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Средства защиты труда</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/986" class="">Дождевики</a>
                      </li>
                      <li>
                        <a href="/catalog/987" class="">Жилеты сигнальные</a>
                      </li>
                      <li>
                        <a href="/catalog/988" class="">Защита зрения, лица, слуха</a>
                      </li>
                      <li>
                        <a href="/catalog/994" class="">Защита органов дыхания</a>
                      </li>
                      <li>
                        <a href="/catalog/996" class="">Защита рук</a>
                      </li>
                      <li>
                        <a href="/catalog/1000" class="">Одежда защитная</a>
                      </li>
                      <li>
                        <a href="/catalog/1002" class="">Пояса страховочные</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1003" class="">Столярно-слесарный инструмент</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Столярно-слесарный инструмент</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1004" class="">Зубила, кернеры</a>
                      </li>
                      <li>
                        <a href="/catalog/1005" class="">Головки торцевые</a>
                      </li>
                      <li>
                        <a href="/catalog/1006" class="">Ключи</a>
                      </li>
                      <li>
                        <a href="/catalog/1014" class="">Ломы, гвоздодеры</a>
                      </li>
                      <li>
                        <a href="/catalog/1015" class="">Молотки, кувалды, киянки</a>
                      </li>
                      <li>
                        <a href="/catalog/1021" class="">Наборы столярно-слесарные</a>
                      </li>
                      <li>
                        <a href="/catalog/1022" class="">Напильники, надфили</a>
                      </li>
                      <li>
                        <a href="/catalog/1023" class="">Отвертки</a>
                      </li>
                      <li>
                        <a href="/catalog/1028" class="">Пилы, ножовки, стусла</a>
                      </li>
                      <li>
                        <a href="/catalog/1032" class="">Резьбонарезной инструмент</a>
                      </li>
                      <li>
                        <a href="/catalog/1037" class="">Рубанки</a>
                      </li>
                      <li>
                        <a href="/catalog/1038" class="">Стамески</a>
                      </li>
                      <li>
                        <a href="/catalog/1039" class="">Струбцины</a>
                      </li>
                      <li>
                        <a href="/catalog/1040" class="">Тиски</a>
                      </li>
                      <li>
                        <a href="/catalog/1041" class="">Топоры, колуны</a>
                      </li>
                      <li>
                        <a href="/catalog/1042" class="">Шарнирно-губцевый инструмент</a>
                      </li>
                      <li>
                        <a href="/catalog/1050" class="">Электромонтажный инструмент</a>
                      </li>
                      <li>
                        <a href="/catalog/1051" class="">Трубогибы</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1052" class="">Строительное оборудование</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Строительное оборудование</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1053" class="">Стропы текстильные</a>
                      </li>
                      <li>
                        <a href="/catalog/1054" class="">Носилки садово-строительные</a>
                      </li>
                      <li>
                        <a href="/catalog/1055" class="">Бетоносмесители</a>
                      </li>
                      <li>
                        <a href="/catalog/1057" class="">Вышки-туры</a>
                      </li>
                      <li>
                        <a href="/catalog/1060" class="">Лестницы</a>
                      </li>
                      <li>
                        <a href="/catalog/1061" class="">Стремянки</a>
                      </li>
                      <li>
                        <a href="/catalog/1062" class="">Тачки строительные, садовые</a>
                      </li>
                      <li>
                        <a href="/catalog/2096" class="">ВИБРАТОРЫ СЕТЕВЫЕ</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1063" class="">Строительно-отделочный инструмент</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Строительно-отделочный инструмент</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1064" class="">Крепежный инструмент</a>
                      </li>
                      <li>
                        <a href="/catalog/1066" class="">Инструмент для работы с арматурой</a>
                      </li>
                      <li>
                        <a href="/catalog/1068" class="">Заклепочники</a>
                      </li>
                      <li>
                        <a href="/catalog/1069" class="">Инструмент для кафеля и стекла</a>
                      </li>
                      <li>
                        <a href="/catalog/1074" class="">Инструмент для работы с гипсокартоном</a>
                      </li>
                      <li>
                        <a href="/catalog/1075" class="">Инструмент для работы с пено-газобетоном</a>
                      </li>
                      <li>
                        <a href="/catalog/1076" class="">Мешки для строительного мусора</a>
                      </li>
                      <li>
                        <a href="/catalog/1077" class="">Ножи, скребки</a>
                      </li>
                      <li>
                        <a href="/catalog/1083" class="">Отвесы, нити, краски разметочные, карандаши малярные, маркеры строительные</a>
                      </li>
                      <li>
                        <a href="/catalog/1087" class="">Пистолеты для герметика</a>
                      </li>
                      <li>
                        <a href="/catalog/1088" class="">Пистолеты для монтажной пены</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1089" class="">Тепловое оборудование</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Тепловое оборудование</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1090" class="">Тепловентиляторы</a>
                      </li>
                      <li>
                        <a href="/catalog/1091" class="">Обогреватели</a>
                      </li>
                      <li>
                        <a href="/catalog/1095" class="">Тепловые завесы</a>
                      </li>
                      <li>
                        <a href="/catalog/1096" class="">Тепловые пушки</a>
                      </li>
                      <li>
                        <a href="/catalog/1100" class="">Камины</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1101" class="">Хозяйственные товары</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Хозяйственные товары</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1102" class="">Ручки для швабр</a>
                      </li>
                      <li>
                        <a href="/catalog/1103" class="">Шпагаты</a>
                      </li>
                      <li>
                        <a href="/catalog/1104" class="">Замки навесные</a>
                      </li>
                      <li>
                        <a href="/catalog/1105" class="">Ножницы бытовые</a>
                      </li>
                      <li>
                        <a href="/catalog/1106" class="">Пакеты и мешки для мусора</a>
                      </li>
                      <li>
                        <a href="/catalog/1107" class="">Пленка защитная</a>
                      </li>
                      <li>
                        <a href="/catalog/1108" class="">Щетки, метлы, веники, совки, швабры для уборки</a>
                      </li>
                      <li>
                        <a href="/catalog/2093" class="">Хранение</a>
                      </li>
                      <li>
                        <a href="/catalog/2109" class="">Елочные украшения</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1109" class="">Электро-бензооборудование</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Электро-бензооборудование</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1110" class="">Швонарезчики и бензорезы</a>
                      </li>
                      <li>
                        <a href="/catalog/1111" class="">Моечные машины высокого давления</a>
                      </li>
                      <li>
                        <a href="/catalog/1112" class="">Бензопилы</a>
                      </li>
                      <li>
                        <a href="/catalog/1113" class="">Генераторы</a>
                      </li>
                      <li>
                        <a href="/catalog/1118" class="">Компрессоры</a>
                      </li>
                      <li>
                        <a href="/catalog/1120" class="">Мотопомпы</a>
                      </li>
                      <li>
                        <a href="/catalog/1121" class="">Снегоуброчные машины</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1122" class="">Электроинструмент</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Электроинструмент</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1123" class="">Плиткорезы электрические</a>
                      </li>
                      <li>
                        <a href="/catalog/1124" class="">МФИ (Много-Функциональный Инструмент)</a>
                      </li>
                      <li>
                        <a href="/catalog/1125" class="">Силовое оборудование</a>
                      </li>
                      <li>
                        <a href="/catalog/1127" class="">Аккумуляторы</a>
                      </li>
                      <li>
                        <a href="/catalog/1128" class="">Садовый инструмент</a>
                      </li>
                      <li>
                        <a href="/catalog/1131" class="">Мини-дрели и граверы</a>
                      </li>
                      <li>
                        <a href="/catalog/1132" class="">Точила</a>
                      </li>
                      <li>
                        <a href="/catalog/1133" class="">Гайковерты</a>
                      </li>
                      <li>
                        <a href="/catalog/1134" class="">Дрели и шуруповерты аккумуляторные</a>
                      </li>
                      <li>
                        <a href="/catalog/1135" class="">Дрели и шуруповерты электрические</a>
                      </li>
                      <li>
                        <a href="/catalog/1136" class="">Дрели ударные электрические</a>
                      </li>
                      <li>
                        <a href="/catalog/1137" class="">Краскопульты</a>
                      </li>
                      <li>
                        <a href="/catalog/1138" class="">Лобзики электрические</a>
                      </li>
                      <li>
                        <a href="/catalog/1139" class="">Машины шлифовальные</a>
                      </li>
                      <li>
                        <a href="/catalog/1140" class="">Миксеры</a>
                      </li>
                      <li>
                        <a href="/catalog/1141" class="">Молотки отбойные</a>
                      </li>
                      <li>
                        <a href="/catalog/1142" class="">Отвертки аккумуляторные</a>
                      </li>
                      <li>
                        <a href="/catalog/1143" class="">Перфораторы</a>
                      </li>
                      <li>
                        <a href="/catalog/1144" class="">Пилы дисковые (циркулярные)</a>
                      </li>
                      <li>
                        <a href="/catalog/1145" class="">Пилы сабельные (ножовки)</a>
                      </li>
                      <li>
                        <a href="/catalog/1146" class="">Пилы торцовочные</a>
                      </li>
                      <li>
                        <a href="/catalog/1147" class="">Пистолеты клеевые</a>
                      </li>
                      <li>
                        <a href="/catalog/1148" class="">Аксессуары и запчасти для электроинструментов</a>
                      </li>
                      <li>
                        <a href="/catalog/1150" class="">Пылесосы промышленные строительные</a>
                      </li>
                      <li>
                        <a href="/catalog/1151" class="">Рубанки электрические</a>
                      </li>
                      <li>
                        <a href="/catalog/1152" class="">Степлеры электрические</a>
                      </li>
                      <li>
                        <a href="/catalog/1153" class="">УШМ (болгарки)</a>
                      </li>
                      <li>
                        <a href="/catalog/1154" class="">Фены технические</a>
                      </li>
                      <li>
                        <a href="/catalog/1155" class="">Фрезеры</a>
                      </li>
                      <li>
                        <a href="/catalog/1156" class="">Штроборезы</a>
                      </li>
                      <li>
                        <a href="/catalog/1157" class="">Пилы цепные</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/1158" class="">
            <span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2344 16.815L15.2227 15.8032L5.88923 25.1367L6.90098 26.1484L16.2344 16.815Z" fill="#FF781F"></path>
                <path d="M4.25655 28.4071C4.5924 28.4071 4.86466 28.1349 4.86466 27.799C4.86466 27.4632 4.5924 27.1909 4.25655 27.1909C3.9207 27.1909 3.64844 27.4632 3.64844 27.799C3.64844 28.1349 3.9207 28.4071 4.25655 28.4071Z" fill="#FF781F"></path>
                <path d="M25.8265 6.98005C25.4687 6.87274 25.1468 6.58657 25.0395 6.22886C24.9322 5.87115 25.0395 5.47766 25.2899 5.19149C25.5403 4.90532 25.9338 4.79801 26.3272 4.90532C26.685 5.01264 27.0069 5.29881 27.1142 5.65652C27.2215 6.01423 27.1142 6.40771 26.8638 6.69388C26.5776 6.94428 26.1842 7.08737 25.8265 6.98005Z" fill="#FF781F"></path>
                <path d="M30.978 6.98025L30.9423 6.80139L30.6561 6.51522L29.4757 2.4373L25.5766 1.47148L25.2189 1.11377L25.04 1.078C22.1425 0.291028 19.102 1.14954 16.9915 3.22427C16.9915 3.22427 16.9915 3.22427 16.9557 3.26004C15.2387 4.97706 14.416 7.30219 14.5233 9.59155V9.87772C14.4875 11.5232 12.842 14.2776 11.4112 15.7084L1.7887 25.3309C1.14482 26.0106 0.787109 26.8691 0.787109 27.7991C0.787109 28.7292 1.14482 29.6235 1.7887 30.2673C2.46836 30.947 3.36264 31.2689 4.25692 31.2689C5.1512 31.2689 6.00971 30.947 6.68937 30.2673L16.3118 20.6449C17.7427 19.1782 20.4971 17.5685 22.1425 17.5328C22.3929 17.5685 22.6433 17.5685 22.8937 17.5685C25.1473 17.5685 27.2221 16.71 28.8318 15.1003C30.9423 12.9898 31.765 9.87772 30.978 6.98025ZM25.2189 2.83079L28.2952 3.61775L29.1895 6.72985L26.9359 9.05498L23.788 8.26802L22.8937 5.15592L23.788 4.26164L25.2189 2.83079ZM25.7912 10.2354L25.1116 10.9151C23.0726 10.6289 21.4271 8.98344 21.1409 6.94448L21.7848 6.3006L22.6791 9.44847L25.7912 10.2354ZM15.3102 19.6075L5.68777 29.23C4.9008 30.0169 3.57727 30.0169 2.7903 29.23C2.39682 28.8723 2.18219 28.3357 2.18219 27.7991C2.18219 27.2625 2.39682 26.7617 2.7903 26.3683L12.4128 16.71C13.307 15.8157 14.4875 14.206 15.2387 12.5963C15.6322 13.5264 16.2045 14.3849 16.9557 15.1003C17.6711 15.8157 18.5296 16.3881 19.4239 16.8173C17.7785 17.5685 16.2045 18.7132 15.3102 19.6075ZM27.7944 14.063C26.5066 15.315 24.8254 16.0304 23.0368 16.0661L22.536 16.1019C20.819 16.0304 19.1735 15.315 17.9931 14.063C16.7053 12.7752 16.0614 11.1655 15.9541 9.48424L15.9899 8.98344C16.0257 7.40951 16.5622 5.90711 17.5638 4.72666C17.7069 4.54781 17.85 4.40472 17.9931 4.22587C19.5312 2.6877 21.6417 1.97228 23.7523 2.25845L22.7864 3.26004L19.6743 6.40791L19.7101 6.72985C19.9247 9.73464 22.3572 12.1671 25.362 12.3817L25.6839 12.4175L27.4367 10.6647L27.6871 10.3785L29.7618 8.30379C30.048 10.3785 29.3326 12.5606 27.7944 14.063Z" fill="#FF781F"></path>
              </svg>
            </span>
            <span>КРЕПЕЖНЫЕ СИСТЕМЫ</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>КРЕПЕЖНЫЕ СИСТЕМЫ</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/1159" class="">Саморезы, шурупы</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Саморезы, шурупы</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1160" class="">Саморез сверлоконечный по металлу DIN 7504</a>
                      </li>
                      <li>
                        <a href="/catalog/1165" class="">Саморезы для крепления гипсокартона</a>
                      </li>
                      <li>
                        <a href="/catalog/1176" class="">Шуруп с полусферической головкой DIN7981</a>
                      </li>
                      <li>
                        <a href="/catalog/1179" class="">Саморезы с потайной головкой DIN 7982 нержавеющие</a>
                      </li>
                      <li>
                        <a href="/catalog/1180" class="">Саморезы для крепления гипсокартона со сверлом цинк</a>
                      </li>
                      <li>
                        <a href="/catalog/1181" class="">Саморез для крепления аквапанелей и ЦСП острый / сверло</a>
                      </li>
                      <li>
                        <a href="/catalog/1182" class="">Саморезы для крепления гипсокартона со сверлом чёрные</a>
                      </li>
                      <li>
                        <a href="/catalog/1183" class="">Саморезы для гипсоволокнистых листов</a>
                      </li>
                      <li>
                        <a href="/catalog/1186" class="">Саморезы с прессшайбой для крепления листового металла СММ</a>
                      </li>
                      <li>
                        <a href="/catalog/1193" class="">Саморезы для крепления металлических профилей СМК (Клоп)</a>
                      </li>
                      <li>
                        <a href="/catalog/1197" class="">Саморезы универсальные Pozi, желтый цинк</a>
                      </li>
                      <li>
                        <a href="/catalog/1200" class="">Саморезы кровельные, оцинкованные с шестигранной головкой</a>
                      </li>
                      <li>
                        <a href="/catalog/1202" class="">Саморезы кровельные, оцинкованные с шестигранной головкой RAL, шайба с подкладкой EPDM</a>
                      </li>
                      <li>
                        <a href="/catalog/1203" class="">Шурупы для крепления деревянных лаг и реек DIN 571</a>
                      </li>
                      <li>
                        <a href="/catalog/1206" class="">Саморезы для крепления сэндвич-панелей, шестигранная головка, шайба с резиновой прокладкой</a>
                      </li>
                      <li>
                        <a href="/catalog/1207" class="">Саморезы кровельные диаметром 4,8 по металлической обрешетке (с увеличенным сверлом)</a>
                      </li>
                      <li>
                        <a href="/catalog/1208" class="">Саморезы кровельные, оцинкованные с шестигранной головкой, усиленное сверло 15 мм</a>
                      </li>
                      <li>
                        <a href="/catalog/1209" class="">Саморезы оконные</a>
                      </li>
                      <li>
                        <a href="/catalog/1212" class="">Шуруп-кольца, костыли, крюки</a>
                      </li>
                      <li>
                        <a href="/catalog/1216" class="">Шурупы по бетону</a>
                      </li>
                      <li>
                        <a href="/catalog/1217" class="">Крепление для строительных лесов (шуруп/дюбель)</a>
                      </li>
                      <li>
                        <a href="/catalog/1218" class="">Изделия крепежные Кнауф</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1219" class="">Фасованный крепеж</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Фасованный крепеж</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1220" class="">Саморезы</a>
                      </li>
                      <li>
                        <a href="/catalog/1261" class="">Специальный крепёж</a>
                      </li>
                      <li>
                        <a href="/catalog/1264" class="">Дюбели</a>
                      </li>
                      <li>
                        <a href="/catalog/1288" class="">Крепежные наборы</a>
                      </li>
                      <li>
                        <a href="/catalog/1289" class="">Дюбель-гвозди</a>
                      </li>
                      <li>
                        <a href="/catalog/1294" class="">Гвозди</a>
                      </li>
                      <li>
                        <a href="/catalog/1313" class="">Метрический крепёж</a>
                      </li>
                      <li>
                        <a href="/catalog/1348" class="">Анкеры</a>
                      </li>
                      <li>
                        <a href="/catalog/1376" class="">Грузовой крепёж</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1419" class="">Дюбельная техника</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Дюбельная техника</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1420" class="">Тарельчатый дюбель EJOT herm</a>
                      </li>
                      <li>
                        <a href="/catalog/1421" class="">Универсальный забивной дюбель H5 EJOT</a>
                      </li>
                      <li>
                        <a href="/catalog/1422" class="">Дюбель-гвоздь / потайной бортик (SM-L)</a>
                      </li>
                      <li>
                        <a href="/catalog/1423" class="">Дюбель-гвоздь / грибовидный бортик (SM-G)</a>
                      </li>
                      <li>
                        <a href="/catalog/1424" class="">Дюбели распорные</a>
                      </li>
                      <li>
                        <a href="/catalog/1425" class="">Дюбель U универсальный</a>
                      </li>
                      <li>
                        <a href="/catalog/1426" class="">Дюбель "Бабочка"</a>
                      </li>
                      <li>
                        <a href="/catalog/1427" class="">Дюбель Driva, металл/пластик</a>
                      </li>
                      <li>
                        <a href="/catalog/1428" class="">Дюбель для изоляционных материалов, Тех Креп</a>
                      </li>
                      <li>
                        <a href="/catalog/1433" class="">Дюбель для пустотелых конструкций "Молли"</a>
                      </li>
                      <li>
                        <a href="/catalog/1434" class="">Дюбель для изоляционных материалов, InterFix</a>
                      </li>
                      <li>
                        <a href="/catalog/1436" class="">Дюбель с крюком - костыль</a>
                      </li>
                      <li>
                        <a href="/catalog/1437" class="">Дюбель с крюком - полукольцо</a>
                      </li>
                      <li>
                        <a href="/catalog/1438" class="">Дюбель фасадный</a>
                      </li>
                      <li>
                        <a href="/catalog/1446" class="">Дюбеля для газобетона металл/пластик</a>
                      </li>
                      <li>
                        <a href="/catalog/1449" class="">Складной пружинный дюбель с крючком</a>
                      </li>
                      <li>
                        <a href="/catalog/1450" class="">Дюбель-гвоздь для монтажных пистолетов "Hilti"</a>
                      </li>
                      <li>
                        <a href="/catalog/1451" class="">Дюбель-гвоздь для монтажных пистолетов ТУ-14-4-1731-92</a>
                      </li>
                      <li>
                        <a href="/catalog/1452" class="">Забиваемый металлический дюбель-гвоздь</a>
                      </li>
                      <li>
                        <a href="/catalog/1453" class="">Патроны монтажные и пистолеты</a>
                      </li>
                      <li>
                        <a href="/catalog/1456" class="">Рамный металлический дюбель</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1457" class="">Анкерная техника</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Анкерная техника</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1458" class="">Анкер болт с гайкой</a>
                      </li>
                      <li>
                        <a href="/catalog/1459" class="">Анкер болт с гайкой, двухраспорный</a>
                      </li>
                      <li>
                        <a href="/catalog/1460" class="">Анкер болт с шестигранной головой</a>
                      </li>
                      <li>
                        <a href="/catalog/1461" class="">Клиновой анкер</a>
                      </li>
                      <li>
                        <a href="/catalog/1465" class="">Анкер клин</a>
                      </li>
                      <li>
                        <a href="/catalog/1466" class="">Забиваемый анкер сталь/латунь (цанга)</a>
                      </li>
                      <li>
                        <a href="/catalog/1470" class="">Анкерный болт Г-образный</a>
                      </li>
                      <li>
                        <a href="/catalog/1471" class="">Анкерный болт с кольцом</a>
                      </li>
                      <li>
                        <a href="/catalog/1472" class="">Анкерный болт с крюком</a>
                      </li>
                      <li>
                        <a href="/catalog/1473" class="">Заклёпки</a>
                      </li>
                      <li>
                        <a href="/catalog/1478" class="">Анкеры химические</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1536" class="">Перфорированный крепеж</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Перфорированный крепеж</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1537" class="">Закладная опора (ZO)</a>
                      </li>
                      <li>
                        <a href="/catalog/1538" class="">Крепеж стоек забивной (KS)</a>
                      </li>
                      <li>
                        <a href="/catalog/1539" class="">Крепежный уголок скользящий (KUC)</a>
                      </li>
                      <li>
                        <a href="/catalog/1540" class="">Основание колонны (OK)</a>
                      </li>
                      <li>
                        <a href="/catalog/1541" class="">Угловой соединитель (US)</a>
                      </li>
                      <li>
                        <a href="/catalog/1542" class="">Анкер регулировочный по высоте</a>
                      </li>
                      <li>
                        <a href="/catalog/1543" class="">Держатель балки (DB)</a>
                      </li>
                      <li>
                        <a href="/catalog/1544" class="">Кляймер (крепление для вагонки)</a>
                      </li>
                      <li>
                        <a href="/catalog/1545" class="">Крепежная пластина (KP)</a>
                      </li>
                      <li>
                        <a href="/catalog/1546" class="">Крепежный уголок Z образный (KUZ)</a>
                      </li>
                      <li>
                        <a href="/catalog/1547" class="">Крепежный уголок ассиметричный (KUAS)</a>
                      </li>
                      <li>
                        <a href="/catalog/1548" class="">Крепежный уголок равносторонний (KUR)</a>
                      </li>
                      <li>
                        <a href="/catalog/1549" class="">Крепежный уголок с углом 135 градусов (KUS)</a>
                      </li>
                      <li>
                        <a href="/catalog/1550" class="">Крепежный анкерный уголок (KUL)</a>
                      </li>
                      <li>
                        <a href="/catalog/1551" class="">Крепежный уголок (KU)</a>
                      </li>
                      <li>
                        <a href="/catalog/1552" class="">Крепежный усиленный уголок (KUU)</a>
                      </li>
                      <li>
                        <a href="/catalog/1553" class="">Лента перфорированная волна</a>
                      </li>
                      <li>
                        <a href="/catalog/1554" class="">Лента перфорированная монтажная</a>
                      </li>
                      <li>
                        <a href="/catalog/1555" class="">Лента перфорированная прямая для вентиляции</a>
                      </li>
                      <li>
                        <a href="/catalog/1556" class="">Опора балки (ОB)</a>
                      </li>
                      <li>
                        <a href="/catalog/1557" class="">Опора бруса закрытая OBR Z</a>
                      </li>
                      <li>
                        <a href="/catalog/1558" class="">Опора бруса открытая OBR R</a>
                      </li>
                      <li>
                        <a href="/catalog/1559" class="">Опора скользящая для стропил (KUCIS)</a>
                      </li>
                      <li>
                        <a href="/catalog/1560" class="">Пластина оконная анкерная</a>
                      </li>
                      <li>
                        <a href="/catalog/1561" class="">Пластина соединительная (PS)</a>
                      </li>
                      <li>
                        <a href="/catalog/1562" class="">Уголок мебельный</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1563" class="">Электромонтажный крепеж</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Электромонтажный крепеж</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1564" class="">Клипса для крепления труб</a>
                      </li>
                      <li>
                        <a href="/catalog/1565" class="">Кабельные стяжки пластиковые</a>
                      </li>
                      <li>
                        <a href="/catalog/1566" class="">Скоба металлическая</a>
                      </li>
                      <li>
                        <a href="/catalog/1569" class="">Скоба пластиковая с гвоздем</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1572" class="">Сантехнический крепеж</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Сантехнический крепеж</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1573" class="">Хомут нержавеющий, силовой с болтом</a>
                      </li>
                      <li>
                        <a href="/catalog/1574" class="">Крепеж для раковины/унитаза, набор.</a>
                      </li>
                      <li>
                        <a href="/catalog/1575" class="">Сантехнические хомуты</a>
                      </li>
                      <li>
                        <a href="/catalog/1576" class="">Сантехнический болт, шестигранная середина</a>
                      </li>
                      <li>
                        <a href="/catalog/1577" class="">Червячные хомуты</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1580" class="">Такелаж</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Такелаж</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1581" class="">Блок Такелажный Simplex (одношкивный) Шкив-пластик</a>
                      </li>
                      <li>
                        <a href="/catalog/1582" class="">Вертлюг петля-вилка</a>
                      </li>
                      <li>
                        <a href="/catalog/1583" class="">Вертлюг петля-петля</a>
                      </li>
                      <li>
                        <a href="/catalog/1584" class="">Зажим алюминиевый для стальных канатов DIN 3093</a>
                      </li>
                      <li>
                        <a href="/catalog/1585" class="">Зажим для стальных канатов DIN 741</a>
                      </li>
                      <li>
                        <a href="/catalog/1586" class="">Карабин винтовой (соединитель цепи)</a>
                      </li>
                      <li>
                        <a href="/catalog/1587" class="">Карабин гальванизированный с фиксатором DIN 5299D</a>
                      </li>
                      <li>
                        <a href="/catalog/1588" class="">Карабин пожарный DIN 5299С</a>
                      </li>
                      <li>
                        <a href="/catalog/1589" class="">Коуш DIN 6899А</a>
                      </li>
                      <li>
                        <a href="/catalog/1590" class="">Крюк такелажный</a>
                      </li>
                      <li>
                        <a href="/catalog/1591" class="">Рым болт DIN 580</a>
                      </li>
                      <li>
                        <a href="/catalog/1592" class="">Рым гайка DIN 582</a>
                      </li>
                      <li>
                        <a href="/catalog/1593" class="">Скоба такелажная, цинк</a>
                      </li>
                      <li>
                        <a href="/catalog/1594" class="">Соединитель (зажим) троса двойной DUPLEX</a>
                      </li>
                      <li>
                        <a href="/catalog/1595" class="">Соединитель (зажим) троса одинарный SIMPLEX</a>
                      </li>
                      <li>
                        <a href="/catalog/1596" class="">Талреп кольцо - кольцо DIN 1480</a>
                      </li>
                      <li>
                        <a href="/catalog/1597" class="">Талреп крюк - кольцо DIN 1480</a>
                      </li>
                      <li>
                        <a href="/catalog/1598" class="">Талреп крюк - крюк DIN 1480</a>
                      </li>
                      <li>
                        <a href="/catalog/1599" class="">Трос стальной DIN 3055</a>
                      </li>
                      <li>
                        <a href="/catalog/1600" class="">Трос стальной в оплетке ПВХ DIN 3055</a>
                      </li>
                      <li>
                        <a href="/catalog/1601" class="">Цепь сварная длиннозвенная DIN 763</a>
                      </li>
                      <li>
                        <a href="/catalog/1602" class="">Цепь сварная короткозвенная DIN 766</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1603" class="">Вентиляционный крепеж</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Вентиляционный крепеж</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1604" class="">Болт U-образный</a>
                      </li>
                      <li>
                        <a href="/catalog/1605" class="">Траверсы</a>
                      </li>
                      <li>
                        <a href="/catalog/1606" class="">Крепеж для воздуховодов L Z V</a>
                      </li>
                      <li>
                        <a href="/catalog/1607" class="">Профиль U L</a>
                      </li>
                      <li>
                        <a href="/catalog/1608" class="">Кронштейн Т</a>
                      </li>
                      <li>
                        <a href="/catalog/1609" class="">Хомуты</a>
                      </li>
                      <li>
                        <a href="/catalog/1614" class="">Шина монтажная</a>
                      </li>
                      <li>
                        <a href="/catalog/1615" class="">Уголки для воздуховодов</a>
                      </li>
                      <li>
                        <a href="/catalog/1616" class="">Скоба для воздуховодов</a>
                      </li>
                      <li>
                        <a href="/catalog/1617" class="">Струбцина монтажная</a>
                      </li>
                      <li>
                        <a href="/catalog/1618" class="">Пластина с гайкой</a>
                      </li>
                      <li>
                        <a href="/catalog/1619" class="">Шипы самоклеющиеся для крепления изоляции</a>
                      </li>
                      <li>
                        <a href="/catalog/1620" class="">Лента уплотнительная</a>
                      </li>
                      <li>
                        <a href="/catalog/1621" class="">Лента клейкая алюминиевая, армированная</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1622" class="">Крепежная техника Sormat</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Крепежная техника Sormat</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1623" class="">Анкер для больших нагрузок</a>
                      </li>
                      <li>
                        <a href="/catalog/1624" class="">Анкер для больших нагрузок с кольцом</a>
                      </li>
                      <li>
                        <a href="/catalog/1625" class="">Анкер для больших нагрузок с крюком</a>
                      </li>
                      <li>
                        <a href="/catalog/1626" class="">Анкер латунный/забивной</a>
                      </li>
                      <li>
                        <a href="/catalog/1627" class="">Дюбель нейлоновый распорный NAT</a>
                      </li>
                      <li>
                        <a href="/catalog/1628" class="">Дюбель-гвоздь нейлон</a>
                      </li>
                      <li>
                        <a href="/catalog/1629" class="">Забивной анкер</a>
                      </li>
                      <li>
                        <a href="/catalog/1630" class="">Клиновые анкеры</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1631" class="">Крепеж кровельных материалов</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Крепеж кровельных материалов</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1632" class="">Дюбель кровельный телескопический ТехКреп</a>
                      </li>
                      <li>
                        <a href="/catalog/1633" class="">Дюбель кровельный телескопический РОКС</a>
                      </li>
                      <li>
                        <a href="/catalog/1634" class="">Саморезы с антикоррозийным покрытием РОКС</a>
                      </li>
                      <li>
                        <a href="/catalog/1638" class="">Планки и шайбы РОКС распределители нагрузок</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1639" class="">Крепеж и комплектующие для монолитного домостроения</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Крепеж и комплектующие для монолитного домостроения</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1640" class="">Защитный колпачок для арматуры</a>
                      </li>
                      <li>
                        <a href="/catalog/1641" class="">Фиксатор для арматуры "Звездочка"</a>
                      </li>
                      <li>
                        <a href="/catalog/1642" class="">Фиксатор для арматуры "Стульчик"</a>
                      </li>
                      <li>
                        <a href="/catalog/1643" class="">Фиксатор для арматуры "Стойка"</a>
                      </li>
                      <li>
                        <a href="/catalog/1644" class="">Фиксатор для арматуры "Потолочная опора" (кубик)</a>
                      </li>
                      <li>
                        <a href="/catalog/1645" class="">Фиксатор для арматуры "Подставка под сыпучий грунт"</a>
                      </li>
                      <li>
                        <a href="/catalog/1646" class="">"Конус" для трубы ПВХ</a>
                      </li>
                      <li>
                        <a href="/catalog/1647" class="">"Заглушка" для трубы ПВХ</a>
                      </li>
                      <li>
                        <a href="/catalog/1648" class="">Труба ПВХ</a>
                      </li>
                      <li>
                        <a href="/catalog/1649" class="">Стяжной винт</a>
                      </li>
                      <li>
                        <a href="/catalog/1650" class="">Гайка для стяжного винта</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1651" class="">Сваи и опоры забивные</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/2098" class="">18. КРЕПЕЖ под ЗАКАЗ</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>18. КРЕПЕЖ под ЗАКАЗ</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/2099" class="">МЕТИЗЫ под ЗАКАЗ</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/1652" class="">
            <span>
              <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 4.11618V0H22.5104V4.11618H23.6681V17.751H22.5104V21.8672H23.6166C23.2564 24.0797 21.327 25.7261 19.0373 25.7261C16.7477 25.7261 14.844 24.0539 14.4838 21.8672H15.5643V17.751H14.3809C13.995 12.3228 9.57013 7.9751 4.11618 7.71784V6.6888H0V15.1784H4.11618V13.9178C6.17427 14.1494 7.82075 15.7187 8.15519 17.751H7.07469V21.8672H8.25809C8.64398 27.4755 13.3261 31.9004 19.0373 31.9004C24.7743 31.9004 29.4307 27.527 29.8166 21.8672H31V17.751H29.8423V4.11618H31ZM3.08714 14.1494H1.02905V7.71784H3.08714V14.1494ZM4.11618 12.8888V8.74689C9.00415 9.00415 12.966 12.8631 13.3519 17.7253H9.20996C8.84979 15.1527 6.74025 13.1203 4.11618 12.8888ZM8.10373 20.8382V18.7801H14.5353V20.8382H8.10373ZM19.0373 30.8714C13.8921 30.8714 9.67303 26.8838 9.28714 21.8672H13.429C13.8149 24.6199 16.1817 26.7552 19.0373 26.7552C21.8672 26.7552 24.2598 24.6456 24.6456 21.8672H28.7876C28.4017 26.9353 24.1826 30.8714 19.0373 30.8714ZM29.971 18.7801V20.8382H23.5394V18.7801H29.971ZM24.6971 17.751V4.11618H28.8133V17.751H24.6971ZM23.5394 3.08714V1.02905H29.971V3.08714H23.5394Z" fill="#FF781F"></path>
                <path opacity="0.3" d="M22.5871 29.4564C24.7223 28.556 26.446 26.7809 27.2949 24.6457L26.3431 24.2598C25.597 26.1635 24.0792 27.7071 22.2012 28.5046L22.5871 29.4564Z" fill="#FF781F"></path>
              </svg>
            </span>
            <span>САНТЕХНИЧЕСКАЯ ГРУППА</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>САНТЕХНИЧЕСКАЯ ГРУППА</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/1653" class="">Водоотведение</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Водоотведение</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1654" class="">Дренажная система</a>
                      </li>
                      <li>
                        <a href="/catalog/1655" class="">Лотки водоотводные и комплектующие</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1656" class="">Сантехника</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Сантехника</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1657" class="">Унитазы и комплектующие</a>
                      </li>
                      <li>
                        <a href="/catalog/1658" class="">Умывальники и пьедесталы</a>
                      </li>
                      <li>
                        <a href="/catalog/1659" class="">Ванны и сопутствующие товары</a>
                      </li>
                      <li>
                        <a href="/catalog/1671" class="">Смесители и комплектующие</a>
                      </li>
                      <li>
                        <a href="/catalog/1685" class="">Мойки и подстолья</a>
                      </li>
                      <li>
                        <a href="/catalog/1691" class="">Сифоны, трапы и выпуски</a>
                      </li>
                      <li>
                        <a href="/catalog/1696" class="">Подводка гибкая</a>
                      </li>
                      <li>
                        <a href="/catalog/1699" class="">Полотенцесушители и комплектующие</a>
                      </li>
                      <li>
                        <a href="/catalog/1703" class="">Кабины душевые и поддоны</a>
                      </li>
                      <li>
                        <a href="/catalog/1705" class="">Мебель для ванной комнаты</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1710" class="">Водоснабжение</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Водоснабжение</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1711" class="">Трубы и фитинги</a>
                      </li>
                      <li>
                        <a href="/catalog/1753" class="">Сантехнический инструмент</a>
                      </li>
                      <li>
                        <a href="/catalog/1754" class="">Коллекторы для воды и комплектующие</a>
                      </li>
                      <li>
                        <a href="/catalog/1757" class="">Детали трубопровода</a>
                      </li>
                      <li>
                        <a href="/catalog/1759" class="">Запорная арматура</a>
                      </li>
                      <li>
                        <a href="/catalog/1772" class="">Фильтры, грязевики и воздухоотводчики</a>
                      </li>
                      <li>
                        <a href="/catalog/1776" class="">Предохранительная арматура</a>
                      </li>
                      <li>
                        <a href="/catalog/1779" class="">Приборы учета и КИПиА</a>
                      </li>
                      <li>
                        <a href="/catalog/1784" class="">Уплотнители соединений</a>
                      </li>
                      <li>
                        <a href="/catalog/1790" class="">Насосы для водоснабжения</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1795" class="">Газоснабжение</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/1796" class="">Канализация</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Канализация</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1797" class="">Насосы дренажные и фекальные</a>
                      </li>
                      <li>
                        <a href="/catalog/1798" class="">Тросы сантехнические</a>
                      </li>
                      <li>
                        <a href="/catalog/1799" class="">Трубы и фитинги для внутренней канализации</a>
                      </li>
                      <li>
                        <a href="/catalog/1805" class="">Трубы и фитинги для наружной канализации</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1808" class="">Люки ревизионные</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Люки ревизионные</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1809" class="">Люки ревизионные металлические</a>
                      </li>
                      <li>
                        <a href="/catalog/1810" class="">Люки ревизионные под покраску</a>
                      </li>
                      <li>
                        <a href="/catalog/1811" class="">Люки ревизионные напольные</a>
                      </li>
                      <li>
                        <a href="/catalog/1812" class="">Люки ревизионные пластиковые</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/1813" class="">
            <span>
              <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.75 36.4286H0V37.6429H29.75C32.0875 37.6429 34 35.7304 34 33.3929C34 31.0554 32.0875 29.1429 29.75 29.1429H23.375V28.5357H31.5714V27.0179C33.1196 25.7429 34 23.8911 34 21.8571V8.19643C34 4.70536 31.3286 1.85179 27.9286 1.54821V0H5.46429V4.25H27.9286V2.7625C30.6607 3.06607 32.7857 5.37321 32.7857 8.19643V21.8571C32.7857 23.1321 32.3607 24.3464 31.5714 25.2875V8.80357H1.82143V28.5357H10.0179V29.1429H7.58929V30.3571H10.0179V32.1786H23.375V30.3571H29.75C31.4196 30.3571 32.7857 31.7232 32.7857 33.3929C32.7857 35.0625 31.4196 36.4286 29.75 36.4286ZM26.7143 3.03571H6.67857V1.21429H26.7143V3.03571ZM3.03571 10.0179H30.3571V27.3214H3.03571V10.0179ZM11.2321 30.9643V28.5357H22.1607V30.9643H11.2321Z" fill="#FF781F"></path>
                <path d="M3.94629 26.4106H29.4463V10.9285H3.94629V26.4106ZM16.0891 25.1963H11.232V12.1428H16.0891V25.1963ZM17.3034 12.1428H22.1606V25.1963H17.3034V12.1428ZM28.232 25.1963H23.3749V12.1428H28.232V25.1963ZM5.16057 12.1428H10.0177V25.1963H5.16057V12.1428Z" fill="#FF781F"></path>
              </svg>
            </span>
            <span>ОТОПЛЕНИЕ</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>ОТОПЛЕНИЕ</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/1814" class="">Арматура для систем отопления</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/1815" class="">Водонагреватели</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Водонагреватели</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1816" class="">Водонагреватели электрические</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1819" class="">Арматура для радиаторов</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Арматура для радиаторов</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1820" class="">Арматура для радиаторов Danfoss</a>
                      </li>
                      <li>
                        <a href="/catalog/1821" class="">Арматура для радиаторов Valtec</a>
                      </li>
                      <li>
                        <a href="/catalog/1822" class="">Арматура для радиаторов СТМ</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1823" class="">Радиаторы отопления</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Радиаторы отопления</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1824" class="">Радиаторы алюминиевые</a>
                      </li>
                      <li>
                        <a href="/catalog/1829" class="">Радиаторы биметаллические</a>
                      </li>
                      <li>
                        <a href="/catalog/1834" class="">Радиаторы стальные</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1835" class="">Мембранные баки</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Мембранные баки</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1836" class="">Баки для водоснабжения</a>
                      </li>
                      <li>
                        <a href="/catalog/1837" class="">Баки для отопления</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1838" class="">Теплый пол</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Теплый пол</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1839" class="">Электрический теплый пол</a>
                      </li>
                      <li>
                        <a href="/catalog/1853" class="">Водяной теплый пол</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/1856" class="">Циркуляционные насосы</a>
                  <!--v-if-->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/1857" class="">
            <span>
              <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.8972 35.3458H0V12.1683C0 6.57667 4.5486 2.02808 10.1402 2.02808H31V4.92527H10.1402C6.14206 4.92527 2.8972 8.17013 2.8972 12.1683V35.3458ZM1.15888 34.187H1.73832V12.1683C1.73832 7.53275 5.50467 3.76639 10.1402 3.76639H29.8411V3.18695H10.1402C5.18598 3.18695 1.15888 7.21406 1.15888 12.1683V34.187Z" fill="#FF781F"></path>
                <path d="M12.4001 35.3457H11.2412V6.37374C11.2412 5.64944 11.3571 4.92514 11.5889 4.25879L12.6898 4.63542C12.487 5.18589 12.4001 5.76533 12.4001 6.37374V35.3457Z" fill="#FF781F"></path>
                <path d="M21.5552 2.92617C20.5701 1.79626 19.1505 1.15888 17.644 1.15888C16.1664 1.15888 14.7468 1.79626 13.7617 2.8972L12.8926 2.11495C14.1094 0.782243 15.8477 0 17.644 0C19.4692 0 21.2365 0.782243 22.4244 2.1729L21.5552 2.92617Z" fill="#FF781F"></path>
                <path d="M22.888 10.5168L22.8591 6.37382C22.8591 5.79438 22.7432 5.21494 22.5693 4.66448L23.6703 4.28784C23.902 4.9542 24.0179 5.6785 24.0469 6.4028V10.5168H22.888Z" fill="#FF781F"></path>
                <path d="M24.0466 15.8477H22.8877V23.0327H24.0466V15.8477Z" fill="#FF781F"></path>
                <path d="M26.6541 16.4272H20.1934V13.1824C20.1934 11.3861 21.642 9.9375 23.4382 9.9375C25.2345 9.9375 26.6831 11.3861 26.6831 13.1824V16.4272H26.6541ZM21.3522 15.2683H25.4952V13.1824C25.4952 12.0235 24.5681 11.0964 23.4092 11.0964C22.2504 11.0964 21.3233 12.0235 21.3233 13.1824V15.2683H21.3522Z" fill="#FF781F"></path>
                <path d="M23.4673 31.5796C23.3225 31.5796 23.1486 31.5796 23.0038 31.5506C19.4112 31.3478 16.514 28.4796 16.2533 24.9161C16.0795 22.6562 16.9486 20.4833 18.658 18.9768C19.643 18.1076 20.1935 16.8329 20.1935 15.5002H20.7729V15.2974H26.0748V15.4422H26.6542C26.6542 16.7749 27.2626 18.0787 28.2767 19.0058C29.8122 20.3385 30.7103 22.3086 30.7103 24.3366C30.7103 26.2777 29.957 28.074 28.5953 29.4357C27.2047 30.8263 25.4084 31.5796 23.4673 31.5796ZM21.2654 16.4273C21.0626 17.731 20.3963 18.9478 19.4112 19.846C17.9916 21.1207 17.2673 22.946 17.4122 24.8291C17.6439 27.8132 20.0776 30.2179 23.0617 30.4207C24.829 30.5366 26.5094 29.8992 27.7552 28.6534C28.914 27.4946 29.5225 25.988 29.5225 24.3656C29.5225 22.6562 28.7982 21.0048 27.4944 19.846C26.4804 18.9189 25.814 17.731 25.5823 16.4273H21.2654Z" fill="#FF781F"></path>
                <path d="M25.8139 22.4534H21.1494V23.6122H25.8139V22.4534Z" fill="#FF781F"></path>
              </svg>
            </span>
            <span>ЭЛЕКТРИКА И ВЕНТИЛЯЦИЯ</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>ЭЛЕКТРИКА И ВЕНТИЛЯЦИЯ</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/1858" class="">Электрика</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Электрика</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/1859" class="">Освещение</a>
                      </li>
                      <li>
                        <a href="/catalog/1916" class="">Кабельно-проводниковая продукция</a>
                      </li>
                      <li>
                        <a href="/catalog/1948" class="">Низковольтное оборудование</a>
                      </li>
                      <li>
                        <a href="/catalog/1989" class="">Электроустановочные изделия</a>
                      </li>
                      <li>
                        <a href="/catalog/2027" class="">Кабеленесущие системы (системы для прокладки кабеля)</a>
                      </li>
                      <li>
                        <a href="/catalog/2046" class="">Материалы для электромонтажа</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/catalog/2066" class="">Вентиляция</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Вентиляция</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/2067" class="">Кондиционеры</a>
                      </li>
                      <li>
                        <a href="/catalog/2068" class="">Вентиляторы</a>
                      </li>
                      <li>
                        <a href="/catalog/2069" class="">Вентиляционные решетки, анемостаты</a>
                      </li>
                      <li>
                        <a href="/catalog/2073" class="">Воздуховоды и монтажные элементы</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="header_menu_item">
        <div class="header_menu_item_wrap">
          <a href="/catalog/2079" class="">
            <span>
              <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8658 6.99536L4.29102 15.8897H8.92457V27.3061H11.4702V18.1505H18.0747V27.3061H30.807V15.8897H35.4411L19.8658 6.99536ZM24.2595 22.7805H19.9343V18.2539H24.2595V22.7805ZM29.0734 22.7805H24.7477V18.2539H29.0734V22.7805Z" fill="#FF781F"></path>
                <path d="M32.6866 28.6099H7.04561V29.9007H5.39648V30.3809H7.0761V30.1406H8.09556V30.3809H9.77467V30.1406H10.7941V30.3809H12.4727V30.1406H13.4927V30.3809H15.1713V30.1406H16.1908V30.3809H17.8699V30.1406H18.8894V30.3809H20.569V30.1406H21.5879V30.3809H23.2675V30.1406H24.2865V30.3809H25.9656V30.1406H26.9856V30.3809H28.6642V30.1406H29.6842V30.3809H31.3628V30.1406H32.3817V30.3809H34.0618V29.9007H32.6866V28.6099Z" fill="#FF781F"></path>
                <path d="M17.8695 4.28784H16.1904V4.76809H17.8695V4.28784Z" fill="#FF781F"></path>
                <path d="M12.4731 4.28784H10.7939V4.76809H12.4731V4.28784Z" fill="#FF781F"></path>
                <path d="M20.5693 4.28784H18.8896V4.76809H20.5693V4.28784Z" fill="#FF781F"></path>
                <path d="M1.67911 4.28784H0V4.76809H1.67911V4.28784Z" fill="#FF781F"></path>
                <path d="M15.1723 4.28784H13.4932V4.76809H15.1723V4.28784Z" fill="#FF781F"></path>
                <path d="M34.0614 4.28784H32.3818V4.76809H34.0614V4.28784Z" fill="#FF781F"></path>
                <path d="M42.1571 4.28784H40.4785V4.76809H42.1571V4.28784Z" fill="#FF781F"></path>
                <path d="M23.2675 4.28784H21.5879V4.76809H23.2675V4.28784Z" fill="#FF781F"></path>
                <path d="M31.3632 4.28784H29.6846V4.76809H31.3632V4.28784Z" fill="#FF781F"></path>
                <path d="M28.664 4.28784H26.9854V4.76809H28.664V4.28784Z" fill="#FF781F"></path>
                <path d="M25.9657 4.28784H24.2871V4.76809H25.9657V4.28784Z" fill="#FF781F"></path>
                <path d="M7.0756 4.28784H5.39648V4.76809H7.0756V4.28784Z" fill="#FF781F"></path>
                <path d="M1.67911 29.9006H0V30.3809H1.67911V29.9006Z" fill="#FF781F"></path>
                <path d="M42.1571 29.9006H40.4785V30.3809H42.1571V29.9006Z" fill="#FF781F"></path>
                <path d="M4.37736 29.9006H2.69824V30.3809H4.05103V31.9216H4.53077V30.2425H4.37736V29.9006Z" fill="#FF781F"></path>
                <path d="M39.5525 25.8765H39.0732V27.5556H39.5525V25.8765Z" fill="#FF781F"></path>
                <path d="M39.5525 23.1772H39.0732V24.8569H39.5525V23.1772Z" fill="#FF781F"></path>
                <path d="M39.0726 29.9008H37.7793V30.381H39.4584V30.1067H39.5519V28.5745H39.0726V29.9008Z" fill="#FF781F"></path>
                <path d="M39.5525 17.7808H39.0732V19.4604H39.5525V17.7808Z" fill="#FF781F"></path>
                <path d="M39.5525 20.4792H39.0732V22.1584H39.5525V20.4792Z" fill="#FF781F"></path>
                <path d="M39.5525 9.68433H39.0732V11.3639H39.5525V9.68433Z" fill="#FF781F"></path>
                <path d="M39.5525 6.98633H39.0732V8.66544H39.5525V6.98633Z" fill="#FF781F"></path>
                <path d="M39.0726 5.96745H39.5519V4.28784H39.4584H39.0726H37.7793V4.76809H39.0726V5.96745Z" fill="#FF781F"></path>
                <path d="M39.5525 12.3835H39.0732V14.0627H39.5525V12.3835Z" fill="#FF781F"></path>
                <path d="M9.09967 6.63602H9.57892V4.768H9.77482V4.28776H9.57892V0.744629H9.09967V4.28776H8.0957V4.768H9.09967V6.63602Z" fill="#FF781F"></path>
                <path d="M39.5523 15.7532V15.0815H39.0731V15.7532H37.2051V16.2334H39.0731V16.7617H39.5523V16.2334H43.6547V15.7532H39.5523Z" fill="#FF781F"></path>
                <path d="M35.3562 8.0957H34.877V9.77482H35.3562V8.0957Z" fill="#FF781F"></path>
                <path d="M35.3562 26.9858H34.877V28.6655H35.3562V26.9858Z" fill="#FF781F"></path>
                <path d="M35.3562 21.5886H34.877V23.2677H35.3562V21.5886Z" fill="#FF781F"></path>
                <path d="M35.3562 16.1914H34.877V17.8705H35.3562V16.1914Z" fill="#FF781F"></path>
                <path d="M35.3562 18.8896H34.877V20.5693H35.3562V18.8896Z" fill="#FF781F"></path>
                <path d="M35.3562 2.69849H34.877V4.3776H35.0808V4.76789H36.7605V4.28765H35.3562V2.69849Z" fill="#FF781F"></path>
                <path d="M35.3562 24.2866H34.877V25.9662H35.3562V24.2866Z" fill="#FF781F"></path>
                <path d="M35.3562 32.3823H34.877V33.7046H35.3562V32.3823Z" fill="#FF781F"></path>
                <path d="M35.3562 5.39673H34.877V7.07634H35.3562V5.39673Z" fill="#FF781F"></path>
                <path d="M35.3562 13.4929H34.877V15.1725H35.3562V13.4929Z" fill="#FF781F"></path>
                <path d="M35.3562 29.6843H34.877V31.3634H35.3562V30.381H36.7605V29.9007H35.3562V29.6843Z" fill="#FF781F"></path>
                <path d="M35.3562 10.7939H34.877V12.4736H35.3562V10.7939Z" fill="#FF781F"></path>
                <path d="M35.3562 0H34.877V1.67961H35.3562V0Z" fill="#FF781F"></path>
                <path d="M4.53053 11.3521H4.05078V13.0317H4.53053V11.3521Z" fill="#FF781F"></path>
                <path d="M4.53053 0.558105H4.05078V2.23772H4.53053V0.558105Z" fill="#FF781F"></path>
                <path d="M4.53053 19.4482H4.05078V21.1279H4.53053V19.4482Z" fill="#FF781F"></path>
                <path d="M4.53053 8.65381H4.05078V10.3329H4.53053V8.65381Z" fill="#FF781F"></path>
                <path d="M4.53053 22.1467H4.05078V23.8258H4.53053V22.1467Z" fill="#FF781F"></path>
                <path d="M4.53053 24.845H4.05078V26.5246H4.53053V24.845Z" fill="#FF781F"></path>
                <path d="M4.53053 32.9412H4.05078V34.2635H4.53053V32.9412Z" fill="#FF781F"></path>
                <path d="M4.05103 4.93595H4.53077V3.25684H4.05103V4.28779H2.69824V4.76804H4.05103V4.93595Z" fill="#FF781F"></path>
                <path d="M4.53053 27.5439H4.05078V29.2236H4.53053V27.5439Z" fill="#FF781F"></path>
                <path d="M4.53053 5.95532H4.05078V7.63494H4.53053V5.95532Z" fill="#FF781F"></path>
                <path d="M4.53053 16.7498H4.05078V18.4289H4.53053V16.7498Z" fill="#FF781F"></path>
                <path d="M4.53053 14.051H4.05078V15.7306H4.53053V14.051Z" fill="#FF781F"></path>
                <path d="M18.0356 34.2134H11.2551V32.9456H10.7754V34.2134V34.6936V35.962H11.2551V34.6936H18.0356V35.962H18.5153V32.9456H18.0356V34.2134Z" fill="#FF781F"></path>
              </svg>
            </span>
            <span>ТОВАРЫ ДЛЯ ДОМА И САДА</span>
          </a>
          <div class="wrap_menu">
            <div class="wrap_menu_sub">
              <a href="/catalog/new" class="">
                <div class="wrap_menu_sub_title">
                  <span>ТОВАРЫ ДЛЯ ДОМА И САДА</span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="/catalog/2080" class="">Антибактериальные средства (антисептики)</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/2081" class="">Перчатки защитные</a>
                  <!--v-if-->
                </li>
                <li>
                  <a href="/catalog/2082" class="">Садово-хозяйственная группа</a>
                  <div class="wrap_menu_sub2">
                    <div class="wrap_menu_title">
                      <span>Садово-хозяйственная группа</span>
                    </div>
                    <ul>
                      <li>
                        <a href="/catalog/2083" class="">Сад, огород</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>