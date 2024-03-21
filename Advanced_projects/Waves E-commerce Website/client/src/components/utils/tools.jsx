import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const WavesButton = (props) => {
    let template = '';
    switch (props.type) {
        case "default":
            template = <Link
                className={
                    !props.altClass ? 'link_default' : props.altClass
                }
                to={props.linkTo}
                style={{
                    ...props.style
                }}
            >
                {props.title}
            </Link>
            break;
        case "bag_link":
            template =
                <div
                    className='bag_link'
                    onClick={() => {
                        props.runAction()
                    }}
                    style={{
                        ...props.style
                    }}
                >
                    <AddShoppingCartIcon style={{ fontSize: props.iconSize }} />
                </div>
            break;
        default:
            template = '';
            break;
    }
    return template;
}

export const renderCardImage = (image) => {
    if (image.length > 0) {
        return image[0]
    } else {
        return '/images/image_not_available.png'
    }
}

export const showToast = (type, msg) => {

    switch (type) {
        case 'SUCCESS':
            toast.success(msg, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            break;
        case 'ERROR':
            toast.error(msg, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            break;
        default:
            return false
    }

}

export const errorHelper = (formik, value) => ({
    error: formik.errors[value] && formik.touched[value] ? true : false,
    helperText: formik.errors[value] && formik.touched[value] ? formik.errors[value] : null
});


export const useAuthToken = () => {
    const [cookies] = useCookies(['x-access-token']);
    return cookies['x-access-token'];
};


export const getAuthHeader = (token) => {
    if (!token) {
        console.error('No auth token found');
        return {};
    }
    return { headers: { 'Authorization': `Bearer ${token}` } };
};