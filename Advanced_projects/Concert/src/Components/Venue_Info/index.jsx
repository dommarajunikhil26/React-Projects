import { Zoom } from 'react-awesome-reveal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const VenueInfo = () => {
    return (
        <div className='bg-gray-800 py-20 md:py-44'>
            <div className='flex justify-center'>
                <div className='flex flex-col md:flex-row flex-wrap justify-around max-w-screen-lg items-stretch'>
                    <Zoom className='w-full md:w-1/2 px-4 mb-10 md:mb-0 flex' triggerOnce>
                        <div className='text-center text-white mx-auto max-w-sm flex flex-col'>
                            <div className='relative border-2 border-gray-600 p-5 flex-1 flex flex-col justify-between'>
                                <div className='flex justify-center relative' style={{ marginTop: "-3rem" }}>
                                    <div className='bg-red-500 w-24 h-24 rotate-45 absolute' style={{ top: "-1.3rem" }}></div>
                                    <CalendarMonthIcon style={{ fontSize: '3rem', color: 'white', position: 'absolute', top: "0rem" }} />
                                </div>
                                <div className='mt-24 mb-5 border-b border-gray-500 pb-2 text-2xl font-roboto'>
                                    Event Date & Time
                                </div>
                                <div className='text-3xl font-light mb-20 font-poppins'>
                                    Dec 9, 2024, 9:30:00
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom className='w-full md:w-1/2 px-4 mb-10 md:mb-0 flex' delay={400} triggerOnce>
                        <div className='text-center text-white mx-auto max-w-sm flex flex-col'>
                            <div className='relative border-2 border-gray-600 p-5 flex-1 flex flex-col justify-between'>
                                <div className='flex justify-center relative' style={{ marginTop: "-3rem" }}>
                                    <div className='bg-yellow-400 w-24 h-24 rotate-45 absolute' style={{ top: "-1.3rem" }}></div>
                                    <LocationOnIcon style={{ fontSize: '3rem', color: 'white', position: 'absolute', top: "0rem" }} />
                                </div>
                                <div className='mt-24 mb-5 border-b border-gray-500 pb-2 text-2xl font-roboto'>
                                    Event Location
                                </div>
                                <div className='text-3xl font-light mb-20 font-poppins'>
                                    690 Julia ST NW, AL 35816
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;
