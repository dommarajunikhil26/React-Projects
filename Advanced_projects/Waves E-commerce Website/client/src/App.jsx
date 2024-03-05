import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/navigation/headers";
import Footer from "./components/navigation/footer";
import Home from "./components/home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
