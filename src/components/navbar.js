import Link from 'next/link'
import React, { useState } from 'react'
import { FaLightbulb } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className=' flex flex-col justify-between items-center w-full h-[100vh] bg-black font-mono font-bold'>

      <div style={{ background: isOpen ? '#65490A' : 'black' }} className=' flex justify-center items-end w-full h-[80px] '>
        <div className=' cursor-pointer' onClick={toggle}  ><FaLightbulb style={{ color: isOpen ? 'black' : '#65490A' }} size={30} /></div>
      </div>

      <div style={{ background: isOpen ? '#65490A' : 'black' }} className=' flex justify-center items-center w-full h-[500px] '>
        <div className=' flex justify-center items-end w-[800px] h-full'>

          <div style={{ background: isOpen ? 'url("/ısık1.png")' : 'url("/ısıksol.png")' }} className=' flex justify-center items-end pl-[125px] w-[400px] h-[300px] '>
            <button className=' text-2xl'><Link href='/'>HOME</Link></button>
          </div>

          <div style={{ background: isOpen ? 'url("/ısık2.png")' : 'url("/ısıksag.png")' }} className=' flex justify-center items-end pr-[125px] w-[400px] h-[300px] '>
            <button className=' text-2xl'><Link href='/AboutPage'>ABOUT</Link></button>
          </div>

        </div>
        <div className=' flex justify-center items-end w-[800px] h-full'>

          <div style={{ background: isOpen ? 'url("/ısık1.png")' : 'url("/ısıksol.png")' }} className=' flex justify-center items-end pl-[125px] w-[400px] h-[300px] '>
            <button className=' text-2xl'><Link href='https://github.com/emreakiin'>GİTHUB</Link></button>
          </div>

          <div style={{ background: isOpen ? 'url("/ısık2.png")' : 'url("/ısıkdag.png")' }} className=' flex justify-center items-end pr-[125px] w-[400px] h-[300px] '>
          <button className=' text-2xl'><Link href='/ContactPage'>CONTACT</Link></button>
          </div>

        </div>
      </div>
      <div style={{ background: isOpen ? 'url("/footer.png")' : 'url("/footersiyah.png")' }} className=' flex justify-between items-center w-full h-[300px] '>

      </div>
    </div>

  )
}

export default Navbar