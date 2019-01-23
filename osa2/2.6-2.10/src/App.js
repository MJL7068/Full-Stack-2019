import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/personsService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ condition, setCondition] = useState('')
  const [notification, setNotification] = useState(null)
  const [success, setSuccess] = useState(true)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    if (persons.map((person) => person.name).includes(newName)) {
      if (window.confirm(newName + ' on jo luettelossa, korvataanko vanha numero uudella?')) {
        const id = persons.find(n => n.name === newName).id
        personsService
          .update(id, nameObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))

            setNotification('Muutettiin henkilön ' + nameObject.name + ' numeroa')
            setSuccess(true)

            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
          .catch(error => {
            setPersons(persons.filter(person => person.name !== newName))
            
            setNotification('Henkilö ' + newName + ' on jo poistettu palvelimelta')
            setSuccess(false)

            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
      }
    } else {
      personsService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))

          setNotification('Lisättiin henkilö ' + newName)
          setSuccess(true)
  
          setNewName('')
          setNewNumber('')
  
          setTimeout(() => {          
            setNotification(null)
            setSuccess(true)  
          }, 5000)  

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

      setNotification('Poistettiin henkilö ' + name + ' onnistuneesti')
      setSuccess(true)

      setTimeout(() => {
        setNotification(null)
      }, 5000)
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
      <Notification notification={notification} success={success} />
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