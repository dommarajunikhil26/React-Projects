import { CityLogo } from '../Helper/tools';

const Footer = () => {
    return(
        <footer className='bck_blue'>
            <div className='footer_logo'>
                <CityLogo
                    link={true}
                    linkTo={'/'}
                    width="70px"
                    height="70px"
                />
            </div>
            <div className='footer_descl'>
                Manchester City 2024, All rights reserved
            </div>
        </footer>
    )
}

export default Footer;