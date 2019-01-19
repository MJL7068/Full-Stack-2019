import React from 'react'
import Country from './Country'
import Button from './Button'
import Weather from './Weather'

const Countries = ({countries, search, setSearch, weather, setWeatherLink}) => {
    const countriesToShow = countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase()))

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
        countriesToShow.map(country => <p key={country.name}>{country.name} <Button country={country} setSearch={setSearch}/></p>)
      )
    }

    if (countriesToShow.length === 1) {
        return(
            <div>
              <Country country={countriesToShow[0]}/>
              <Weather country={countriesToShow[0]} weather={weather} />
            </div>
        )
    }
}

export default Countries