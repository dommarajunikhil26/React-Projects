/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from '../utils/loader';

import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { errorHelper } from '../utils/tools';
import { userRegister } from '../../store/actions/user.actions';
import { useNavigate } from 'react-router-dom';

const AuthForm = (props) => {
    const navigate = useNavigate();
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Sorry the email is required')
                .email('This is an invalid email'),
            password: Yup.string()
                .required('Password is required')
        }),
        onSubmit: (values) => {
            setLoading(true);
            handleSubmit(values)
        }
    })

    const handleSubmit = (values) => {
        if (props.formType) {
            dispatch(userRegister(values))
        } else {
            // signout
        }
    }

    useEffect(() => {
        if (notifications && notifications.success) {
            navigate("/dashboard");
        } else {
            setLoading(false);
        }
    }, [notifications, props.history])

    return (
        <>
            <div className="auth_container">
                {loading ?
                    <Loader />
                    :
                    <form className='mt-3' onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <TextField
                                style={{ width: '100%', marginBottom: '10px' }}
                                name='email'
                                label='Enter your email'
                                variant='outlined'
                                {...formik.getFieldProps('email')}
                                {...errorHelper(formik, 'email')}
                            />
                        </div>
                        <div className='form-group'>
                            <TextField
                                style={{ width: '100%', marginBottom: '10px' }}
                                name='password'
                                label='Enter your password'
                                variant='outlined'
                                type='password'
                                {...formik.getFieldProps('password')}
                                {...errorHelper(formik, 'password')}
                            />
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                size='small'
                            >
                                {props.formType ? 'Register' : 'Login In'}
                            </Button>
                        </div>
                    </form>
                }
            </div>

        </>
    )
}

export default AuthForm;