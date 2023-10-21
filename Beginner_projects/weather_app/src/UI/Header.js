import { Fragment } from "react";
import classes from './Header.module.css';

const Header = () => {
    return(
        <Fragment>
            <div className={classes.header}>
                <h1>Weather App</h1>
            </div>
            
        </Fragment>
    )
}

export default Header;