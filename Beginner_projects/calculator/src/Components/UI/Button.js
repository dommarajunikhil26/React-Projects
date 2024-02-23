import React from 'react';
import classes from './Button.module.css';

const Button = ({ label, onClick }) => {

    return (
        <div className={classes.button}>
            <button className={(label === '+' || label === '-' || label === '*' || label === '/') ? classes.specialButton : classes.button} onClick={() => onClick(label)}>
                <p>
                    {label}
                </p>
            </button>
        </div>
    );
}

export default Button;