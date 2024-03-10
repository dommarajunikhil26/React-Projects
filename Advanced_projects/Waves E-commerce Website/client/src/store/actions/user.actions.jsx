import * as actions from './index';
import axios from 'axios';
import { getAuthHeader } from '../../components/utils/tools';
import cookie from 'react-cookies';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const userRegister = (values) => {
    return async (dispatch) => {
        try {
            const user = await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/api/auth/register`, {
                email: values.email,
                password: values.password
            });
            dispatch(actions.userAuthenticate({ data: user.data.user, auth: true }))
            dispatch(actions.successGlobal('Welcome !! check your mail to verify account'))
        } catch (error) {
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const userSignIn = (values) => {
    return async (dispatch) => {
        try {
            const user = await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/api/auth/signin`, {
                email: values.email,
                password: values.password
            })
            dispatch(actions.userAuthenticate({ data: user.data.user, auth: true }))
            dispatch(actions.successGlobal('Welcome!!'))
        } catch (error) {
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const userIsAuth = (token) => {
    return async (dispatch) => {
        try {
            if (!token) {
                throw new Error('No token provided');
            }
            const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/auth/isauth`, getAuthHeader(token));
            dispatch(actions.userAuthenticate({ data: response.data, auth: true }))
        } catch (error) {
            dispatch(actions.userAuthenticate({ data: {}, auth: false }))
        }

    }
}

export const userSignOut = () => {
    return async (dispatch) => {
        cookie.remove('x-access-token', { path: '/' });
        dispatch(actions.userSignOut());
        dispatch(actions.successGlobal('Successfully signed out'));
    }
}