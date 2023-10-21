import classes from './WeatherCard.module.css';
import Icon from './Icon';
import CardComponent from './CardComponent';

const WeatherCard = (props) => {

    if (!props.weather || !props.weather.city_name) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.card}>
            <div className={classes.layer1}>
                <Icon icon={props.icon}/>
                <CardComponent label={props.weather.city_name} label2="Current Temperature" value={props.weather.temp} />
            </div>
            <div className={classes.layer2}>
                <CardComponent label="Feels Like" value={props.weather.feels_like}/>
                <CardComponent label="Minimum Temperature" value={props.weather.min_temperature}/>
                <CardComponent label="Maximum Temperature" value={props.weather.max_temperature}/>
            </div>
        </div>
    )
}

export default WeatherCard;
