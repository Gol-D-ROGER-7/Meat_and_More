import React from 'react'
import Event1 from '../images/events1.png';
import Event2 from '../images/events2.png'
import Event3 from '../images/events3.png'
import Event4 from '../images/event4.png'

const Events = () => {
  return (
    <>
        <div className="event-heading">
            <h1>In our restaurant, we take great pleasure in organizing a variety of events to create memorable experiences for our guests. Whether you are celebrating a special occasion, hosting a corporate gathering, or simply looking for a unique dining experience, our events are designed to cater to your needs.</h1>
        </div>
        <div className="event-images">
            <img src={Event1} alt="eventthumbs" />
            
            <img src={Event2} alt="eventthumbs" />
            <img src={Event3} alt="eventthumbs" />
            <img src={Event4} alt="eventthumbs" />
        </div>
    </>
  )
}

export default Events
