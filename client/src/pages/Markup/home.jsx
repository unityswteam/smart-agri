import React from 'react'
import Mainbanner from '../../components/Markup/Mainbanner'
import AboutOne from '../../components/Markup/AboutOne'
import ServicesOne from '../../components/Markup/ServiceOne'
import BrandOne from '../../components/Markup/BrandOne'
import UnbeatableOne from '../../components/Markup/UnbeatableOne'
import HealthyFoodSection from '../../components/Markup/HealthyFoodSection'



function home() {
  return (
    <div>

    <Mainbanner />
    <AboutOne />
    <ServicesOne />
    <BrandOne />
    <UnbeatableOne />
    <HealthyFoodSection />


    </div>
  )
}

export default home