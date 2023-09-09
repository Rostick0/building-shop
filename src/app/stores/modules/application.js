import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicationStore = defineStore('application', () => {
    const applicationAsyncCreate = async (data) => {
        return axios.post('', data);
    }

    return { applicationAsyncCreate };
});