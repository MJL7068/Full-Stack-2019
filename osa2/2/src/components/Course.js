import React from 'react'

const Header = (props) => {
    return (
          <h1>{props.name}</h1>
    )
}

const Content = ({parts}) => {
    const rows = () => parts.map(part =>
        <Part
          key={part.id}
          part={part}
        />
      )

    return (
        <div>
            {rows()}
        </div>
    )
}

const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>  
    )
}

const Total = ({parts}) => {
    const total = parts.reduce((total, part) => {
        return total + part.exercises;
    },0)

    return (
        <p>yhteensä {total} tehtävää</p>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
        </div>
    )
}

export default Course