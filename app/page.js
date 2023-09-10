"use  client";

import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import About from '@/components/About'
import Product from '@/components/Product'

const page = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Timeline />
      <About />
      <Product/>
    </>
  )
}

export default page
