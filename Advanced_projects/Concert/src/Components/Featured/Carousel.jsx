import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true
    };

    return (
        <div className="relative h-screen pt-[60px]">
            <Slider {...settings}>
                <div className="h-full bg-center bg-cover bg-[url('/images/slide_one.jpg')]" ></div>
                <div className="h-full bg-center bg-cover bg-[url('/images/slide_two.jpg')]"  ></div>
                <div className="h-full bg-center bg-cover bg-[url('/images/slide_three.jpg')]" ></div>
            </Slider>
        </div>
    );
};

export default Carousel;
