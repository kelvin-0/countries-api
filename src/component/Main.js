import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Country from './Country'
import Home from '../pages/Home'
import Countries from '../pages/Countries'
import filterElement from '../utils/filterElement'

const Main = ({countries, isDark})=>{
    const [query, setQuery] = useState("")
    const [byRegion, setByRegion] = useState("")
    const handleQuery = (e)=>{
        setQuery(e.target.value)
    }
    const handleRegion = (e)=>{
        setByRegion(e.target.value)
    }

    const countriesElements = countries.map((country, i)=>{
        const {flags: {png : flagsUrl}, name: {common : name}, population, region, capital, id} = country;
        return <Country 
                isDark={isDark}
                key={i + 1}
                id={id}
                source={flagsUrl} 
                name={name} 
                population={population} 
                region={region} 
                capital={capital ? capital.join() : capital}/>
    })
    const filteredElements = countriesElements.filter(({props: {name}})=>{
        return filterElement(query, name)
    }).filter(({props: {region}})=>{
        return filterElement(byRegion, region)
    })

    const findSpecificCountry = (countryId)=>{
        return countries.find(({id})=>{
            return id === parseInt(countryId)
        })
    }
    return (
        <main className="px-5 pt-32 pb-10 ">
            <Routes>
                <Route path="/" element={<Home isDark={isDark} query={query} handleRegion={handleRegion} handleQuery={handleQuery} content={filteredElements}/>}/>
                <Route path="/countries/:countryId" element={<Countries isDark={isDark} findSpecificCountry={findSpecificCountry}/>}/>
                <Route path="*" element={<h1 className={`text-xl font-extrabold ${isDark ? "text-white" : "text-very-dark-blue-text"}`}>404 Not Found</h1>}/>
            </Routes>
        </main>
    )
}

export default Main;