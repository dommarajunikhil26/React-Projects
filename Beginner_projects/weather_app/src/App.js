import { Fragment, useState } from "react";
import Header from './UI/Header';
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

const App = () => {
    const [cityName, setCityName] = useState("");

    const handleFormSubmit = (value) => {
        setCityName(value);
    }

    return (
       <Fragment>
            <Header/>
            <SearchBar onFormSubmit={handleFormSubmit}/>
            <Weather cityName={cityName}/>
        </Fragment>
    )
}

export default App;