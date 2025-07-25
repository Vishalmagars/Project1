import React, { Component } from 'react'
import Hero from '../components/Home/Hero'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Testimonials from '../components/Home/Testimonials'
import CompanyProfile from '../components/Home/CompanyProfile'
import ProductShowcase from '../components/ProductPage/PropertyShowcase'
import PropertyCardSlider from '../components/Home/PropertyCardSlider'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <PropertyCardSlider />
      
        <CompanyProfile />
        <WhyChooseUs />
        <Testimonials />

      </div>
    )
  }
}
