import React from 'react'
import FlaewahBanner from '../componenets/FlaewahBanner'
import FlaewahFooter from '../componenets/FlaewahFooter'
import FlaewahNavbar from '../componenets/FlaewahNavbar'
import HowToCook from '../componenets/HowToCook'

const FlaewahHomeScreen = () => {
    return (
        <div>
            <FlaewahNavbar />
            <FlaewahBanner/>
            <HowToCook/>
            <FlaewahFooter/>
        </div>
    )
}

export default FlaewahHomeScreen