import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import PhoneIcon from '@mui/icons-material/Phone';
import TimelapseIcon from '@mui/icons-material/Timelapse';

const Footer = () => {
    return (
        <footer className='bck_b_dark'>
            <div className="container">
                <div className="logo">
                    WAVES
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact Information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <ContactsIcon />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>120 Main St</div>
                                </div>
                            </div>
                            <div className="tag">
                                <PhoneIcon />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>256-xxx-xxxx</div>
                                </div>
                            </div>
                            <div className="tag">
                                <TimelapseIcon />
                                <div className="nfo">
                                    <div>Working Hours</div>
                                    <div>8:00 am - 8:00 pm</div>
                                </div>
                            </div>
                            <div className="tag">
                                <EmailIcon />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>nikhild2611@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <h2>
                            Be the first to know
                        </h2>
                        <div>
                            <div>
                                Lorem ipsum imos officia earum molestias similique ab impedit dolore possimus optio, fugit eligendi fugiat itaque omnis porro.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;