import '../../Firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {TextField, Box, Button} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SignUp.module.css';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = ((e) => {
        e.preventDefault();
        if(e.target[2].value !== e.target[4].value){
            setEmail('');
            setPassword1('');
            setPassword2('');
            setError(true);
        } else{
            setError(false);

            createUserWithEmailAndPassword(auth, email, password1)
                .then((userCredential) => {
                    navigate('/sign_in');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setError(true);
                })
        }
    })
    return(
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh" >
            <form
                noValidate
                autoComplete='off'
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Box marginBottom={2} >
                    <TextField 
                        fullWidth 
                        required
                        label="Email" 
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box marginBottom={2}>
                    <TextField 
                        fullWidth 
                        required
                        label="Password" 
                        variant="outlined" 
                        type="password" 
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                    />
                    
                </Box>
                <Box marginBottom={2}>
                    <TextField 
                        fullWidth 
                        required
                        label="Re-enter Password" 
                        variant="outlined" 
                        type="password" 
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    
                </Box>
                {error && <p className={classes.error}>Passwords doesn't match.</p>}
                <Box marginBottom={2} display="flex" justifyContent='center'>
                    <Button variant="contained" type='submit'>Register</Button>
                </Box>
            </form>
        </Box>
    )
}

export default SignUp;