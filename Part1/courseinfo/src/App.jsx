const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header name={course} /> 
      <Content parts = {parts}/> 
      <Total parts = {parts} />
    </div>
  )
}

const Header = (course) => {
  return(
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = (stuff) => {
  return (
    <div>
      < Part1 name = {stuff.parts[0].name} numbers = {stuff.parts[0].exercises} />
      < Part2 name = {stuff.parts[1].name} numbers = {stuff.parts[1].exercises} />
      < Part3 name = {stuff.parts[2].name} numbers = {stuff.parts[2].exercises} />
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
      <p>Number of exercises {totals.parts[0]['exercises'] + totals.parts[1]['exercises'] + totals.parts[2]['exercises']}</p>
    </div>
  )
}


export default App