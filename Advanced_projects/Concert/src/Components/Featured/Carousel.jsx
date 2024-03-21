import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true
    }
    return (
        <div className="h-screen overflow-hidden">
            <Slider {...settings}>
                <div>
                    <div className="bg-cover bg-center bg-[url('../../../public/images/slide_one.jpg')] h-screen"></div>
                </div>
                <div>
                    <div className="bg-cover bg-center bg-[url('../../../public/images/slide_two.jpg')] h-screen"></div>
                </div>
                <div>
                    <div className="bg-cover bg-center bg-[url('../../../public/images/slide_three.jpg')] h-screen"></div>
                </div>
            </Slider>
        </div>
    )
}
export default Carousel;