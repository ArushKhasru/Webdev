import React from 'react'

const Navbar = () => {
  return (
     <div className="nav">
        <ul className='flex border border-amber-500 mt-0 w-full justify-between h-10 fixed top-0 bg-black '>
            <li className='text-red-300 '>Home </li>
            <li className='text-red-300 '>About</li>
            <li className='text-red-300 '>Contact</li>
            <li className='text-red-300 '>Profile</li>
        </ul>
     </div>
  )
}

export default Navbar
