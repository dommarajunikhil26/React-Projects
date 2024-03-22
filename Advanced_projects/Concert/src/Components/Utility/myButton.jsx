/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import TicketIcon from '../../../public/images/icons/ticket.png';

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size={props.size ? props.size : "large"}
            style={{
                color: '#ffffff',
                background: '#ffa800',
                ...props.style
            }}
            className='w-[50%] sm:w-[60%] md:w-[50%] lg:w-[40%]'
        >
            <img
                src={TicketIcon}
                className="h-5"
                alt='icon_buton'
            />
            {props.text}
        </Button>
    )
}

export default MyButton;