import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/flaewah-logo.png"
import insta from "../images/insta.png"
import fb from "../images/fb.png"
import twitter from "../images/twitter.png"
import lin from "../images/lin.png"
const FlaewahFooter = () => {
    return (
        <div className='flaewah-footer'>
            <div className="flaewah-footer-div">
                <div className="flaewah-footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-quick-links">
                    <h3 className="footer-title">Quik Links</h3>
                    <NavLink to="/about" className="footer-link">Join with us</NavLink>
                    <NavLink to="/about" className="footer-link">Our services</NavLink>
                </div>
                <div className="footer-quick-about">
                <h3 className="footer-title">About</h3>
                    <NavLink to="/about" className="footer-link">About us</NavLink>
                    <NavLink to="/about" className="footer-link">Why choose us</NavLink>
                    <NavLink to="/about" className="footer-link">Meet our team</NavLink>
                </div>
                <div className="footer-quick-support">
                <h3 className="footer-title">Support</h3>
                    <NavLink to="mailto:into@lafareinternational.com" className="footer-link">Support center</NavLink>
                    <NavLink to="mailto:into@lafareinternational.com" className="footer-link">Customer care</NavLink>
                    <NavLink to="mailto:into@lafareinternational.com" className="footer-link">FAQ</NavLink>
                </div>
                <div className="footer-quick-empty">
                </div>
                <div className="footer-quick-social">
                <NavLink to="https://instagram.com/flaewahindia?igshid=OGQ5ZDc2ODk2ZA==" className="footer-link"><img src={insta} alt="" /></NavLink>
                <NavLink to="https://www.facebook.com/profile.php?id=100088145319409" className="footer-link"><img src={fb} alt="" /></NavLink>
                {/* <NavLink to="/about" className="footer-link"><img src={twitter} alt="" /></NavLink> */}
                <NavLink to="https://www.linkedin.com/company/flaewah/" className="footer-link"><img src={lin} alt="" /></NavLink>
                </div>
            </div>
            <div className="footer-bottom">
                <h5>Lafare international, 2022 All rights reserved</h5>
            </div>

        </div>
    )
}

export default FlaewahFooter