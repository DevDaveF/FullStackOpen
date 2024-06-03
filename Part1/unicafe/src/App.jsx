import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics =(stats) => {
  const total = stats.goodStat+stats.neutralStat+stats.badStat
  const averageScore = (stats.goodStat - stats.badStat)/total 
  const percentPositive = (stats.goodStat / total) * 100 + " %"
  return (
    <div>
      <table>
      <StatisticLine text="Good" value={stats.goodStat}/>
      <StatisticLine text="Neutral" value={stats.neutralStat}/>
      <StatisticLine text="Bad" value={stats.badStat}/>
      <StatisticLine text="All" value={total}/>
      <StatisticLine text="Average" value={averageScore}/>
      <StatisticLine text="Positive" value={percentPositive}/>
      </table>
    </div>
  )
}

const StatisticLine =(line) => {
  return (
      <tr>
        <td> {line.text} </td>
        <td> {line.value} </td>
      </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedback = good+neutral+bad

  if (feedback >0){
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => setGood(good +1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral +1)} text="Neutral" />
        <Button handleClick={() => setBad(bad +1)} text="Bad" />
        <h2>Statistics</h2>
        <Statistics goodStat = {good} neutralStat = {neutral} badStat = {bad}/>
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