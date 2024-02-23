import Button from "./Button";
import classes from "./ButtonBox.module.css";

const ButtonBox = ({ onButtonClick }) => {
    const buttons = ['AC', '+/-', '%', '/', '7', '8','9','*','4','5','6','-','1','2','3','+','0','.','='];

    return (
        <div className={classes.buttonBox}>
            {buttons.map((label, index) => (
                <Button key={index} label={label} onClick={onButtonClick} />
            ))}
        </div>
    );
}

export default ButtonBox;