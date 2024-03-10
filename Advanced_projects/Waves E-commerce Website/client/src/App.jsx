import { BrowserRouter } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Header from "./components/navigation/headers";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import RegisterLogin from "./components/auth";
import Dashboard from "./components/Dashboard";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/sign_in" element={<RegisterLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
