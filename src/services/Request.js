import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
});

const setAuthToken = (authToken) => {
    instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
};

const handleResponse = (response) => {
    const result = response.data;
    if(result.success) {

        return result.data;
    }
    
    return result.errors;
};

export {
    setAuthToken
}

const Request = {
    get: async (url, data) => {
        const response = await instance.get(url);

        return handleResponse(response);
    },
    post: async (url, data) => {
        const response = await instance.post(url, data);
        
        return handleResponse(response);
    }
}


export default Request;
