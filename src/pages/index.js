import About from '@/components/about';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import React from 'react'

const Home = () => {
  return (
      <div className='bg-[url("/ressim.jpg")] bg-no-repeat bg-center bg-cover font-bold font-serif h-[961px]'>
        <Navbar/>
        <About/>
        <Contact/>

      </div>
  )
}

export default Home;
