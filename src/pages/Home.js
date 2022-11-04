import React from 'react'
import Content from '../component/Content'
import SearchBar from '../component/SearchBar'
import DropDown from '../component/DropDown'

const Home = ({content, handleQuery, handleRegion})=>{
    return (
        <>
        <SearchBar handleQuery={handleQuery}/>
        <DropDown handleRegion={handleRegion}/>
        <Content>
        {content}
        </Content>
        </>
    )
}

export default Home