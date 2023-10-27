import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlideOne from '../../resources/images/slide_one.jpg';
import SlideTwo from '../../resources/images/slide_two.jpg';
import SlideThree from '../../resources/images/slide_three.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true
    };

    return (
        <div className="carousel_wrapper" style={{height: `${window.innerHeight}px`}}>
            <Slider {...settings}>
                <div>
                    <div
                        className='carousel_image'
                        style={{
                            background: `url(${SlideOne})`,
                            height: `${window.innerHeight}px`
                        }}
                        
                    >

                    </div>
                </div>
                <div>
                    <div
                        className='carousel_image'
                        style={{
                            background: `url(${SlideTwo})`,
                            height: `${window.innerHeight}px`
                        }}
                        
                    >

                    </div>
                </div>
                <div>
                    <div
                        className='carousel_image'
                        style={{
                            background: `url(${SlideThree})`,
                            height: `${window.innerHeight}px`
                        }}
                        
                    >

                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;