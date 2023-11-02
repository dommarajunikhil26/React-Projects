const Location = () => {
    return (
       <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.5875924713305!2d-86.61934202651759!3d34.7322546908598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b7eb67325bb%3A0x238498da404a603f!2s690%20Julia%20St%20NW%2C%20Huntsville%2C%20AL%2035816!5e0!3m2!1sen!2sus!4v1698944787900!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                // style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="maps"
            >
                
            </iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
       </div>
       
    )
}

export default Location;