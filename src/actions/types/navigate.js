import { NavigateActions } from '../constants/navigate';

const Navigate = (url) => ({
    type: NavigateActions.GO,
    payload: url
});

export { Navigate };