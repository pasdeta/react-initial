import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
});

const setAuthToken = (authToken) => {
    instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
}

export {
    setAuthToken
}

export default instance;
