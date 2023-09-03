import Link from 'next/link'
import React, { useState } from 'react'
import { MdRoundaboutRight, MdOutlineRoundaboutLeft } from 'react-icons/md';
import { FaLightbulb } from 'react-icons/fa';
import AboutInfo from './aboutInfo';

const About = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => {
        setShowInfo(!showInfo);
      };

      const handleMatchClose = () => {
        setShowInfo(null);
    };

    return (
        <div className=' flex flex-col justify-between items-center w-full h-[100vh] bg-black font-mono font-bold'>

            <div style={{ background: isOpen ? '#65490A' : 'black' }} className=' flex justify-center items-end w-full h-[80px] '>
                <div className=' cursor-pointer' onClick={toggle}  ><FaLightbulb style={{ color: isOpen ? 'black' : '#65490A' }} size={30} /></div>
            </div>

            <div style={{ background: isOpen ? '#65490A' : 'black' }} className='flex flex-col justify-center items-center  w-full h-[500px] '>
                <div style={{ background: isOpen ? '#65490A' : 'black' }} className=' flex justify-center items-center w-full h-[200px] '>
                    <div className='flex justify-center items-center w-[250px] h-[125px] border-8 border-double border-black'>
                     <button className=' flex justify-center items-center text-3xl' onClick={toggleInfo}> <MdRoundaboutRight size={30} color='black'/> ABOUT <MdOutlineRoundaboutLeft size={30} color='black'/></button>
                   </div>
                </div>
                
                {showInfo && (<div style={{ background: isOpen ? '#65490A' : 'black' }} className=' w-full h-[500px] absolute'><AboutInfo onClose={handleMatchClose}/></div>)}

                <div style={{ background: isOpen ? '#65490A' : 'black' }} className=' flex justify-center items-center w-full h-[300px] '>
                    <div className=' flex justify-center items-end w-[800px] h-full'>

                        <div style={{ background: isOpen ? 'url("/ısık1.png")' : 'url("/ısıksol.png")' }} className=' flex justify-center items-end pl-[125px] w-[400px] h-[300px] '>
                            <button className=' text-2xl'><Link href='/'>HOME</Link></button>
                        </div>

                    </div>
                    <div className=' flex justify-center items-end w-[800px] h-full'>

                        <div style={{ background: isOpen ? 'url("/ısık2.png")' : 'url("/ısıkdag.png")' }} className=' flex justify-center items-end pr-[125px] w-[400px] h-[300px] '>
                        <button className=' text-2xl'><Link href='/ContactPage'>CONTACT</Link></button>
                        </div>

                    </div>
                </div>
                
            </div>
            <div style={{ background: isOpen ? 'url("/footer.png")' : 'url("/footersiyah.png")' }} className=' flex justify-between items-center w-full h-[300px] '>

            </div>
        </div>
    )
}

export default About