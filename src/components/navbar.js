import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  const handleClickAbout = () => {
    // Sayfanın aşağı kayması için bir scroll işlemi gerçekleştiriyoruz.
    window.scroll({
      top: window.innerHeight, // Sayfanın yüksekliği kadar aşağı kayacak.
      left: 0,
      behavior: 'smooth', // Kaydırma işleminin pürüzsüz olmasını sağlar.
    });
  };
  const handleClickContact = () => {
    // Sayfanın aşağı kayması için bir scroll işlemi gerçekleştiriyoruz.
    window.scroll({
      top: window.innerHeight*2, // Sayfanın yüksekliği kadar aşağı kayacak.
      left: 0,
      behavior: 'smooth', // Kaydırma işleminin pürüzsüz olmasını sağlar.
    });
  };

  return (
    <div className='w-full h-[961px]'>
      <div className='flex h-20 w-full bg-transparent text-orange-400 justify-between px-40 items-center'>
        <h2 className=' w-24 h-24 flex justify-center items-center text-5xl mt-20 hover:border-2 hover:border-solid hover:rounded-full hover:border-orange-400 '>EA</h2>
        <div className='flex space-x-20 mt-20 cursor-pointer'>
          <button className='hover:border-b-2 border-orange-400 text-2xl'>HOME</button>
          <button className='hover:border-b-2 border-orange-400 text-2xl' onClick={handleClickAbout}>ABOUT</button>
          <Link href='https://github.com/emreakiin' className='hover:border-b-2 border-orange-400 text-2xl'>GİTHUB</Link>
          <button className='hover:border-b-2 border-orange-400 text-2xl' onClick={handleClickContact}>CONTACT</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar