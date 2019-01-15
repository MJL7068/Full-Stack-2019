import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Feedback = (props) => {
    return (
        <div>
          <Header text='anna palautetta' />
          <Button handleClick={props.handleGood} text='hyvä'/>
          <Button handleClick={props.handleNeutral} text='neutraali'/>
          <Button handleClick={props.handleBad} text='huono'/>
        </div>
    )
}

const Statistics = (props) => {
    const count = props.good + props.neutral + props.bad
    const avg = (props.good * 1 + props.bad * -1)/3.0
    const positives = 100*(props.good/count)
    if (count > 0) {
      return (
          <div>
            <Header text='statistiikka'/>
            <p>hyvä {props.good}</p>
            <p>neutraali {props.neutral}</p>
            <p>huono {props.bad}</p>
            <p>yhteensä {count}</p>
            <p>keskiarvo {avg}</p>
            <p>positiivisia {positives} %</p>
          </div>
      )
    } else {
        return(
            <div>
                Ei yhtään palautetta annettu
            </div>
        )
    }
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)