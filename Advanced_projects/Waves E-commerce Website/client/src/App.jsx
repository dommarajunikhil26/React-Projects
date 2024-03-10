import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Header from "./components/navigation/headers";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import RegisterLogin from "./components/auth";
import Dashboard from "./components/Dashboard";
import Loader from "./components/utils/loader";
import { userIsAuth } from "./store/actions/user.actions";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [loading, setLoading] = useState(true);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userIsAuth())
  }, [dispatch])

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false)
    }
  }, [users])

  return (
    <BrowserRouter>
      {loading ?
        <Loader full={true} /> : <>
          <Header />
          <MainLayout>
            <Routes>
              <Route path="/sign_in" element={<RegisterLogin />} />
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </MainLayout>
          <Footer />
        </>}
    </BrowserRouter>
  )
}

export default App;
