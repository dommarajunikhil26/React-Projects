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
import AdminPlayers from './Components/Admin/Players';
import AddEditPlayers from './Components/Admin/Players/addEditPlayers';
import Team from './Components/theTeam';

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
                        <Route path="/the_team" element={<Team/>}/>
                    <Route element={<AuthGuard isAuth={isAuthenticated}/>}>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/admin_players" element={<AdminPlayers/>}/>
                        <Route path="/admin_players/add_player" element={<AddEditPlayers/>}/>
                        <Route path="/admin_players/edit_player/:playerid" element={<AddEditPlayers />} />
                    </Route>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <ToastContainer/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
