import React from 'react'
import SearchBar from './SearchBar';
import DropDown from './DropDown';

const Main = ({content})=>{
    return (
        <main className="mt-5 grid px-4 gap-4 place-items-center grid-cols-auto-fit">
            <SearchBar />
            <DropDown />
            {content}
        </main>
    )
}

export default Main;