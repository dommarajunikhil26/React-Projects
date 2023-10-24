import { Fragment } from "react";
import classes from './Header.module.css';

const Header = () => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h2>Calculator</h2>
            </header>
        </Fragment>
    )
}

export default Header;