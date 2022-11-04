const filterElement = (state, word)=>{
    if(state === "")return true
    const pattern = word.toLowerCase()
    const isExist = pattern.includes(state.trim().toLowerCase())
    return isExist
}

export default filterElement