<script setup>
import { useForm } from 'vee-validate';
import { useApplicationStore } from '@/app/stores/modules/application';

const { handleSubmit, defineInputBinds } = useForm();
const { applicationAsyncCreate } = useApplicationStore();

const name = defineInputBinds('name');
const phone = defineInputBinds('phone');
const email = defineInputBinds('email');

const onSubmit = handleSubmit(values => {
    applicationAsyncCreate(valeus);
});
</script>

<template>
    <form method="post" @submit="onSubmit">
        <input type="text" autocomplete="off" name="name" v-bind="name" required placeholder="Ваше имя">
        <input type="tel" autocomplete="off" name="phone" v-bind="phone" required placeholder="Номер телефона">
        <input type="email" autocomplete="off" name="email" v-bind="email" required placeholder="Электронная почта">
        <button class="form_button" type="submit">отправить
            заявку</button>
        <div class="agreement">
            <input type="checkbox" class="custom-checkbox" name="happy" checked="" disabled="">
            <label for="happy"></label>
            <span>Нажимая на кнопку “отправить” вы даёте своё согласие на обработку персональных
                данных</span>
        </div>
    </form>
</template>