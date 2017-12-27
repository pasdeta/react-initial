const initialState = {
    token: null,
    user: null,
    permissions: null,
    menus: null,
    departments: null,
    selectedDepartment: null
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        default: 
            return state;
    }
}