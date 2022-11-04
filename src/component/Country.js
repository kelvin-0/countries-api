import React from 'react'
import {Link} from 'react-router-dom'

const Country = ({source, name, population, region, capital, id})=>{
    return (
        <Link to={`/countries/${id}`} className="w-11/12 block">
            <div className='rounded-lg  overflow-hidden shadow-lg h-96'>
                <img className="w-full max-w-full h-2/4 object-cover" src={source} alt="country flag"/>
                <div className="px-6 py-6 leading-relaxed">
                    <h1 className="font-extrabold text-lg ">{name}</h1>
                    <h2 className="mt-4 font-semibold">Population: <span className='font-light'>{population}</span></h2>
                    <h2 className="font-semibold">Region: <span className='font-light'>{region}</span></h2>
                    <h2 className="font-semibold">Capital: <span className='font-light'>{capital}</span></h2>           
                </div>
            </div>
        </Link>
    )
}

export default Country