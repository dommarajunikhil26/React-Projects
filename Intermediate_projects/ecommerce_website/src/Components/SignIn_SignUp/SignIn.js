import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import classes from './SignIn.module.css';
import '../../Firebase';
import GoogleIcon from '../../Resources/GoogleIcon';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            setError(false);
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setEmail('');
            setPassword('');
            setError(true);
            console.log(errorCode, errorMessage);
        });
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user.displayName)
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                </Box>
                {error && <p className={classes.error}>Invalid Credentials</p>}
                <Box marginBottom={2} display="flex" justifyContent='center'>
                    <Button variant="contained" type='submit'>Login</Button>
                </Box>
                
                <Link to="/sign_up" className={classes.signUpLink}><p>Don't have an account?</p></Link>

                <Box display="flex" justifyContent="center">
                    <Button 
                        component="label" 
                        variant="contained" 
                        startIcon={<GoogleIcon />} 
                        sx={{
                            backgroundColor: 'white', 
                            color: 'black',
                            '&:hover':{
                                backgroundColor: 'white', 
                                color: 'black',
                            }
                        }}
                        onClick={handleGoogleSignIn}
                    >
                        Sign In with Google
                    </Button>
                </Box>


            </form>
        </Box>
    )
}

export default SignIn;