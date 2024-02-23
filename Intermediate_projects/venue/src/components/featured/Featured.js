import Carousel from "./Carousel";
import EventDeadline from "./EventDeadline";

const Featured = () => {
    return (
        <div className="featured_container">
            <Carousel/>
            <div className="artist_name">
                <div className="wrapper">
                    ARIANA GRANDE
                </div>
            </div>
            <EventDeadline/>
        </div>
    )
}

export default Featured;