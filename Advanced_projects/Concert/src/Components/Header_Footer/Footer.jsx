import { Fade } from "react-awesome-reveal";



const Footer = () => {
    return (
        <footer className="bg-[#ff4800] text-white flex flex-col p-5">
            <Fade triggerOnce delay={500}>
                <div className="font-righteous flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    The Venue
                </div>
                <div className="flex justify-center text-base md:text-lg lg:text-xl">
                    Musical Events
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;