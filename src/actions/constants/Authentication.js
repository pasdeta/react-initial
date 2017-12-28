const AuthenticationActions = {
    Login: "AuthenticationActions/Login",
    Logout: "AuthenticationActions/Logout",
};

const AuthenticationNotifier = {
    SET_LOGGED_IN_STATE: 'AuthenticationNotifier/SetLoggedInState',
    SET_USER: 'AuthenticationNotifier/SetUser'
};

export { AuthenticationActions, AuthenticationNotifier };