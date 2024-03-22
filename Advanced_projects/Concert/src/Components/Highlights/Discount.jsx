import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../Utility/myButton";

const Discount = () => {
    const end = 30;
    const [start, setStart] = useState(0);

    const percentage = () => {
        if (start < end) {
            setStart(prevCount => prevCount + 1)
        }
    }

    useEffect(() => {
        if (start > 0 && start < 30) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1)
            }, 30)
        }
    }, [start])

    return (
        <div className="flex justify-center py-5">
            <div className="w-[80%] flex flex-col items-center sm:flex sm:flex-row">
                <Fade
                    className="w-[40%] pb-5 sm:pb-0"
                    onVisibilityChange={(inView) => {
                        if (inView) {
                            percentage()
                        }
                    }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-[#ff4800] text-5xl sm:text-7xl md:text-8xl font-poppins font-semibold">{start}%</span>
                        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold font-roboto">OFF</span>
                    </div>
                </Fade>
                <Slide right={true} className="w-full sm:w-[60%]">
                    <div className="flex flex-col items-start">
                        <h3 className="pb-2 text-2xl sm:text-3xl md:text-4xl">Purchase tickets before 1st December</h3>
                        <p className="pb-5 text-base sm:text-lg md:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Repellendus deserunt sit, velit est at recusandae dolores consequuntur
                            quas sed, deleniti iste illum maiores laudantium impedit culpa laborum
                            excepturi! Eligendi, animi.
                        </p>
                        <div className="w-full md:w-[50%] flex justify-center sm:flex sm:justify-start">
                            <MyButton
                                text="Purchase Tickets"
                                link="https:www.google.com"
                                size="small"
                                className="w-full"
                                style={{
                                    color: '#ffffff',
                                    background: '#ffa800'
                                }}
                            />
                        </div>

                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount;