import { useTaskContext } from '../ListComponents/TaskContext'; 
import classes from './TaskCounter.module.css';

const TaskCounter = () => {
  const { totalTasks, completedNumberOfTasks, countOfPendingTasks } = useTaskContext();

  return (
    <div className={classes.tasks}>
        {totalTasks > 0 && (
            <>
                <p>Total Tasks: {totalTasks}</p>
                <p>Completed Tasks: {completedNumberOfTasks}</p>
                <p>Pending Tasks: {countOfPendingTasks}</p>
            </>
        )}
    </div>
  );
}

export default TaskCounter;
