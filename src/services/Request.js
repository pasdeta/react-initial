import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
});

const setAuthParameters = (authToken, departmentId) => {
    if(authToken == null || departmentId == null) {
        instance.defaults.headers.common['Authorization'] = null;
        instance.defaults.headers.common['Department-Id'] = null;
        return;
    }
    instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    instance.defaults.headers.common['Department-Id'] = `${departmentId}`;
};

const handleResponse = (response) => {
    const result = response.data;
    if(result.success) {

        return result.data;
    }
    
    return result.errors;
};

export {
    setAuthParameters
}

const Request = {
    get: async (url, data) => {
        console.log("get data", data)
        const response = await instance.get(url, { params: data }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return handleResponse(response);
    },
    post: async (url, data = null) => {
        const response = await instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        return handleResponse(response);
    }
}


export default Request;
