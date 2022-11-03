import React from 'react'
import SearchBar from './SearchBar';
import DropDown from './DropDown';
import Content from './Content';

const Main = ({handleRegion, handleQuery, content, existingRegion})=>{
    return (
        <main className="px-5 pt-32 pb-10 ">
            <SearchBar handleQuery={handleQuery}/>
            <DropDown handleRegion={handleRegion} existingRegion={existingRegion}/>
            <Content>
                {content}
            </Content>
        </main>
    )
}

export default Main;