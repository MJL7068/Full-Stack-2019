import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const Voting = (props) => {
  return(
  <div>
    <Header text='Anecdote of the day' />
    <p>{props.anecdotes[props.selected]}</p>
    <p>has {props.votes} votes</p>
    <Button handleClick={props.handleSelected} text='next anecdote'/>
    <Button handleClick={props.handleVote} text='vote'/>
  </div>  
  )
}

const MostVotes = (props) => {
  return (
    <div>
      <Header text='Anecdote with most votes' />
      <p>{props.anecdotes[props.highest]}</p>
      <p>has {props.points[props.highest]} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)

  const handleSelected = () => {
    const number = Math.floor(Math.random() * 6)
    setSelected(number)
    setVotes(props.points[number])
  }

  const handleVote = () => {
    props.points[selected] += 1
    setVotes(props.points[selected])
  }

  const highest = points.indexOf(Math.max(...points))

  if (Math.max(...points) > 0) {
    return (
      <div>
      <Voting anecdotes={props.anecdotes} points={points} selected={selected} votes={votes} handleSelected={handleSelected} handleVote={handleVote}/>
      <MostVotes anecdotes={props.anecdotes} highest={highest} points={props.points}/>
      </div>
    )
  } else {
    return (
      <div>
        <Voting anecdotes={props.anecdotes} points={points} selected={selected} votes={votes} handleSelected={handleSelected} handleVote={handleVote}/>
      </div>
    )
  }
}

const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} points={points} />,
  document.getElementById('root')
)