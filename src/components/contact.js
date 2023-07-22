import React, { useState } from 'react'
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { AiFillMail, AiFillInstagram } from 'react-icons/ai';
import { BiArrowToTop } from 'react-icons/bi';

import Link from 'next/link';


const Contact = () => {

    const handleClickAbout = () => {
        window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth',
        });
    };

    const handleClickHome = () => {
        window.scroll({
            top: -window.innerHeight * 2,
            left: 0,
            behavior: 'smooth',
        });
    };

    const [formData, setFormData] = useState({
        first: '',
        last: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Form verilerini sunucuya gönderme işlemini gerçekleştir
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            
          });
    
          const data = await response.json();
          console.log(data);
          window.location.reload();
    
          // İşlem başarılıysa veya başarısızsa kullanıcıya geri bildirim sağlama
        } catch (error) {
          console.error('Error:', error);
          // Hata durumunda kullanıcıya geri bildirim sağlama
        }
      };
      

    return (
        <div className='justify-center items-center flex flex-col w-full h-[961px] p-24 font-bold font-serif '>
            <div className='flex space-x-24'>
                <button onClick={handleClickAbout} className='flex items-center text-orange-400 p-5 text-xl'>ABOUT <BiArrowToTop size={35} /> </button>
                <button onClick={handleClickHome} className='flex items-center text-orange-400 p-5 text-xl'>HOME <BiArrowToTop size={35} /> </button>
            </div>
            <div className='w-8/12 p-10 border-2 border-solid border-orange-400 text-orange-400 shadow-md shadow-orange-400 flex'>
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
                        <Link href='https://www.etsy.com/your/shops/EStoreByEmre/tools/listings/stats:true '>ETSY</Link>
                        <Link href='https://github.com/emreakiin '>GİT HUB</Link>
                    </div>
                </div>

                <div className='w-7/12 flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='w-6/12 flex flex-col space-y-6' action="/api/sendEmail" method="post">
                        <label className='flex flex-col' for="first">First name:
                            <input value={formData.first} onChange={handleChange} autoComplete='off' className='outline-none bg-transparent p-2 border-2 border-solid border-orange-400 shadow-md shadow-orange-400' type="text" id="first" name="first" /></label>
                        <label className='flex flex-col' for="last">Last name:
                            <input value={formData.last} onChange={handleChange} autoComplete='off' className='outline-none bg-transparent p-2 border-2 border-solid border-orange-400 shadow-md shadow-orange-400' type="text" id="last" name="last" /></label>
                        <label className='flex flex-col' for="email">Mail:
                            <input value={formData.email} onChange={handleChange} autoComplete='off' className='outline-none bg-transparent p-2 border-2 border-solid border-orange-400 shadow-md shadow-orange-400' type="email" id="email" name="email" /></label>
                        <label className='flex flex-col' for="message">Message:
                            <textarea value={formData.message} onChange={handleChange} className=' resize-none h-48 p-2 outline-none bg-transparent border-2 border-solid border-orange-400 shadow-md shadow-orange-400' type="message" id="message" name="message" /></label>
                        <button className=' bg-transparet border-2 border-solid border-orange-400 w-28 p-2 shadow-md shadow-orange-400' type="submit">SUBMİT</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact