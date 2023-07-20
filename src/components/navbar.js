import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-[961px]'>
      <div className='flex h-20 w-full bg-transparent text-green-950 justify-between px-40 items-center'>
        <h2 className='text-5xl hover:text-green-950 mt-20'>EA</h2>
        <ul className='text-green-950 flex space-x-20 mt-20 cursor-pointer'>
          <li className='hover:border-b-2 border-green-950 text-2xl'>HOME</li>
          <li className='hover:border-b-2 border-green-950 text-2xl'>ABOUT</li>
          <li className='hover:border-b-2 border-green-950 text-2xl'>CONTACT</li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar