import React from 'react'
import SpoonImage from '../images/spoon.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="lhome">
      <h1>Meat <span classsName="and">&</span> More</h1> <br />
      <h2>Where Meat Lovers Unite!</h2>
      <Link to="/our-specials">
        <button className='menu-btn'>Our Specials</button>
      </Link>
    </div>
      <div className="spoonImg">
        <img src={SpoonImage} alt="spoonImg" />
      </div>
    </div>
  )
}

export default Home
