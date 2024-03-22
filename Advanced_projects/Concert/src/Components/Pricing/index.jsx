import { Zoom } from "react-awesome-reveal";
import MyButton from "../Utility/myButton";

const Pricing = () => {
    const priceState = {
        prices: [100, 150, 200],
        position: ["Balcony", "Medium", "Star"],
        desc: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        ],
        linkto: ["https://www.facebook.com", "https://www.youtube.com", "https://www.instagram.com"],
        delay: [500, 0, 500]
    };

    const showBoxes = () => (
        priceState.prices.map((box, index) => (
            <Zoom key={index} delay={priceState.delay[index]} className="w-full sm:w-1/2 md:w-1/3 p-4">
                <div className="border-2 border-yellow-400 p-6 flex flex-col items-center shadow-lg">
                    <div className="text-white text-center border-b border-yellow-400 pb-4">
                        <span className="block text-3xl lg:text-4xl font-semibold">${priceState.prices[index]}</span>
                        <span className="text-lg lg:text-xl font-light uppercase">{priceState.position[index]}</span>
                    </div>
                    <div className="text-gray-200 text-sm lg:text-base font-light text-center my-4">
                        {priceState.desc[index]}
                    </div>
                    <div className="mt-auto w-full flex justify-center">
                        <MyButton
                            text="Purchase"
                            link={priceState.linkto[index]}
                            style={{
                                color: '#ffffff',
                                background: '#ffa800',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                textTransform: 'uppercase',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                marginTop: '10px'
                            }}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    );

    return (
        <div className="bg-gray-800 py-20">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-white uppercase text-center text-4xl sm:text-5xl mb-10">Pricing</h2>
                <div className="flex flex-wrap justify-center">
                    {showBoxes()}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
