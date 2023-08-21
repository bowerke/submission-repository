import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const TitleText = text => <h1>{text.value}</h1>

const Statistics = ({values}) => {
  if (values.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={values.good}/>
        <StatisticLine text='neutral' value={values.neutral}/>
        <StatisticLine text='bad' value={values.bad}/>
        <StatisticLine text='all' value={values.all}/>
        <StatisticLine text='average' value={(values.average / values.all).toFixed(2)}/>
        <StatisticLine text='positive' value={((values.positive / values.all) * 100).toFixed(2) + '%'}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
     <tr>
      <td> {text} </td>
      <td> {value} </td>
      </tr>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAverage(average + 1)
    setPositive(positive + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
    setAverage(average + 0)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
    setAverage(average - 1)
  }

  const values = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive,
  }

  return (
    <div>
      <TitleText value='give feedback'/>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <TitleText value='statistics'/>
      <Statistics values={values}/>
    </div>
  )
}

export default App