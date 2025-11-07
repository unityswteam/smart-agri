import React from 'react'
import Mainbanner from '../../components/Markup/Mainbanner'
import AboutOne from '../../components/Markup/AboutOne'
import ServicesOne from '../../components/Markup/ServiceOne'
import BrandOne from '../../components/Markup/BrandOne'
import UnbeatableOne from '../../components/Markup/UnbeatableOne'
import HealthyFoodSection from '../../components/Markup/HealthyFoodSection'
import TestimonialOne from '../../components/Markup/TestimonialOne'
import CounterOne from '../../components/Markup/CounterOne'
import ProjectOne from '../../components/Markup/CallAndProjectOne'
import ContactOne from '../../components/Markup/ContactOne'



function home() {
  return (
    <div>

    <Mainbanner />
    <AboutOne />
    <ServicesOne />
    <BrandOne />
    <UnbeatableOne />
    <HealthyFoodSection />
    <TestimonialOne />
    <CounterOne />
    <ProjectOne />
    <ContactOne />


    </div>
  )
}

export default home