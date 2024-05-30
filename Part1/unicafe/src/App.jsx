import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad
  const averageScore = (good - bad)/total 
  const percentPositive = (good / total) * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good +1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="Neutral" />
      <Button handleClick={() => setBad(bad +1)} text="Bad" />
      <h2>Statistics</h2>
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad = {bad}</p>
      <p>Total = {total}</p>
      <p>Average Score = {averageScore}</p>
      <p>Percentage Positive = {percentPositive}</p>
    </div>

  )
}

export default App