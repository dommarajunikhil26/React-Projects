import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { CircularProgress } from '@mui/material';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {showToastError, showToastSuccess} from '../../Helper/tools';

const Enroll = () => {
    const [loading,setLoading] = useState(false);

    const formik = useFormik({
        initialValues:{ email:''},
        validationSchema: Yup.object({
            email:Yup.string()
            .email('Invalid email')
            .required('The email is required')
        }),
        onSubmit:( values,{ resetForm} )=>{
            setLoading(true);
            submitForm(values)
        }
    });


    const submitForm = async (values) => {
    try {
        const querySnapshot = await getDocs(collection(db, "promotions"));
        const emails = querySnapshot.docs.map(doc => doc.data().email); 

        if (emails.includes(values.email)) {
            formik.resetForm();
            showToastError("Email is already subscribed.");
        } else {
            await db.collection("promotions").add({ email: values.email });
            formik.resetForm();
            showToastSuccess("Email subscribed successfully!");
        }
    } catch (error) {
        console.error("Error checking email:", error);
        showToastError("An error occurred. Please try again later.");
    } finally {
        setLoading(false); // Set loading to false regardless of success or failure
    }
};


    return(
        <Fade>
           <div className="enroll_wrapper">
                <form onSubmit={formik.handleSubmit}>
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="enroll_input">

                        <input
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter your email"
                        />

                        { formik.touched.email && formik.errors.email ?
                            <div className="error_label">
                                {formik.errors.email}
                            </div>
                        :null}

                        { loading ? 
                            <CircularProgress color="secondary" className="progress"/>
                            :
                            <button
                                type="submit"
                            >
                                Enroll
                            </button>
                        }

                        <div className="enroll_discl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>


                    </div>
                </form>
           </div>
        </Fade>
    )
}

export default Enroll