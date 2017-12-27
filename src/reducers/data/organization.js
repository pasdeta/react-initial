import update from 'immutability-helper';

import { OrganizationNotifier } from '../../actions/constants';

const initialState = {
    isLoading: false,
    data: null
};

export default (state = initialState, { type, payload }) => {

    switch(type) {
        case OrganizationNotifier.SET_LOADING:
            return update(state, {
                isLoading: {
                    $set: payload
                }
            });
        case OrganizationNotifier.SET_DATA:
            return update(state, {
                isLoading: {
                    $set: false
                },
                data: {
                    $set: payload
                }
            });
        default:
            return state;
    }
}