import React from 'react'
import { NavLink } from 'react-router-dom'

const FlaewahContact = () => {
  return (
    <div className='flaewah-get-in-touch'>
        <h1>Get in touch with us!</h1>
        <p>Stay connected and get in touch with us! Whether you have a question, feedback, or just want to say hello, we're always happy to hear from you.</p>
        <NavLink to="/contact">Contact us</NavLink>
    </div>
  )
}

export default FlaewahContact