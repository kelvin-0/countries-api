import React from 'react'

const DropDown = ({byRegion, isDark, handleRegion})=>{
    const regions = ["Americas", "Africa", "Europe", "Oceania", "Asia","Antarctic"]
    const optionElements = regions.map(region=><option key={region} value={region}>{region}</option>)
    const dropdownStyle = isDark ? "bg-dark-blue text-white" : "bg-white text-dark-blue"
    return(
        <select value={byRegion} onChange={e=>handleRegion(e)} id="countries" className={`${dropdownStyle} shadow-md mb-6 w-1/2 md:float-right md:inline-block md:w-3/12 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block py-3 px-5`}>
            <option value="">All Region</option>
            {optionElements}
        </select>
    )
}

export default DropDown