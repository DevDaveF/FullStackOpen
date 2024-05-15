const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content part1 = {part1} number1 =  {exercises1} part2 = {part2} number2 =  {exercises2} part3 = {part3} number3 =  {exercises3}/> 
      <Total number1 = {exercises1} number2 = {exercises2} number3 = {exercises3} />
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
      < Part1 name = {section.part1} numbers = {section.number1} />
      < Part2 name = {section.part2} numbers = {section.number2} />
      < Part3 name = {section.part3} numbers = {section.number3} />
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