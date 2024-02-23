import classes from './Footer.module.css';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Fade triggerOnce delay={500}>
                <div className={classes.footer_title}>Lenscart</div>
                <div className={classes.footer_copyright}>Made by Nikhil</div>
            </Fade>
        </footer>
    )
}

export default Footer;