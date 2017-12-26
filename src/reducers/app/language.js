import update from 'immutability-helper';

import { i18nNotifier } from '../../actions/constants';

const initialState = {
    current: null
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case i18nNotifier.SET_CURRENT_LANGUAGE:
            return update(state, {
                current: {
                    $set: payload
                }
            })
        default:
            return state;
    }
}