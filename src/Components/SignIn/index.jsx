import { useState } from 'react';
import { firebase } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


import { CircularProgress } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { showToastError, showToastSuccess } from '../Helper/tools';

const SignIn = (props) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            email:'nikhild2611@gmail.com',
            password:'test@123'
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('The email is required'),
            password:Yup.string()
                .required('The email is required')
        }),
        onSubmit: (values) =>{
            setLoading(true)
            submitForm(values)
        }
    })
    
    const submitForm = (values) => {

        signInWithEmailAndPassword(firebase, values.email, values.password)
        .then(() => {
            showToastSuccess("Successfully Signed in!!");
            navigate("/dashboard");
        }).catch(error => {
            setLoading(false);
            showToastError(error.message);
        })
    }


    return(
        <>
            {props.isSignedIn ? <Navigate to="/dashboard"/> :
        <div className="container">
            <div className="signin_wrapper" style={{margin:'100px'}}>

                <form onSubmit={formik.handleSubmit}>
                    <h2>Please login</h2>
                    <input
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    { formik.touched.email && formik.errors.email ?
                        <div className="error_label">
                            {formik.errors.email}
                        </div>
                    :null}


                    <input
                        placeholder='Enter your password'
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    { formik.touched.password && formik.errors.password ?
                        <div className="error_label">
                            {formik.errors.password}
                        </div>
                    :null}

                    
                        {loading ?
                            <CircularProgress color="secondary" className="progress"/>
                        :
                            <button type="submit">Log in</button>
                        }

                 
                </form>

            </div>
        </div>
        }
        </>
        
    )

}

export default SignIn