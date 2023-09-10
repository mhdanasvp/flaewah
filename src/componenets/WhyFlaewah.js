import React from 'react'
import flaewah from "../images/flaewah-group.png"


const WhyFlaewah = () => {
  return (
    <div className='flaewah-why'>
      <div className="flaewah-why-left">
        <h1 className='flaewah-why-title'>Why FlaeWah</h1>
        <p> The unique blend of spices and herbs that will elevate your cooking game to new heights! Our carefully crafted recipe delivers bold and authentic flavors that are easy to use and perfect for any dish. Made with only the freshest and highest quality ingredients, Flaewah promises to be the perfect addition to your pantry. Join the thousands of satisfied customers and discover the magic of FLAEWAH today!</p>
      </div>
      <div className="flaewah-why-right">
        <img src={flaewah} alt="flaewah" />
      </div>
    </div>
  )
}

export default WhyFlaewah