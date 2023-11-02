import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/Featured';

import VenueInfo from './components/venue_info/venueInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/pricing';
import Location from './components/location/location';

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venuenfo">
        <VenueInfo/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location/>
      </Element>


      <Footer/>
    </div>
  )
}

export default App;
