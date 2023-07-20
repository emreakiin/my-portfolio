import About from '@/components/about';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='bg-[url("/anaresim.jpg")] bg-no-repeat bg-cover w-full h-[2883px]  font-bold font-serif'>
        <Navbar />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default Home;
