import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <>
          <h1>{props.course}</h1>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} excercise={props.exercises1}/>
            <Part part={props.part2} excercise={props.exercises2}/>
            <Part part={props.part3} excercise={props.exercises3}/>
        </div>
    )
}

const Part = (props) => {
    return (
    <>
    <p>
      {props.part} {props.exercise}
    </p>
    </>    
    )
}

const Total = (props) => {
    return (
        <>
          <p>yhteensä {props.exercises1 + props.exercises2 + props.exercises3} tehtävää</p>
        </>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))