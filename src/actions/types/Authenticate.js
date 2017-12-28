import { AuthenticationActions } from '../constants';

const Login = (data, department) => ({
    type: AuthenticationActions.Login,
    payload: { data, department }
});

export default { Login };