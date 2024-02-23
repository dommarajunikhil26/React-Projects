/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { firebase } from '../../firebase';
import { signOut } from 'firebase/auth';

import mcitylogo from '../../Resources/Images/logos/manchester_city_logo.png';


export const CityLogo = (props) => {
    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background:`url(${mcitylogo}) no-repeat`
        }}
    ></div>

    if(props.link){
        return (
            <Link className="link_logo" to={props.linkTo}>
                {template}
            </Link>
        )
    } else {
        return template
    }

}

export const showToastError = (msg) => {
    toast.error(msg, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

export const showToastSuccess = (msg) => {
    toast.success(msg, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}


export const logoutHandler = (navigate) => {

    signOut(firebase).then(() => {
        showToastSuccess("Good Bye");
        navigate('/sign_in');
    }).catch((error) => {
        showToastError(error.message);
    });
}

export const Tag = (props) => {
    const template = <div
        style={{
            background: props.bck ? props.bck : '#ffffff',
            fontSize: props.size ? props.size : '15px',
            color: props.color ? props.color : '#000000',
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily: 'Righteous',
            ...props.add
        }}
    >
        {props.children}
    </div>;

    if(props.link){
        return(
            <Link to={props.linkTo}>
                {template}
            </Link>
        ) 
    }else{
        return template
    }

}
