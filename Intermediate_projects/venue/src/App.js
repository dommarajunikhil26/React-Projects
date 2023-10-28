import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/Featured';

import VenueInfo from './components/venue_info/venueInfo';
import Highlights from './components/highlights/Highlights';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <>
        <Featured/>
      </>

      <>
        <VenueInfo/>
      </>

      <>
        <Highlights/>
      </>

      
      <div style={{backgroundColor: 'red', height: '800px'}} ></div>
      <div style={{backgroundColor: 'blue', height: '800px'}} ></div>
      <div style={{backgroundColor: 'green', height: '800px'}} ></div>
      <div style={{backgroundColor: 'yellow', height: '800px'}} ></div>

      <Footer/>
    </div>
  )
}

export default App;
