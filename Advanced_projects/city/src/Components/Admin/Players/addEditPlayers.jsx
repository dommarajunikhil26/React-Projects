import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../Hoc/AdminLayout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { showToastError, showToastSuccess, textErrorHelper, selectErrorHelper, selectIsError } from "../../Helper/tools";
import { db, storage } from "../../../firebase"; 
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const defaultValues = {
    name: '',
    lastname: '',
    number: '',
    position: '',
    image: null
}

const AddEditPlayers = () => {
    const [loading, setLoading] = useState(false);
    const [formType, setFormType] = useState('');
    const [values, setValues] = useState(defaultValues);
    const [imageUrl, setImageUrl] = useState(null); 
    const { playerid } = useParams(); 

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: values,
        validationSchema: Yup.object({
            name: Yup.string()
            .required('This input is required'),
            lastname: Yup.string()
            .required('This input is required'),
            number: Yup.number()
            .min(0, 'The minimum is 0')
            .max(100, 'The max is 100')
            .required('This input is required'),
            position: Yup.string()
            .required('This input is required'),
            image: Yup.mixed() 
            .required('Image is required')
        }),
        onSubmit:(values) => {
            submitForm(values);
        }
    })

    const handleImageChange = (e) => {
        setValues({ ...values, image: e.target.files[0] });
    };

    const submitForm = async (values) => {
        setLoading(true);
        let imageUrl = '';

        try {
            const storageRef = ref(storage, `playerImages/${values.image.name}`);
            await uploadBytes(storageRef, values.image);
            imageUrl = await getDownloadURL(storageRef);
        } catch (error) {
            setLoading(false);
            showToastError('Failed to upload image: ' + error.message); 
            return;
        }

        const dataToSubmit = { ...values, image: imageUrl };

        try {
            if (formType === 'add') {
                await addDoc(collection(db, 'players'), dataToSubmit);
                formik.resetForm();
                showToastSuccess("Player Successfully added!!");
            } else {
                await setDoc(doc(db, 'players', playerid), dataToSubmit);
                showToastSuccess("Player info edited");
            }
        } catch (error) {
            showToastError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (playerid) {
                try {
                    const playerDoc = await getDoc(doc(db, 'players', playerid));
                    if (playerDoc.exists()) {
                        const playerData = playerDoc.data();
                        setFormType('edit');
                        setValues(playerData);

                        const imageUrl = playerData.image;
                        setImageUrl(imageUrl);
                    } else {
                        showToastError("Player not found");
                    }
                } catch (error) {
                    showToastError(error.message);
                }
            } else {
                setFormType('add');
                setValues(defaultValues);
            }
        };
        fetchData();
    }, [playerid]);

    return (
        <AdminLayout title={formType === 'add' ? 'Add Player' : 'Edit Player'}>
            <div className="editplayers_dialog_wrapper">
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <hr/>
                        <h4>Player info</h4>
                        {imageUrl && (
                            <img src={imageUrl} alt="Player" />
                        )}
                        <div className="mb-5">
                            <FormControl>
                                <TextField 
                                    id="name"
                                    name="name"
                                    variant="outlined"
                                    placeholder="Add firstname"
                                    {...formik.getFieldProps('name')}
                                    {...textErrorHelper(formik, 'name')}
                                />
                            </FormControl>
                        </div>
                        <div className="mb-5">
                            <FormControl>
                                <TextField 
                                    id="lastname"
                                    name="lastname"
                                    variant="outlined"
                                    placeholder="Add lastname"
                                    {...formik.getFieldProps('lastname')}
                                    {...textErrorHelper(formik, 'lastname')}
                                />
                            </FormControl>
                        </div>
                        <div className="mb-5">
                            <FormControl>
                                <TextField 
                                    id="number"
                                    name="number"
                                    variant="outlined"
                                    placeholder="Add number"
                                    {...formik.getFieldProps('number')}
                                    {...textErrorHelper(formik, 'number')}
                                />
                            </FormControl>
                        </div>
                        <div className="mb-5">
                            <FormControl error={selectIsError(formik, 'position')}>
                                <Select 
                                    id="position"
                                    name="position"
                                    variant="outlined"
                                    displayEmpty
                                    {...formik.getFieldProps('position')}
                                >
                                    <MenuItem>Select Position</MenuItem>
                                    <MenuItem value="Keeper">Keeper</MenuItem>
                                    <MenuItem value="Defence">Defence</MenuItem>
                                    <MenuItem value="Midfield">Midfield</MenuItem>
                                    <MenuItem value="Striker">Striker</MenuItem>
                                </Select>
                                {selectErrorHelper(formik, 'position')}
                            </FormControl>
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            { formType === 'add' ? 'Add Player' : 'Edit Player'}
                        </Button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddEditPlayers;
