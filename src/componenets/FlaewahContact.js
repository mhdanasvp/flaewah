import React from 'react'
import { NavLink } from 'react-router-dom'
import amazon from "../images/amazon.png"
import eatmate from "../images/eat-mate.png"
import scooter from "../images/scooter.png"

const FlaewahContact = () => {
  return (
    <div className='flaewah-get-in-touch'>
      <h1>Get in touch with us!</h1>
      <p>Stay connected and get in touch with us! Whether you have a question, feedback, or just want to say hello, we're always happy to hear from you.</p>
      <NavLink to="/contact">Contact us</NavLink>
<div className="delivery-div">
<h3>We are Now available @</h3>
      <div className="delivery">
        <img src={amazon} alt="flaewah" />
        <img src={eatmate} alt="flaewah" />
        <img src={scooter} alt="flaewah" />
      </div>
</div>
    </div>
  )
}

export default FlaewahContact