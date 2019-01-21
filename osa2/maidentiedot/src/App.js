import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const changeWeather = (capital) => {
    const key = ''
    useEffect(() => {
      axios
        .get('http://api.apixu.com/v1/current.json?key=' + key + '&q=' + capital)
        .then(response => {
          setWeather(response.data)
        })
    }, [])
  }

  alert('You need to set the key for https://www.apixu.com/ in App.js!!')
  changeWeather('Helsinki')

  return (
    <div>
      <Filter search={search} handleSearch={handleSearch} />
      <Countries countries={countries} search={search} setSearch={setSearch} weather={weather} changeWeather={changeWeather} />
    </div>
  )

}

export default App