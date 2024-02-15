import React, {useState} from 'react'
import './index.css'

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 101)
    setRandomNumber(newRandomNumber)
  }

  return (
    <div className="container">
      <div className="random-number-generator-container">
        <h1 className="heading">Random Number</h1>
        <p className="paragraph">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="generate-button" onClick={generateRandomNumber}>
          Generate
        </button>
        <p className="number-display">{randomNumber}</p>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
