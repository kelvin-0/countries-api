import React from 'react'

const Country = ({source, name, population, region, capital})=>{
    return (
        <div className='w-11/12 rounded-lg  overflow-hidden shadow-lg'>
            <img className="w-full max-w-full block" src={source} alt="country flag"/>
            <div className="px-6 pt-6 pb-10 leading-relaxed">
                <h1 className="font-extrabold text-lg ">{name}</h1>
                <h2 className="mt-4 font-semibold">Population: <span className='font-light'>{population}</span></h2>
                <h2 className="font-semibold">Region: <span className='font-light'>{region}</span></h2>
                <h2 className="font-semibold">Capital: <span className='font-light'>{capital}</span></h2>           
            </div>
        </div>
    )
}

export default Country