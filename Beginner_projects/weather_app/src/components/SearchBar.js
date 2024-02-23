import React, { useState } from 'react';
import classes from './SearchBar.module.css';

const SearchBar = ({ onFormSubmit }) => {
    const [input, setInput] = useState('');

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        onFormSubmit(input); // Pass the input value to the parent component
        setInput(''); // Clear the input field after form submission
    }

    return (
        <div className={classes.search}>
            <form onSubmit={formSubmitHandler} >
                <input type="text" id="search" placeholder='Enter a City..' value={input} onChange={inputChangeHandler} /> 
            </form>
        </div>
    );
}

export default SearchBar;
