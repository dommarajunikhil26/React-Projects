import { React, useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import MyButton from '../utility/myButton';

const Discount = () => {

    const end = 30;

    const [start, setStart] = useState(0);

    const percentage = () => {
        if(start < end){
            setStart(prevCount => prevCount + 1)
        }
    }

    useEffect(() => {
        if(start > 0 && start < 30){
            setTimeout(() => {
                setStart(prevCount => prevCount + 1)
            }, 30)
        }
    }, [start])

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView) => {
                        if(inView){
                            percentage()
                        }
                    }}
                >
                    <div className="discount_percentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right={true}>
                    <div className="discount_description">
                        <h3>Purchase tickets before 1st December</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in. Elementum eu 
                            facilisis sed odio morbi quis commodo odio aenean. Non quam lacus suspendisse faucibus 
                            interdum posuere lorem. Consequat id porta nibh venenatis cras. Accumsan lacus vel facilisis 
                            volutpat. Tristique magna sit amet purus gravida quis blandit.
                        </p>
                        <MyButton
                            text="Purchase Tickets"
                            link="https:www.google.com"
                            size="small"
                            style={{
                                color: '#ffffff',
                                background: '#ffa800'
                            }}
                        />

                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount;

