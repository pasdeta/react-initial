import update from 'immutability-helper';

import { AuthenticationNotifier } from '../actions/constants';

const initialState = {
    loggedIn: false,
    token: null,
    user: null,
    permissions: null,
    menus: null,
    departments: null,
    selectedDepartment: null
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case AuthenticationNotifier.SET_LOGGED_IN_STATE:
            return update(state, {
                loggedIn: {
                    $set: true
                }
            });
        case AuthenticationNotifier.SET_LOGGED_OUT_STATE:
            return update(state, {
                loggedIn: {
                    $set: false
                }
            });
        default: 
            return state;
    }
}