import { motion } from "framer-motion";
import { CityLogo } from "../../Helper/tools";

const Featured = () => {
    return (
        <div className="featured_wrapper">
            <motion.div
                className="stripe"
                style={{
                    width: 150,
                    height: 1300,
                    background: "#98c5e9",
                    margin: "20px auto",
                    y: "-30%",
                }}
                animate={{
                    x: ["-800%", "40%"], 
                    rotate:[0, 30],
                }}
                transition={{
                    duration: 2.7, // Adjust duration as needed
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="stripe"
                style={{
                    width: 150,
                    height: 1400,
                    background: "#ffffff",
                    margin: "20px auto",
                    y: "-30%",
                }}
                animate={{
                    x: ["-700%", "45%"], // Move from left (-100%) to right (100%)
                    rotate:[0, 30],
                }}
                transition={{
                    duration: 2.1, // Adjust duration as needed
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="stripe"
                style={{
                    width: 150,
                    height: 1300,
                    background: "#98c5e9",
                    margin: "20px auto",
                    y: "-30%",
                }}
                animate={{
                    x: ["-600%", "50%"], // Move from left (-100%) to right (100%)
                    rotate:[0, 30],
                }}
                transition={{
                    duration: 1.5, // Adjust duration as needed
                    ease: "easeInOut"
                }}
            />
            <motion.div
                style={{
                    fontFamily: 'Righteous',
                    fontSize: '100px',
                    color: '#ffffff',
                    position: 'absolute',
                    top: '40%',
                    margin: 'auto',
                    transform: 'translateY(-50%)',
                    background: '#0e1731',
                    height: '150px',
                    width: '900px',
                    borderRadius: '10px',
                    
                }}
                animate={{
                    x: ["900%", "50%"], // Move from left (-100%) to right (100%)
                    // rotate:[0, 30],
                }}
                transition={{
                    duration: 2.5, // Adjust duration as needed
                    ease: "easeInOut"
                }}
            >
                <div className='footer_logo'>
                    Manchester City 
                    <CityLogo
                        link={true}
                        linkTo={'/'}
                        width="80px"
                        height="80px"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Featured;
