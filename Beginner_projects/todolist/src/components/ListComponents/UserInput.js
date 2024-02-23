import React, { useState } from "react";
import classes from './UserInput.module.css';

const UserInput = (props) => {

    const [input, setInput] = useState("");

    const [count, setCount] = useState(1);

    const inputHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setCount(count + 1);
        props.onFormSubmit(input, count);
        setInput('');
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="text" id="todo" placeholder="Add New.." value={input} onChange={inputHandler} />
        </form>
    )
}

export default UserInput;