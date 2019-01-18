import React from 'react'

const Button = ({country, setSearch}) => {
    const handleClick = () => {
        setSearch(country.name)
    }

    return(
        <button onClick={handleClick}>show</button>
    )
}

export default Button