import React from 'react'

import banner1 from "../images/Beef Roast.png"
import banner2 from "../images/Chicken curry.png"
import banner3 from "../images/Fish Curry.png"
import banner4 from "../images/Pepper Chciken.png"



const Experience = () => {
    return (
        <div className="exp-container">
            <h1 className='flaewah-title'>Experience the Exotic Flavors <br />
                with Our Premium Curry Paste</h1>
            <div className="experince-cards">
                <div className="experince-card">
                    <img src={banner1} alt="" />
                    <p>Kerala Style
                        Chicken Curry Paste</p>
                </div>
                <div className="experince-card">
                    <img src={banner2} alt="" />
                    <p>Kerala Style
                        Chicken Curry Paste</p>
                </div>
                <div className="experince-card">
                    <img src={banner3} alt="" />
                    <p>Kerala Style
                        Chicken Curry Paste</p>
                </div>
                <div className="experince-card">
                    <img src={banner4} alt="" />
                    <p>Kerala Style
                        Chicken Curry Paste</p>
                </div>
            </div>
        </div>
    )
}

export default Experience