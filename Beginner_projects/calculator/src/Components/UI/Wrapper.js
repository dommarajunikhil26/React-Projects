import Screen from './Screen';
import ButtonBox from './ButtonBox';
import classes from './Wrapper.module.css';

const Wrapper = ({ onButtonClick, expression }) => {
    return (
        <div className={classes.box}>
            <Screen value={expression}/>
            <ButtonBox onButtonClick={onButtonClick} />
        </div>
    );
}

export default Wrapper;