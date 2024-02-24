import { useEffect, useState } from "react";
import AdminLayout from "../../Hoc/AdminLayout";

import { useFormik } from "formik";
import * as Yup from 'yup';

import { showToastError, showToastSuccess } from "../../Helper/tools";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const defaultValues = {
    name: '',
    lastname: '',
    number: '',
    position: ''
}

const AddEditPlayers = (props) => {
    const [formType, setFormType] = useState('');
    const [values, setValues] = useState(defaultValues);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: values,
        validationSchema: Yup.object({
            name: Yup.string()
            .required('This input is required'),
            lastname: Yup.string()
            .required('This input is required'),
            number: Yup.number()
            .min('0', 'The minimum is 0')
            .max('100', 'The max is 100')
            .required('This input is required'),
            position: Yup.string()
            .required('This input is required'),
        })
    })

    useEffect(() => {
    if (props.match && props.match.params) {
        const param = props.match.params.playerid;
        if (param) {
            // Go to db and do something
            setFormType('edit');
            setValues({ name: 'Player name' });
        } else {
            setFormType('add');
            setValues(defaultValues);
        }
    }
}, [props.match]);

console.log(formType, values);


    return (
        <AdminLayout>
            content
        </AdminLayout>
    )
}

export default AddEditPlayers;