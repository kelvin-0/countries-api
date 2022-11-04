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
    }
    const handleRegion = (e)=>{
        setByRegion(e.target.value)
    }

    const filterElement = (state, word)=>{
        if(state === "")return true
        const pattern = word.toLowerCase()
        const isExist = pattern.includes(state.trim().toLowerCase())
        return isExist
    }
    const filteredElements = countries.filter(country=>{
        return filterElement(query, country.name.common)
    }).filter(country=>{
        return filterElement(byRegion, country.region)
    })
    const countriesElements = filteredElements.map(country=>{
        const {flags: {png : flagsUrl}, name: {common : name}, population, region, capital} = country;
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
            <Main handleRegion={handleRegion} handleQuery={handleQuery} content={countriesElements}/>
        </div>
    )
}

export default App