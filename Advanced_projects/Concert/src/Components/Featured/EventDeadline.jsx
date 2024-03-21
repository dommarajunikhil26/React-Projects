import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const EventDeadline = () => {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
    });

    const keys = Object.keys(time);

    const renderItem = (time, value, isLast) => {
        return (
            <div className={`flex flex-col items-center ${isLast ? '' : 'border-r border-[#F44336]'} pr-4 md:mr-4 md:pr-12 last:pr-0`}>
                <div className={`font-bold ${isLast && 'md:text-5xl'} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>
                    {time}
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg uppercase pt-2">
                    {value}
                </div>
            </div>
        );
    };

    const getTimeUntil = (deadline) => {
        const timeUntil = Date.parse(deadline) - Date.parse(new Date());
        if (timeUntil > 0) {
            const seconds = Math.floor((timeUntil / 1000) % 60);
            const minutes = Math.floor((timeUntil / 1000 / 60) % 60);
            const hours = Math.floor((timeUntil / (1000 * 60 * 60)) % 24);
            const days = Math.floor((timeUntil / (1000 * 60 * 60 * 24)));

            setTime({
                days,
                hours,
                minutes,
                seconds,
            });
        }
    };

    useEffect(() => {
        const timer = setInterval(() => getTimeUntil('Dec 9, 2024, 9:30:00'), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Slide left delay={1000}>
            <div className="absolute bottom-0 left-0 text-white w-full sm:w-2/3 md:w-4/5 lg:w-2/3 xl:w-1/2">
                <div className="bg-[#ff4800] text-base md:text-lg lg:text-xl py-2 px-4 inline-block uppercase w-full text-left">
                    Event starts in
                </div>
                <div className="flex justify-start items-center bg-[#d93d00] py-2 px-5 gap-4 md:gap-6">
                    {keys.map((key, index) => renderItem(time[key], key.charAt(0).toUpperCase() + key.slice(1), index === keys.length - 1))}
                </div>
            </div>
        </Slide>
    );
};

export default EventDeadline;
