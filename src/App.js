import React, {useState, useEffect} from 'react'
import "./index.css"
import Header from './component/Header'
import Main from './component/Main'

const App = ()=>{
    console.log("app rendered")
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all"
        const fetchData = async()=>{
            try{
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                console.log('fetch')
                const newDataWithId = data.map((x, i)=>{
                    return {...x, id: i+1}
                })
                setCountries(newDataWithId)
            }catch(err){
                console.log("error", err)
            }
        }
        fetchData()
    }, [])
    return (
        <div className='bg-very-light-gray font-nunito-sans text-sm'>
            <Header />
            <Main countries={countries}/>
        </div>
    )
}

export default App