import React, {useState, useEffect} from 'react'
import "./index.css"
import Header from './component/Header'
import Main from './component/Main'
import Country from './component/Country'

const App = ()=>{
    const [countries, setCountries] = useState([])
    const countriesElements = countries.map(country=>{
        const {flags: {png : flagsUrl}, name: {official : name}, population, region, capital} = country;
        return <Country 
                source={flagsUrl} 
                name={name} 
                population={population} 
                region={region} 
                capital={capital ? capital.join() : capital}/>
    })

    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all"
        const fetchData = async()=>{
            try{
                const response = await fetch(url)
                const json = await response.json()
                console.log(json)
                setCountries(json)
            }catch(err){
                console.log("error", err)
            }
        }
        fetchData()
    }, [])

    // console.log(countries)

    return (
        <div className='bg-very-light-gray font-nunito-sans text-sm'>
            <Header />
            <Main content={countriesElements}/>
        </div>
    )
}

export default App