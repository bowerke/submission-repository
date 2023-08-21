const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({course}) => {
  let comp = []
  course.parts.forEach(element => {
    comp.push(<Part part={element.name} exercises={element.exercises} key={element.name}/>)
  });
  return (
    <div>
      {comp}
    </div>
  )
}

const Total = ({course}) => {
  let total = 0
  course.parts.forEach(element => {
    total += element.exercises
  });
  return (
    <p>Number of excercises {total}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App