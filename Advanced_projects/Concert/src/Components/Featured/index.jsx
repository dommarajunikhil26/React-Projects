import { Fade } from "react-awesome-reveal";
import Carousel from "./Carousel";
import EventDeadLine from "./EventDeadline";


const Featured = () => {
    return (
        <div className="relative">
            <Carousel />
            <Fade triggerOnce delay={200}>
                <div className="absolute top-1/2 left-1/2 max-w-xs lg:max-w-md xl:max-w-lg transform -translate-x-1/2 -translate-y-1/2 border-2 border-white px-4 py-2">
                    <div className="border-2 border-white text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase p-2 sm:p-4">
                        ARIANA GRANDE
                    </div>
                </div>
            </Fade>
            <EventDeadLine />
        </div>
    )
}
export default Featured;