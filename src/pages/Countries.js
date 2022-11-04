import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../component/CountryDetail'
import CountryDetail from '../component/CountryDetail'

const Countries = ({findSpecificCountry})=>{
    const navigate = useNavigate()
    const params = useParams()
    const {countryId} = params
    const specificCountry = findSpecificCountry(countryId);
    console.log(specificCountry)
    return (
        !specificCountry
            ? <h1>No countries with that id</h1> 
            : (
            <>
                <button className="shadow-md px-10 py-3 mb-10 font-semibold bg-white" onClick={()=>navigate(-1)}>
                    Back
                </button>
                <CountryDetail 
                key={specificCountry.id}
                id={specificCountry.id}
                source={specificCountry.flags.png} 
                name={specificCountry.name.official} 
                population={specificCountry.population} 
                region={specificCountry.region} 
                capital={specificCountry.capital ? specificCountry.capital.join() : specificCountry.capital}
                tld={specificCountry.tld}
                subreg={specificCountry.subregion}
                border={specificCountry.borders ? specificCountry.borders.map(border=><span className="mr-3 my-2 ml-0  px-6 border inline-block">{border}</span>) : <span>None</span>}
                languages={Object.values(specificCountry.languages).join()}
                currencies ={Object.values(specificCountry.currencies).map(currency=>currency.name).join()}
                native={Object.values(specificCountry.name.nativeName).map(name=>name.common).join()}
                 />
            </>
            )
    )   
}

export default Countries