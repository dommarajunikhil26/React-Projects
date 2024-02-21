/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Components/Header_Footer/header";
import Footer from "./Components/Header_Footer/footer";
import Home from "./Components/Home/home";
import SignIn from './Components/SignIn';
import Dashboard from "./Components/Admin/Dashboard";
import AuthGuard from "./Components/Hoc/Auth";

const App = ({user}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        setIsAuthenticated(!!user);
    }, [user]);

    return (
        <BrowserRouter>
            <Header user={user}/>
                <Routes>
                    <Route path="/sign_in" element={<SignIn isSignedIn={isAuthenticated}/>}/>
                    <Route element={<AuthGuard isAuth={isAuthenticated}/>}>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Route>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <ToastContainer/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
