import React from 'react'
import Country from './Country'

const Countries = ({countries, search}) => {
    const countriesToShow = countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase()))
    console.log(countriesToShow.length)

    if (countriesToShow.length === 0) {
        return(
            <div></div>
        )
    }

    if (countriesToShow.length > 10) {
        return(
            <p>Too many matches, specify another filter</p>
        )
    }

    if (countriesToShow.length < 10 && countriesToShow.length > 1) {
      return(
        countriesToShow.map(country => <p key={country.name}>{country.name}</p>)
      )
    }

    if (countriesToShow.length === 1) {
        return(
            <Country country={countriesToShow[0]}/>
        )
    }
}

export default Countries