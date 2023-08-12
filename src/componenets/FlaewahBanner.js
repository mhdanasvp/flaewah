import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import banner1 from "../images/Beef Roast.png"
import banner2 from "../images/Chicken curry.png"
import banner3 from "../images/Fish Curry.png"
import banner4 from "../images/Pepper Chciken.png"

const FlaewahBanner = () => {
  const slides = [
    {
      image: banner1,
      title1: "We serve you in fifteen,",
      title2: "where satisfaction's the routine.",
      // desc: "We serve you in fifteen, where satisfaction's the routine."
    },
    {
      image: banner2,
      title1: "Unleash your favorite",
      title2: "flavors far from home",
      // desc: "Savory spices that ignite a fiery sensation"
    },
    {
      image: banner3,
      title1: "Spice up your meal with",
      title2: "effortless indian curry paste",
      // desc: "Simplify Your Cooking Process with Our Ready-to-Cook Curry Paste"
    },
    {
      image: banner4,
      title1: "Simplify Your Cooking with",
      title2: "Our Ready-to-Cook Curry Paste",
      // desc: "Discover a World of Flavors with Our Versatile Curry Paste"
    },
  ]
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0)
    }, 3000)
    return () => {
      clearInterval(slideTimer)
    }
  }, [slideIndex, slides.length])


  return (
    <div className="flaewah-banner">
      <div className="flaewah-banner-content">
        <div className="flaewah-banner-left">
          <h1>{slides[slideIndex].title1} <br />
            {slides[slideIndex].title2}</h1>
          {slides[slideIndex].desc&&<p>{slides[slideIndex].desc}</p>}
          <div className='flaewah-banner-left-links'>
            <NavLink to="https://youtube.com/@FlaeWahIndia"><img src="./play.png" alt="" /> How to cook!</NavLink>
            <NavLink to="/flaewah/contact">Contact us</NavLink>
          </div>
        </div>
        <div className="flaewah-banner-right">
          <img src={slides[slideIndex].image} alt="" />
        </div>
      </div>
      <div className="flaewah-banner-bottom">
        {slides.map((_s, i) => (<div key={i} onClick={() => setSlideIndex(i)} className={slideIndex === i ? "slide-circle active-slide" : "slide-circle"} ></div>))}
      </div>
    </div>
  )
}

export default FlaewahBanner