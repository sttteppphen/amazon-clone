import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-bef5c/us-central1/api' //the api (cloud function) URL
});

export default instance;