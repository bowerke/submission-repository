import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVoted = ({text}) => {
  return text
}

const TitleText = text => <h1>{text.value}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let points = Array(anecdotes.length).fill(0)
   
  const [selected, setSelected] = useState(0)
   
  const [votes, setVote] = useState(points)

  const [mostVoted, setMostVoted] = useState(anecdotes[0])

  const [mostVotedValue, setMostVotedValue] = useState(0)

  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const mostVotedAncedote = (copy) => {
    let maxVotedValue = 0
    let maxVotedIndex = 0
    for (let key in copy) {
      if (copy[key] > maxVotedValue) {
        maxVotedValue = copy[key]
        maxVotedIndex = key
      }
    }
    setMostVotedValue(maxVotedValue)
    setMostVoted(anecdotes[maxVotedIndex])
  }

  const handleVoteClick = () => {
    const copy = { ...votes }
    copy[selected] += 1
    setVote(copy)
    mostVotedAncedote(copy)
  }

  return (
    <div>
      <TitleText value='Anecdote of the day'/>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button handleClick={handleVoteClick} text='vote'/>
      <Button handleClick={handleAnecdoteClick} text='next anecdote'/>
      <TitleText value='Anecdote with most votes'/>
      <MostVoted text={mostVoted}/>
      <br/>
      has {mostVotedValue} votes
    </div>
  )
}

export default App