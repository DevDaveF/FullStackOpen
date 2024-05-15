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
      <Content parts={course}/> 
      <Total parts={course} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (stuff) => {
  console.log({stuff})
  return (
    <div>
      < Part1 name = {stuff.parts.parts[0].name} numbers = {stuff.parts.parts[0].exercises} />
      < Part2 name = {stuff.parts.parts[1].name} numbers = {stuff.parts.parts[1].exercises} />
      < Part3 name = {stuff.parts.parts[2].name} numbers = {stuff.parts.parts[2].exercises} />
    </div>
  )
} 


const Part1 = (parts1) => {
  return(
    <p>{parts1.name} {parts1.numbers}</p>
  )
}

const Part2 = (parts2) => {
  return(
    <p>{parts2.name} {parts2.numbers}</p>
  )
}

const Part3 = (parts3) => {
  return(
    <p>{parts3.name} {parts3.numbers}</p>
  )
}

const Total = (totals) =>{
  return(
    <div>
      <p>Number of exercises {totals.parts.parts[0]['exercises'] + totals.parts.parts[1]['exercises'] + totals.parts.parts[2]['exercises']}</p>
    </div>
  )
}


export default App