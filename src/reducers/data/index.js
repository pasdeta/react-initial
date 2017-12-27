import { combineReducers } from 'redux';

import OrganizationReducer from './organization';

export default combineReducers({
    organizations: OrganizationReducer
});