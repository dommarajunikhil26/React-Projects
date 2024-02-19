import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './Firebase'; 
import Header from "./Components/Header_Footer/Header";
import Footer from "./Components/Header_Footer/Footer";
import SignIn from "./Components/SignIn_SignUp/SignIn";
import Home from "./Components/Home/Home";
import './styles.css';
import Shop from "./Components/Shop/Shop";
import Featured from "./Components/Featured/Featured";
import Recommended from "./Components/Recommended/Recommended";
import SignUp from "./Components/SignIn_SignUp/SignUp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
  }, []);
  return (
    <BrowserRouter>
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/recommended" element={<Recommended />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/sign_in" />} />
          )}
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;