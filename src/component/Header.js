import React from 'react'

const Header = ({isDark, toggleDark})=>{
    const headerStyle = isDark ? "bg-dark-blue text-very-light-gray" : "bg-white text-very-dark-blue-text"
    return (
        <header className={`${headerStyle} shadow fixed w-full z-10 flex items-center justify-between px-5 py-7`}>
            <h1 className='font-extrabold md:text-lg lg:text-xl'>Where in the world?</h1>
            <p onClick={()=>toggleDark()} className="cursor-pointer font-semibold md:text-md lg:text-lg"><i className={`fa-regular ${isDark ? "fa-sun" : "fa-moon"}`}></i> {isDark ? "Light Mode" : "Dark Mode"} </p>
        </header>
    )
}

export default Header