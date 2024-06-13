import { useState } from 'react'

const RandomAnecdote =(size,state) => {
  const randomNum =  Math.floor(Math.random() * size)
  return state(randomNum)
}

const Tally = (index,votes,state) => {
  const copy = [...votes]
  copy[index] += 1
  return state(copy)
}

const Button = (click) =>{
  return <button onClick={click.clicked}>{click.text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const max = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [vote, setVote] =useState(new Uint8Array(max))
 

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button clicked={() => Tally(selected,vote,setVote)} text="Vote"/>
      <Button clicked={() => RandomAnecdote(max,setSelected)} text="Next Anecdote"/>
    </div>
  )
}

export default App
