import MainLayout from "./hoc/mainLayout";
import Header from "./components/navigation/headers";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import RegisterLogin from "./components/auth";
import Dashboard from "./components/Dashboard";
import Loader from "./components/utils/loader";
// import AuthGuard from "./hoc/authGuard";
import UserInfo from "./components/Dashboard/admin/info";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { userIsAuth, userSignOut } from "./store/actions/user.actions";

const App = () => {
  const [loading, setLoading] = useState(true);
  const users = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;

  const signOutUser = () => {
    dispatch(userSignOut());

  }

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
        <Loader full={true} />
        :
        <>
          <Header
            users={users}
            signOutUser={signOutUser}
          />
          <MainLayout>
            <Routes>
              <Route path="/sign_in" element={<RegisterLogin />} />
              {/* <Route element={<AuthGuard isAuth={users.auth} />}> */}
              <Route path="/dashboard" element={<Dashboard users={users} />} />
              <Route path="/dashboard/user/user_info" element={<UserInfo users={users} />} />
              <Route path="/" element={<Home />} />
              {/* </Route> */}
            </Routes>
          </MainLayout>
          <Footer />
        </>}
    </BrowserRouter>
  )
}

export default App;
