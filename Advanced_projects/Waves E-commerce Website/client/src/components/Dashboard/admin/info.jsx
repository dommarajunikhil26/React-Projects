/* eslint-disable react/prop-types */
import DashboardLayout from "../../../hoc/dashboardLayout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { errorHelper } from "../../utils/tools";

import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";

const UserInfo = ({ users }) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        enableReinitialize: true, //reset the form on user prop change
        initialValues: {
            firstname: users.data.firstname,
            lastname: users.data.lastname,
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .min(3, '3 characters minimum')
                .max(45, 'Maximum 45 characters')
                .required('Firstname is required'),
            lastname: Yup.string()
                .min(3, '3 characters minimum')
                .max(45, 'Maximum 45 characters')
                .required('Firstname is required'),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <DashboardLayout title="User information">
            <form className="mt-3 article_form" style={{ maxWidth: '250px', marginLeft: '10px' }}
                onSubmit={formik.handleSubmit}
            >
                <div className="form-group">
                    <TextField
                        style={{ width: '100%' }}
                        name="firstname"
                        label="Enter your firstname"
                        variant="outlined"
                        {...formik.getFieldProps('firstname')}
                        {...errorHelper(formik, 'firstname')}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        style={{ width: '100%' }}
                        name="lastname"
                        label="Enter your lastname"
                        variant="outlined"
                        {...formik.getFieldProps('lastname')}
                        {...errorHelper(formik, 'lastname')}
                    />
                </div>
                <Button
                    className="mb-3"
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Edit Profile
                </Button>
            </form>
        </DashboardLayout>
    )
}

export default UserInfo;