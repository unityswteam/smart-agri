import React from 'react'
import Mainbanner from '../components/Markup/home/Mainbanner'
import About from '../components/Markup/home/AboutSection'
import ServicesOne from '../components/Markup/home/Service'
import BrandOne from '../components/Markup/home/Brand'
import UnbeatableOne from '../components/Markup/home/Unbeatable'
import HealthyFoodSection from '../components/Markup/home/HealthyFoodSection'
import TestimonialOne from '../components/Markup/home/Testimonial'
import CounterOne from '../components/Markup/home/Counter'
import ProjectOne from '../components/Markup/home/CallAndProject'
import ContactOne from '../components/Markup/home/Contact'
import BlogOne from '../components/Markup/home/BlogSection'
import CtaOne from '../components/Markup/home/CtaBg'



function home() {
  return (
    <div>

    <Mainbanner />
    <About />
    <ServicesOne />
    <BrandOne />
    <UnbeatableOne />
    <HealthyFoodSection />
    <TestimonialOne />
    <CounterOne />
    <ProjectOne />
    <ContactOne />
    <BlogOne />
    <CtaOne />



    </div>
  )
}

export default home