import React, { useState } from 'react'
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { AiFillMail, AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const ContactInfo = ({onClose}) => {

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

    <div className='w-full h-full border-2 border-solid border-black text-black shadow-md flex font-mono '>
      <div className='w-[960px] h-full text-2xl flex flex-col justify-between items-center '>
        <div>
          <div>GET CONTACT</div>
        </div>
        <div className='space-y-5'>
          <div className='flex items-center space-x-5'><BsFillTelephoneFill /> <div>+0 536 396 04 86</div></div>
          <div className='flex items-center space-x-5'><AiFillMail /> <div> emrakn.24@gmail.com</div></div>
        </div>
        <div className='space-x-10 flex'>
          <Link href='https://twitter.com/EmreAki41207953'><BsTwitter /></Link>
          <Link href='https://www.instagram.com/eemreakiin/'><AiFillInstagram /></Link>
          <Link href='https://github.com/emreakiin '>GİT HUB</Link>
        </div>
        <div className=' w-[500px] h-[50px] flex justify-center items-end'>
          <button onClick={onClose}>KAPAT</button>
        </div>
      </div>

      <div className='w-[960px] h-full flex justify-center items-center uppercase'>
        <form onSubmit={handleSubmit} className='w-[500px] h-full flex flex-col space-y-3' action="/api/sendEmail" method="post">
          <label className='flex flex-col' for="first">First name:
            <input value={formData.first} onChange={handleChange} autoComplete='off' className='outline-none bg-transparent p-1 border-2 border-solid border-black shadow-md shadow-black' type="text" id="first" name="first" /></label>
          <label className='flex flex-col' for="last">Last name:
            <input value={formData.last} onChange={handleChange} autoComplete='off' className='outline-none bg-transparent p-1 border-2 border-solid border-black shadow-md shadow-black' type="text" id="last" name="last" /></label>
          <label className='flex flex-col' for="email">Mail:
            <input value={formData.email} onChange={handleChange} autoComplete='off' className='outline-none bg-transparent p-1 border-2 border-solid border-black shadow-md shadow-black' type="email" id="email" name="email" /></label>
          <label className='flex flex-col' for="message">Message:
            <textarea value={formData.message} onChange={handleChange} className=' resize-none h-48 p-1 outline-none bg-transparent border-2 border-solid border-black shadow-md shadow-black' type="message" id="message" name="message" /></label>
          <button className=' bg-transparet border-2 border-solid border-black w-28 p-2 shadow-md shadow-black' type="submit">SUBMİT</button>
        </form>
      </div>
    </div>
  )
}

export default ContactInfo