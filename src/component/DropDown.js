import React from 'react'

const DropDown = ({handleRegion})=>{
    const regions = ["Americas", "Africa", "Europe", "Oceania", "Asia","Antarctic"]
    const optionElements = regions.map(region=><option value={region}>{region}</option>)
    return(
        <select onChange={e=>handleRegion(e)} id="countries" className="shadow-md mb-6 w-1/2 md:float-right md:inline-block md:w-3/12  bg-gray-50  text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block py-3 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">All Region</option>
            {optionElements}
        </select>
    )
}

export default DropDown