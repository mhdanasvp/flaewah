import React from 'react'
import doodle from "../images/doodle-1.png"
import cooking from "../images/cooking.png"
import tray from "../images/tray.png"
import whisk from "../images/whisk.png"
import WhyFlaewah from './WhyFlaewah'
import Spacer from './Spacer'
import Experience from './Experience'
import FlaewahContact from './FlaewahContact'




const HowToCook = () => {
  return (
    <div className="how-to-cook">
      <img className='cook-bgc' src={doodle} alt="" />
      <Spacer height="100px"/>
      <div className="how-to-cook-content">
        <h1 className='flaewah-title'>How to cook</h1>
        <h6>Add a Burst of Flavor to Your Meals with Our Authentic <br /> Curry Paste</h6>
        <div className="cook-cards">
          <div className="cook-card">
            <img src={whisk} alt="" />
            <h4>MIX</h4>
            <p>Mix me with your choosen meat/ vegetables</p>
          </div>
          <div className="cook-card">
            <img src={cooking} alt="" />
            <h4>COOK</h4>
            <p>Cook me until i'm ready</p>
          </div>
          <div className="cook-card">
            <img src={tray} alt="" />
            <h4>SERVE</h4>
            <p>Serve me with your family and loved ones</p>
          </div>
        </div>
        <Spacer height="50px"/>
        <WhyFlaewah/>
        <Spacer height="50px"/>
        <Experience/>
        <Spacer height="50px"/>
        <FlaewahContact/>
        <Spacer height="100px"/>
      </div>
    </div>
  )
}

export default HowToCook