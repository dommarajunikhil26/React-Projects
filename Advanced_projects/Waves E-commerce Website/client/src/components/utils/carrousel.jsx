/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Resources/styles.css';
import { WavesButton } from "./tools";

const Carrousel = ({ items }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const handleClick = () => {
        console.log("Working");
    }

    const generateSlides = () => (
        items ?
            items.map((item, i) => (
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background: `url(${item.img})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                        <div className="featured_action" onClick={handleClick}>
                            <div className="tag title">{item.lineOne}</div>
                            <div className="tag low_title">{item.lineTwo}</div>
                            <div>
                                <WavesButton
                                    type="default"
                                    title={item.lineTitle}
                                    linkTo={item.linkTo}
                                    style={{
                                        margin: '10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
            : null
    );


    return (
        <Slider {...settings}>
            {generateSlides()}
        </Slider>
    )
}

export default Carrousel;
