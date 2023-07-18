import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-20 w-full fixed bg-black text-white justify-between px-40 items-center'>
        <h2 className='text-2xl'>EA</h2>
        <ul className='text-white flex space-x-20 cursor-pointer'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
    </div>
  )
}

export default Navbar