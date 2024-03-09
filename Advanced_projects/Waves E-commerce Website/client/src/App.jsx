import { BrowserRouter } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Header from "./components/navigation/headers";
import Footer from "./components/navigation/footer";
import Home from "./components/home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Home />
      </MainLayout>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
