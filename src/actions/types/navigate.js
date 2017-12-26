import { NavigateActions } from '../constants';

const GoTo = (url) => ({
    type: NavigateActions.GO,
    payload: url
});

export default { GoTo };