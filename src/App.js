import React, {useState, useEffect} from 'react'
import "./index.css"
import Header from './component/Header'
import Main from './component/Main'
import Country from './component/Country'

const App = ()=>{
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState("")
    const [byRegion, setByRegion] = useState("")
    const handleQuery = (e)=>{
        setQuery(e.target.value)
        setByRegion("")
    }
    const handleRegion = (e)=>{
        setByRegion(e.target.value)
    }
    let existingRegion = []

    const filteredElements = countries.filter(country=>{
        if(query === "")return true
        const common = country.name.common.toLowerCase()
        const isExist = common.includes(query.trim().toLowerCase())
        return isExist
    }).filter(country=>{
        if(byRegion === "")return true
        const region = country.region.toLowerCase()
        const isExist = region.includes(byRegion.trim().toLowerCase())
        return isExist
    })
    const countriesElements = filteredElements.map(country=>{
        const {flags: {png : flagsUrl}, name: {common : name}, population, region, capital} = country;
        if(!existingRegion.includes(region)){
            existingRegion.push(region)
        }
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
            <Main handleRegion={handleRegion} handleQuery={handleQuery} content={countriesElements} existingRegion={existingRegion}/>
        </div>
    )
}

export default App