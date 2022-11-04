import React from 'react'

const SearchBar = ({handleQuery})=>{
    return (
        <form className="mb-6 flex items-center w-full md:w-5/12 md:inline-block md:float-left">   
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-7 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={(e)=>handleQuery(e)}  type="text" id="search" className="bg-gray-50 shadow-md text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a country..." required/>
            </div>
        </form>
    )
}

export default SearchBar