import React, { useState } from 'react'
import backgroundMap from "../images/bgc-map.png"
import Spacer from '../componenets/Spacer'
import verifed from "../images/lucide_verified.png"
import FlaewahNavbar from '../componenets/FlaewahNavbar'
import FlaewahFooter from '../componenets/FlaewahFooter'
const url = "https://script.google.com/macros/s/AKfycbyMAztZkRIqZM2aE5rxvPQX_5HXE3C_Ja7ndUrKe2yOcrxAcxnD0flQLqmQ1crgjm7Q/exec"
const ContactUs = () => {
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const [failed, setFailled] = useState(false)
    const [popup, setPopup] = useState(false)


    const submitReview = async () => {
        setPopup(true)
        let fd = new FormData()
        fd.append("email", email)
        fd.append("name", name)
        fd.append("message", message)
        fd.append("mobile", mobile)
        fd.append("date", new Date())
        fd.append("product", "flaewah")
        try {
            let data = await fetch(url, { method: "POST", body: fd })
            if (data && data.status && data.status === 200) {
                setSuccess(true)
                setEmail("")
                setMessage("")
                setMobile("")
                setName("")
                setTimeout(() => {
                    setPopup(false)
                    setSuccess(false)
                }, 1000);
            } else {
                setFailled(true)
                setTimeout(() => {
                    setPopup(false)
                    setFailled(false)
                }, 1000);
            }
            setTimeout(() => {
                setPopup(false)
            }, 1000);
        } catch (error) {
            setFailled(true)
            setTimeout(() => {
                setPopup(false)
            }, 1000);
        }

    }
    return (
        <div className='flawah-contact-container'>
            <FlaewahNavbar />
            <div className="falewah-contact-title">
                <h1>Contact Us</h1>
            </div>
            <Spacer height="100px" />
            {popup && <div className='popup'>
                <div className="popup-content">
                    {failed ? <div className='submit-message'>
                        <h1 className='failed-text'>Failed</h1>
                        <p>Please try again </p>
                    </div> : success ? <div className='submit-message'>
                        <img src={verifed} alt="" />
                        <h1 className='success-text'>Thankyou</h1>
                        <p>We will get back to you soon </p>
                    </div> : <div className='submit-message'>
                        <h1>Loading...</h1>
                    </div>}
                </div>

            </div>}
            <div className="contact-us">
                <div className="contact-us-left">
                    <div className="contact-form">
                        <div className='form-group'>
                            <label htmlFor="">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' type="text" className="form-name" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Mobile Number</label>
                            <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile Number' type="text" className="form-name" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' type="text" className="form-name" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Message</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' type="text" className="form-name" />
                        </div>
                        <div className="submit-container">
                            <button onClick={submitReview} className='submit-button'>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="contact-us-right">
                    <img src={backgroundMap} alt="" />
                    <div className="address-div">
                        <div className="address">
                            <h3>UK</h3>
                            <p>97 west street </p>
                            <p>Harrow ,HA13EL</p>
                            <p>UNITED KINGDOM.</p>
                            <p>+44 7405 412543</p>
                        </div>
                        <div className="address">
                        <h3>INDIA</h3>
                            <p>68/1520,2nd Floor,</p>
                            <p>CM Mathew Brothers Arcade,</p>
                            <p>Chakkorathukulam, KOZHIKODE,</p>
                            <p>KERALA 673006, +91 9746 05 0774</p>
                        </div>
                    </div>
                </div>
            </div>
            <FlaewahFooter />
        </div>
    )
}

export default ContactUs