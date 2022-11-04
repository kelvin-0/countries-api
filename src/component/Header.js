import React from 'react'

const Header = ()=>{
    console.log('header')
    return (
        <header className="shadow fixed w-full z-10 bg-white flex items-center justify-between px-5 py-7  ">
            <h1 className='font-extrabold md:text-lg lg:text-xl'>Where in the world?</h1>
            <p className="font-semibold md:text-md lg:text-lg"><i className='fa-regular fa-moon'></i> Dark Mode</p>
        </header>
    )
}

export default Header