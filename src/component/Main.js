import React from 'react'
import SearchBar from './SearchBar';
import DropDown from './DropDown';
import Content from './Content';

const Main = ({content})=>{
    return (
        <main className="px-5 pt-32 pb-10 ">
            <SearchBar />
            <DropDown />
            <Content>
                {content}
            </Content>
        </main>
    )
}

export default Main;