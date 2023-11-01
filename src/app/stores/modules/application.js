import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL_API_ORDER } from "../helper";

export const useApplicationStore = defineStore('application', () => {
    const applicationAsyncCreate = async (data) => {
        return axios.post(BACKEND_URL_API_ORDER + '/submit', data);
    }

    return { applicationAsyncCreate };
});