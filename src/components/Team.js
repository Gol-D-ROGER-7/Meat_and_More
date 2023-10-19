import React from 'react';
import cook from '../images/cook img.png'
import cook2 from '../images/cook img 2.png';
import cook3 from '../images/cook img 3.png'
import manager from '../images/manager.png'

const Team = () => {
  return (
    <>
    <div className='team-heading'>
      <h1>Meat & More, relies on the collaborative efforts of a dedicated and skilled team. <br /> Each member plays a crucial role in ensuring that customers receive excellent service, delicious meals, and an enjoyable dining experience.</h1>
    </div>
    <h4 className='h4'>Our Team</h4>
    <div className="team-img-container">
      <div className="img-card">
        <img src={cook} alt="team_images" />
        <h5 className='img-card-name'>Liam Johnson</h5>
        <h5 className='img-card-title'>Founder</h5>
        <p className='card-para'>Liam Johnson is driving force behind the creation and establishment of Meat & More, shaping its identity, and setting the stage for success.</p>
      </div>

      <div className="img-card">
        <img src={cook2} alt="team_images" />
        <h5 className='img-card-name'>Daniel Lee</h5>
        <h5 className='img-card-title'>Head Chef</h5>
        <p className='card-para'>Chef Daniel Lee is the creative mastermind behind the delectable dishes served in the restaurant.</p>
      </div>
      <div className="img-card">
        <img src={manager} alt="team_images" />
        <h5 className='img-card-name'>Grace Miller</h5>
        <h5 className='img-card-title'>Manager</h5>
        <p className='card-para'>Our manager is responsible for overseeing all aspects of the establishment. She is the backbone of the dining experience.</p>
      </div>

      <div className="img-card">
        <img src={cook3} alt="team_images" />
        <h5 className='img-card-name'>Noah Martinez</h5>
        <h5 className='img-card-title'>Sous Chef</h5>
        <p className='card-para'>Assisting the head chef, the sous chef helps oversee the kitchen operations. They ensure that everything runs smoothly.</p>
      </div>

    </div>
    </>
  )
}

export default Team
