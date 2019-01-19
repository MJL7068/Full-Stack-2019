import React from 'react'

const Weather = ({capital, weather}) => {

    return (
        <div>
          <h2>Weather in {capital}</h2>
          <p><b>temperature:</b> {weather.current.temp_c} Celsius</p>
          <p><b>wind:</b> {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>
        </div>
    )
}

export default Weather