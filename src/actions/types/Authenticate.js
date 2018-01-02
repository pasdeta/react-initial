import { AuthenticationActions } from '../constants';

const Login = (data, department) => ({
    type: AuthenticationActions.Login,
    payload: { data, department }
});

const Logout = () => ({
    type: AuthenticationActions.Logout
});

export default { Login, Logout };