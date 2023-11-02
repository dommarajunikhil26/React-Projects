import MyButton from "../utility/myButton";
import { Zoom } from 'react-awesome-reveal'

const Pricing = () => {

    const PriceState = {
        prices: [100, 150, 200],
        position: ["Balcony", "Medium", "Star"],
        desc: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua standard dummy ",
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
        ],
        linkto: ["https://www.facebook.com", "https://www.youtube.com", "https://www.instagram.com"],
        delay: [500, 0, 500]
    }

    const showBoxes = () => (
        PriceState.prices.map((box, index) => (
            <Zoom key={index} className="pricing_item" delay={PriceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${PriceState.prices[index]}</span>
                        <span>{PriceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {PriceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            link={PriceState.linkto[index]}
                            style={{
                                color: '#ffffff',
                                background: '#B2BEB5'
                            }}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )
    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div>
    )
}

export default Pricing;