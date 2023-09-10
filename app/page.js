"use  client";

import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import About from '@/components/About'
import Product from '@/components/Product'
import Team from '@/components/Team';

const page = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Timeline />
      <About />
      <Product/>
      <Team/>
    </>
  )
}

export default page
