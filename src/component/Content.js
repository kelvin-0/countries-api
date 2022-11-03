import React from 'react'

const Content = ({children})=>{
    return (
        <div className="grid place-items-center grid-cols-auto-fill gap-x-5 gap-y-11 w-full">
            {children}
        </div>
    )
}

export default Content