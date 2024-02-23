import { useState, Fragment } from 'react';
import UserInput from './UserInput';
import classes from './UserList.module.css';
import { useTaskContext } from './TaskContext';

const UserList = (props) => {

    const { totalTasks, setTotalTasks, completedNumberOfTasks, setCompletedNumberOfTasks, countOfPendingTasks, setCountOfPendingTasks } = useTaskContext();

    const [todos, setTodos] = useState([]);


    const addTodo = (input, count) => {
        const newTodo = {
            input: input
        };

        setTodos([...todos, newTodo]);

        setTotalTasks(count);
        setCountOfPendingTasks(todos.length + 1);
    }

    const checkboxInputHandler = (event, index) => {
        const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
        setTodos(updatedTodos);
        setCountOfPendingTasks(countOfPendingTasks - 1); // Decrement the count of pending tasks
    }

    const checkboxClickCountHandler = () => {
        if (completedNumberOfTasks < totalTasks) {
            setCompletedNumberOfTasks(completedNumberOfTasks + 1);
            setCountOfPendingTasks(countOfPendingTasks - 1); // Decrement the count of pending tasks
        }
    }

    

    return (
        <Fragment>  
            <UserInput onFormSubmit={addTodo} />
                <div className={classes.container}>
                    <ul className={classes.list}>
                        {todos.map((todo, index) => ( todo.input &&
                    
                            <li className={classes.listOutput} key={index}>
                                <input 
                                    type="checkbox" 
                                    id={`checkbox-${index}-${todo.input}`}
                                    onChange={(event) => checkboxInputHandler(event, index)} 
                                    onClick={checkboxClickCountHandler}
                                />
                                {todo.input}
                            </li>
                        ))}
                    </ul>
                </div> 
        </Fragment>
    )
    
}

export default UserList