import React from "react";
import { BrowserRouter ,Routes, Route, Link} from "react-router-dom";


import Header from "./Components/Header_Footer/header";
import Footer from "./Components/Header_Footer/footer";
import Home from "./Components/Home/home";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;