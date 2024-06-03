import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics =(stats) => {
  return (
    <div>
    <p>Good = {stats.goodStat} </p>
    <p>Neutral = {stats.neutralStat}</p>
    <p>Bad = {stats.badStat}</p>
    <p>Total = {stats.totalStat}</p>
    <p>Average Score = {stats.avgStat}</p>
    <p>Percentage Positive = {stats.pctStat}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad
  const averageScore = (good - bad)/total 
  const percentPositive = (good / total) * 100

  if (total >0){
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => setGood(good +1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral +1)} text="Neutral" />
        <Button handleClick={() => setBad(bad +1)} text="Bad" />
        <h2>Statistics</h2>
        <Statistics goodStat = {good} neutralStat = {neutral} badStat = {bad} totalStat = {total} avgStat={averageScore} pctStat={percentPositive}/>
      </div>
    )
  }

  return (
    <div>
    <h1>Give Feedback</h1>
    <Button handleClick={() => setGood(good +1)} text="Good" />
    <Button handleClick={() => setNeutral(neutral +1)} text="Neutral" />
    <Button handleClick={() => setBad(bad +1)} text="Bad" />
    <h2>Statistics</h2>
    <p>No feedback given</p>
  </div>
  )
}

export default App