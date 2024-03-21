import { Slide } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';

const EventDeadline = () => {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    });

    const renderItem = (time, value) => {
        return (
            <div className='countdown_item'>
                <div className='countdown_time'>
                    {time}
                </div>
                <div className='countdown_tag'>
                    {value}
                </div>
            </div>
        )
    }

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60)
        const minutes = Math.floor((time / 1000 / 60) % 60)
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
        const days = Math.floor((time / (1000 * 60 * 60 * 24)))

        setTime({
            days,
            hours,
            minutes,
            seconds
        })
    }

    useEffect(() => {
        setInterval(() => getTimeUntil('Dec 9, 2024, 9:30:00'), 1000)
    }, [])

    return (
        <Slide left delay={1000}>
            <div className='absolute bottom-0 text-white'>
                <div className='bg-orange-600 text-lg uppercase p-2 inline-block'>Event starts in</div>
                <div className='flex bg-orange-700 p-3'>
                    {renderItem(time.days, 'Days')}
                    {renderItem(time.hours, 'Hrs')}
                    {renderItem(time.minutes, 'Min')}
                    {renderItem(time.seconds, 'Sec')}
                </div>
            </div>
        </Slide>
    );
};

export default EventDeadline;
