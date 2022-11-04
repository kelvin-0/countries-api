import React from "react"


const CountryDetail = ({native, languages, currencies, source, name, population, region, capital, tld, subreg, border})=>{
    console.log(border)
    return (
        <div className='rounded-lg flex flex-col overflow-hidden h-auto sm:flex-row sm:max-h-auto sm:gap-x-10 lg:gap-x-20 sm:justify-between sm:items-center'>
            <img className="w-full max-w-full h-2/4 object-cover sm:max-w-2xl sm:w-1/2 " src={source} alt="country flag"/>
            <div className="py-6 leading-relaxed sm:w-1/2 sm:max-w-2xl">
                <h1 className="font-extrabold text-lg sm:text-xl">{name}</h1>
                <div className="flex flex-col sm:flex-row sm:justify-between md:justify-start md:gap-x-20 mt-4 gap-y-10">
                    <div className="">
                        <h2 className="font-semibold">Native Name: <span className='font-light'>{native}</span></h2>
                        <h2 className="font-semibold">Population: <span className='font-light'>{population}</span></h2>
                        <h2 className="font-semibold">Region: <span className='font-light'>{region}</span></h2>
                        <h2 className="font-semibold">Sub Region: <span className='font-light'>{subreg}</span></h2>
                        <h2 className="font-semibold">Capital: <span className='font-light'>{capital}</span></h2>           
                    </div>
                    <div className="">
                        <h2 className="font-semibold">Top Level Domain: <span className='font-light'>{tld}</span></h2>           
                        <h2 className="font-semibold">Currencies: <span className='font-light'>{currencies}</span></h2>           
                        <h2 className="font-semibold">Languages: <span className='font-light'>{languages}</span></h2>           
                    </div>
                </div>
                <h2 className="inline-block font-semibold mt-10">Border Countries: {border}</h2>           
                
            </div>
        </div>
    )
}

export default CountryDetail