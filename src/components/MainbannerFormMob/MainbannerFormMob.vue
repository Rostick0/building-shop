<script setup>
import { ROUTES } from '@/app/router/helper';
import MainbannerFormOnly from '@/components/MainbannerFormOnly/MainbannerFormOnly.vue';
</script>

<template>
    <div class="mainbanner_form_mob container">
        <RouterLink :to="ROUTES.main" class="logo"></RouterLink>
        <MainbannerFormOnly />
    </div>
</template>