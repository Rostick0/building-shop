<script setup>
import { usePostStore } from '@/app/stores/post';
import { storeToRefs } from 'pinia';

const postStore = usePostStore();
const { posts } = storeToRefs(postStore);
const { addPost, removePost } = postStore;

console.log(posts.value);



const onSubmit = function (e) {
    addPost({ id: Date.now(), name: e.target[0].value })

    e.target[0].value = '';
}
</script>

<template>
    <div class="main-view">
        <form action="" method="post" @submit.prevent="onSubmit">
            <input name="name" type="text">
            {{ ' ' }}
            <button>Добавить</button>
        </form>
        <br>
        <ul class="main-view__list">
            <li v-for="post in posts" @key="post.id" class="main-view__item">
                <span>{{ post.id }}</span>
                {{ ' ' }}
                <span>{{ post.name }}</span>
                {{ ' ' }}
                <button @click="removePost(post.id)">x</button>
            </li>
        </ul>
    </div>
</template>

<style src="./MainView.scss" scoped></style>