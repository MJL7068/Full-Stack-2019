import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/*const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born {bornYear()}</p>
        </div>
    )
}*/

/*
const App = () => {
    const nimi = 'Pekka'
    const ika = 10

    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Arto" age={26 + 10} />
        <Hello name={nimi} age={ika}/>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
*/

//const Display = ({counter}) => <div>{counter}</div>

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                sovellusta käytetään nappeja painelemalla
            </div>
        )
    }

    return (
        <div>
            näppäilyhistoria: {props.allClicks.join(' ')}
        </div>
    )
}

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
    return (
        <div>
          <Header text='statistiikka'/>
          <p>hyvä {props.good}</p>
          <p>neutraali {props.neutral}</p>
          <p>huono {props.bad}</p>
        </div>
    )
}

const App = (props) => {
    /*const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(left + 1)
    }*/

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

    /*return (
        <div>
            <div>
                {left}
                <Button handleClick={handleLeftClick} text='vasen'/>
                <Button handleClick={handleRightClick} text='oikea'/>
              handleGood  {right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )*/
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)