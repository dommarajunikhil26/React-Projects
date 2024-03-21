import { Element } from 'react-scroll';
import Footer from './Components/Header_Footer/Footer';
import Header from './Components/Header_Footer/Header';
import Featured from './Components/Featured';
import VenueInfo from './Components/Venue_Info';
import Highlights from './Components/Highlights';
import Pricing from './Components/Pricing';
import Location from './Components/Location';

const App = () => {
  return (
    <div>
      <Header />

      <Element name='featured'>
        <Featured />
      </Element>

      <Element name='venueInfo'>
        <VenueInfo />
      </Element>

      <Element name='highlights'>
        <Highlights />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name='location'>
        <Location />
      </Element>

      <Footer />
    </div>
  )
}

export default App;