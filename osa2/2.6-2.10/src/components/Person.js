import React from 'react'

const Person = ({person, removeData}) => {

    return (
        <p>
          {person.name} {person.number} <button onClick={removeData}>poista</button>
        </p>
    )
}

export default Person