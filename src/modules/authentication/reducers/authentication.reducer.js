import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILED } from '../constants/authentication.constants';

const initState = {
    isLoginIn: false,
    authenticated: false,
    email: null,
    name: null
}

const authentication = (state = initState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                ...state,
                isLoginIn: true,
                email: payload.email
            }
        case REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: false,
                isLoginIn: false
            }
        case REQUEST_LOGIN_FAILED:
            return {
                ...state,
                authenticated: true,
                isLoginIn: false
            }
        default:
            return initState;
    }
}

export default authentication;