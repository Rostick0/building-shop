<script setup>
import { defineProps, ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup";
import { useApplicationStore } from '@/app/stores/modules/application';
// import { useFavoritesStore } from '@/app/stores/modules/favorite';
import Modal from '@/components/Modal/Modal.vue';

const props = defineProps({
    closeModal: {
        type: Function
    },
    isModal : {
        type: Boolean
    }
});

const { applicationAsyncCreate } = useApplicationStore();
// const { favorites, favoriteClear } = useFavoritesStore();
const isChecked = ref(true);
const activeModal = ref(false);
const errorMesssageFormText = ref('');

const phone = ref('');
const email = ref('');

const schema = yup.object().shape({
  name: yup.string().required('Пожалуйста, введите ваше имя').min(2, 'Имя должно содержать не менее 2 символов'),
  phone: yup.string().required('Пожалуйста, введите номер телефона').min(8, 'Номер телефона должен содержать не менее 8 символов'),
  email: yup.string().required('Пожалуйста, введите адрес электронной почты').email('Введите корректный адрес электронной почты'),
});


const onSubmit = async (values) => {
    if(!isChecked.value) {
        errorMesssageFormText.value = 'Требуется подтвердить согласие на обработку персональных данных'
        activeModal.value = true;
        return false;
    }

    try {
        await applicationAsyncCreate({
            ...values,
            items: favorites?.map(item => {
                console.log(item);
                return {
                    id: item.id,
                    count: item?.countCart ?? 1
                }
            })
        });
    
        if (typeof props.closeModal === 'function') props.closeModal();
    
        errorMesssageFormText.value = ' Ваше сообщение успешно отправлено!\nВы получите ответ в ближайшее время'
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            errorMesssageFormText.value = 'Пожалуйста, исправьте ошибки в форме';
        }
    }

    activeModal.value = true;
};
</script>

<template>
    <Form method="post" @submit="onSubmit" :validation-schema="schema">
        <Field type="text" autocomplete="off" name="name" placeholder="Ваше имя" />
        <ErrorMessage name="name" />
        <Field type="tel" autocomplete="off" name="phone" v-bind="{ 'v-mask': '(###) ###-####' }" required placeholder="Номер телефона" />
        <ErrorMessage name="phone" />
        <template v-if="!props.isModal">
            <Field type="email" autocomplete="off" v-mask="'email'" name="email" v-model="email" required placeholder="Электронная почта" />
            <ErrorMessage name="email" />
        </template>
        <button class="form_button" type="submit">Заказать звонок</button>
        <div class="agreement">
            <input type="checkbox" class="custom-checkbox" v-model="isChecked" name="happy">
            <label for="happy"></label>
            <span>Нажимая на кнопку “отправить” вы даёте своё согласие на обработку персональных данных</span>
        </div>
    </form>
    <Modal v-if="activeModal" :outClick="(() => activeModal = false)">
        <div class="errorMessageForm">
            <p>{{ errorMesssageFormText }}</p>
        </div>
    </Modal>
</template>