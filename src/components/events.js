import React from 'react'
import '../styles/events.css'
import registerimg from '../images/restaurant.png'
import pubimg from '../images/pub.png'
import cafeimg from '../images/cafe.png'
import concertimg from '../images/concert.png'
import eventimg from '../images/events.png'
import djimg from '../images/dj.png'
import { Link } from 'react-router-dom'


const Events = () => {
  return (
    <div className='events-section'>
        <h2 className='m-5'>Choose your Profile</h2>
        
        <Link to='/register' className='events-parent' >
            <img src={registerimg} alt="" width={120} />
             <h3>Restaurant</h3>

        </Link>
        <Link to='/register'  className='events-parent'>
            <img src={pubimg} alt="" width={120}/>
             <h3>pub</h3>

        </Link>
        <Link to='/register'  className='events-parent'>
             <img src={cafeimg} alt="" width={120}/>
             <h3>Café</h3>

        </Link>
        <Link to='/register'  className='events-parent'>
            <img src={concertimg} alt="" width={120}/>
            <h3>Concert</h3>

        </Link>
        <Link to='/register'  className='events-parent'>
            <img src={eventimg} alt="" width={120}/>
             <h3>Events</h3>

        </Link>
        <Link to='/register' className='events-parent'>
            <img src={djimg} alt="" width={120}/>
            <h3>DJ’s</h3>

        </Link>



    </div>
  )
}

export default Events