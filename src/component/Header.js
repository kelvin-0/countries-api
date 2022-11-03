import React from 'react'

const Header = ()=>{
    return (
        <header className="bg-white flex items-center justify-between px-4 py-7  ">
            <h1 className='font-extrabold'>Where in the world?</h1>
            <p className="font-semibold"><i className='fa-regular fa-moon'></i> Dark Mode</p>
        </header>
    )
}

export default Header