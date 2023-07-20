import React, { useState } from 'react'
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { AiFillMail, AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';
import About from './about';

const Contact = () => {



    return (
        <div className=' justify-center items-center flex flex-col w-full h-[961px] font-bold font-serif '>
            <div className='w-8/12 h-[661px] backdrop-blur-xl text-black flex'>
                <div className='w-5/12 py-24 pl-36 text-2xl justify-between items-start flex flex-col'>
                    <div>
                        <div>GET CONTACT</div>
                    </div>
                    <div className='space-y-10'>
                        <div className='flex items-center space-x-5'><BsFillTelephoneFill /> <div>+0 536 396 04 86</div></div>
                        <div className='flex items-center space-x-5'><AiFillMail /> <div> emrakn.24@gmail.com</div></div>
                    </div>
                    <div className='space-x-10 flex'>
                        <Link href='https://twitter.com/EmreAki41207953'><BsTwitter /></Link>
                        <Link href='https://www.instagram.com/eemreakiin/'><AiFillInstagram /></Link>
                    </div>
                </div>

                <div className='w-7/12 flex justify-center items-center'>
                    <form className='w-6/12 flex flex-col text-black space-y-6' action="/" method="post">
                        <label className='flex flex-col' for="first">First name:
                        <input className='outline-none bg-transparent p-2 border-2 border-solid border-black' type="text" id="first" name="first" /></label>
                        <label className='flex flex-col' for="last">Last name:
                        <input className='outline-none bg-transparent p-2 border-2 border-solid border-black' type="text" id="last" name="last" /></label>
                        <label className='flex flex-col' for="last">Mail:
                        <input className='outline-none bg-transparent p-2 border-2 border-solid border-black' type="mail" id="last" name="mail" /></label>
                        <label className='flex flex-col' for="last">Message:
                        <textarea className=' resize-none h-48 p-2 outline-none bg-transparent border-2 border-solid border-black' type="mail" id="last" name="mail" /></label>
                        <button className=' bg-transparet border-2 border-solid border-black w-28 p-2' type="submit">SUBMİT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact