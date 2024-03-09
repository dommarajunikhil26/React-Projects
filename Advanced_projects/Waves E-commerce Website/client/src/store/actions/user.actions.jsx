import * as actions from './index';
import axios from 'axios';

export const userRegister = (values) => {
    return async (dispatch) => {
        try {
            const user = await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/api/auth/register`, {
                email: values.email,
                password: values.password
            });
            dispatch(actions.userAuthenticate({
                data: user.data.user,
                auth: true
            }))
            console.log("Dispatch successfull");
            dispatch(actions.successGlobal('Welcome !! check your mail to verify account'))
        } catch (error) {
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}