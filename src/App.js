import React, {useState, useEffect} from 'react'
import "./index.css"
import Header from './component/Header'
import Main from './component/Main'

const App = ()=>{
    const [countries, setCountries] = useState([])
    const [isDark, setIsDark] = useState(false)
    const darkStyle = isDark ? "bg-very-dark-blue" : "bg-very-light-gray"
    const toggleDark = ()=>{
        setIsDark(prevState=>!prevState)
    }
    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all"
        const fetchData = async()=>{
            try{
                const response = await fetch(url)
                const data = await response.json()
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
        <div className={`${darkStyle} min-h-screen font-nunito-sans text-sm`}>
            <Header isDark={isDark} toggleDark={toggleDark}/>
            <Main isDark={isDark} countries={countries}/>
        </div>
    )
}

export default App