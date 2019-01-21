import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/personsService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ condition, setCondition] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    if (persons.map((person) => person.name).includes(newName)) {
      alert(newName + ' on jo luettelossa')
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        }) 
    }
  }

  const removeData = (id, name) => {
    if (window.confirm('Poistetaanko ' + name)) {
      personsService
        .remove(id)

      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleCondition = (event) => {
    setCondition(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter condition={condition} handleCondition={handleCondition}/>
      <h2>Lisää uusi</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numerot</h2>
      <div>
        <ul>
          <Persons persons={persons} condition={condition} removeData={removeData}/>
        </ul>
      </div>
    </div>
  )

}

export default App