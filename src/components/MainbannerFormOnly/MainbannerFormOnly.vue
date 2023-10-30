<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup";
import { useApplicationStore } from '@/app/stores/modules/application';
import { useFavoritesStore } from '@/app/stores/modules/favorite';

const { favorites } = useFavoritesStore();
const { applicationAsyncCreate } = useApplicationStore();

const schema = yup.object().shape({
    name: yup.string().required().min(2),
    phone: yup.string().required().min(8),
    email: yup.string().required().email(),
});

const onSubmit = (values) => {
    console.log({
        ...values,
        items: favorites?.map(item => {
            return {
                id: item.id,
                count: item.countCart
            }
        })
    });
    // applicationAsyncCreate(valeus);
};
</script>

<template>
    <Form method="post" @submit="onSubmit" v-slot="{ errors }" :validation-schema="schema">
        <Field type="text" autocomplete="off" name="name" placeholder="Ваше имя" />
        <ErrorMessage name="name" />
        <Field type="tel" autocomplete="off" name="phone" required placeholder="Номер телефона" />
        <ErrorMessage name="phone" />
        <Field type="email" autocomplete="off" name="email" required placeholder="Электронная почта" />
        <ErrorMessage name="email" />
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