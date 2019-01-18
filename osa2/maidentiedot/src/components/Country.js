import React from 'react'

const Country = ({country}) => {

    const languages = () => country.languages.map(language =>
      <li key={language.name}>{language.name}</li>)

    return(
        <div>
          <h1>{country.name}</h1>
          <p>
              capital {country.capital}<br></br>
              population {country.population}
          </p>
          <h2>languages</h2>
          <ul>
              {languages()}
          </ul>
          <img alt='flag' width={250} height={150} src={country.flag}/>
        </div>
    )
}

export default Country