import { useState, useEffect } from 'react';
import classes from './Icon.module.css';

const Icon =(props) => {

    const [icon, setIcon] = useState(null);

    useEffect(() => {
        if(props.icon){
            import(`../Images/${props.icon}.svg`).then(svg => {
                setIcon(svg.default);
            }).catch(e => {
                console.log("The error is: ", e);
            });
        }
    }, [props.icon]);


    return(
        <div className={classes.icon}>
            <img src={icon} alt="Weather Icon" />
        </div>
    )
}

export default Icon;