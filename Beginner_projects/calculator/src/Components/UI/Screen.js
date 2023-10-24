import classes from './Screen.module.css';

const Screen = ({ value }) => {
    return <div className={classes.screen}>
        <p>
            {value}
        </p>
    </div>;
}

export default Screen;