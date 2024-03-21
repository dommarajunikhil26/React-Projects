import Carousel from "./Carousel";
import EventDeadline from "./EventDeadline";

const Featured = () => {
    return (
        <div className="relative">
            <Carousel />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white w-96 h-40 flex justify-center items-center">
                <div className="text-white text-4xl sm:text-2xl uppercase">Ariana Grande</div>
            </div>
            <EventDeadline />
        </div>
    );
};

export default Featured;
