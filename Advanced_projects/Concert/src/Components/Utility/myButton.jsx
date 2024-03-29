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
            className='w-[100%] flex flex-row'
        >
            <div className='flex flex-row justify-center'>
                <img
                    src={TicketIcon}
                    className="h-5 pr-2"
                    alt='icon_buton'
                />
                {props.text}
            </div>
        </Button>
    )
}

export default MyButton;