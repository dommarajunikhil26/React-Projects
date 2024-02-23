import Button from '@mui/material/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return(
        <Button 
            href={props.link}
            variant="contained" 
            sizee={props.size ? props.size : "large"}
            style={{
                color: '#ffffff',
                background: '#ffa800',
                ...props.style
            }}
        >
            <img 
                src={TicketIcon}
                className='iconImage'
                alt='icon_buton'
            />
            {props.text}
        </Button>
    )
}

export default MyButton;