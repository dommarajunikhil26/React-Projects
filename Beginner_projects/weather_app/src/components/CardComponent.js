import classes from './CardComponent.module.css';

const CardComponent = (props) => {
    let labelClass = '';

    if(props.label2 === 'Current Temperature'){
        labelClass = classes.cityName;
    }
    return (
        <div className={`${labelClass} ${classes.card}`}>
            <h2>{props.label} </h2>
            {props.label2 === 'Current Temperature' && <h3>Current Temperature</h3>}
            <p>{props.value}&deg; C</p>
        </div>
    )
}

export default CardComponent;