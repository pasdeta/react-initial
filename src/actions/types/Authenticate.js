import { AuthenticationActions } from '../constants';

const Login = (data) => ({
    type: AuthenticationActions.Login,
    payload: data
});

export default { Login };