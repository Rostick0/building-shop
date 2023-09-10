import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL } from "../helper";

export const useApplicationStore = defineStore('application', () => {
    const applicationAsyncCreate = async (data) => {
        return axios.post(BACKEND_URL, data);
    }

    return { applicationAsyncCreate };
});