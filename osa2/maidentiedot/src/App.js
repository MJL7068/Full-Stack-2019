import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('Finland')
  const [weather, setWeather] = useState([])
  const [weatherLink, setWeatherLink] = useState('Helsinki')

  /*const key = ''
  const link = ('http://api.apixu.com/v1/current.json?key=' + key + '&q=' + weatherLink)
  useEffect(() => {
    axios
      .get(link)
      .then(response => {
        setWeather(response.data)
      })
  }, [])*/

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

  return (
    <div>
      <Filter search={search} handleSearch={handleSearch} />
      <Countries countries={countries} search={search} setSearch={setSearch} weather={weather} setWeatherLink={setWeatherLink}/>
    </div>
  )

}

export default App