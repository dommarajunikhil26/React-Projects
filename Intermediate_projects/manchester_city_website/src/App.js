import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from "./Components/Header_Footer/Header";
import Home from './Components/Home/index';
import Footer from './Components/Header_Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;
