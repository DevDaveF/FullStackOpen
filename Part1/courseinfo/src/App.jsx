const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content name1 = {part1.name} number1 =  {part1.exercises} name2 = {part2.name} number2 =  {part2.exercises} name3 = {part3.name} number3 =  {part3.exercises}/> 
      <Total number1 = {part1['exercises']} number2 = {part2['exercises']} number3 = {part3['exercises']} />
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

const Content = (section) => {
  return (
    <div>
      < Part1 name = {section.name1} numbers = {section.number1} />
      < Part2 name = {section.name2} numbers = {section.number2} />
      < Part3 name = {section.name3} numbers = {section.number3} />
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
      <p>Number of exercises {totals.number1 + totals.number2 + totals.number3}</p>
    </div>
  )
}


export default App