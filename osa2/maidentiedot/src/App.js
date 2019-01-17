import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Countries from './components/Countries'
//import Persons from './components/Persons'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('Finland')

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
      <Countries countries={countries} search={search}/>
    </div>
  )

}

export default App