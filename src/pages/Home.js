import React from 'react'
import Content from '../component/Content'
import SearchBar from '../component/SearchBar'
import DropDown from '../component/DropDown'

const Home = ({byRegion, isDark, query, content, handleQuery, handleRegion})=>{
    return (
        <>
        <SearchBar isDark={isDark} query={query} handleQuery={handleQuery}/>
        <DropDown byRegion={byRegion} isDark={isDark} handleRegion={handleRegion}/>
        <Content>
        {content}
        </Content>
        </>
    )
}

export default Home