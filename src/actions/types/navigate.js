import { NavigateActions } from '../constants/navigate';

const GoTo = (url) => ({
    type: NavigateActions.GO,
    payload: url
});

export default { GoTo };