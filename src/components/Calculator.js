import React, { useState } from 'react'
import { getPrice } from '../getPrice'

//images
import officeImg from '../images/office.png'


const Calculator = () => {

  //State to store count of quantity for each time metric
  const [counts, setCounts] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0
  })

  //State that stores total price
  const [price, setPrice] = useState(0)

  // Variables for durations
  const hour = 60
  const day = 1440
  const week = 10080

  //Function that executes each time a button with plus symbol is pressed, adds one to dedictaed time metric in 'counts'-state
  const handleAdd = (e) => {
    const count = counts[e.target.title] + 1
    setCounts({
      ...counts,
      [e.target.title]: count
    })
  }

  //Function that executes each time a button with minus symbol is pressed, substracts one from dedicated time metric in 'counts'-state
  const handleSubstract = (e) => {
    const count = counts[e.target.title] - 1
    setCounts({
      ...counts,
      [e.target.title]: count
    })
  }

  //Function that handles converting user input to minutes, calls 'getPrice'-function and sets the return value to 'price'-state
  const handleCoversion = () => {
    const finalDuration = week * counts.weeks + day * counts.days + hour * counts.hours + counts.minutes

    const total = getPrice(finalDuration)

    setPrice(total)
  }

  return (
    <div className='calculator-container'>

      <h2>Calculate cost for your perfect office</h2>

      <div className='calculator-input-container'>
        <div className='office-card'>
          <img src={officeImg} alt='office'></img>
          <h2>38 Perfect Place, London W12 3ER </h2>
        </div>
        <div className='button-container'>

          <div>
            <button
              className='default-button minus'
              onClick={(e) => handleSubstract(e)}
              title='weeks'
              disabled={counts.weeks === 0}>
              -
            </button>

            <h3>Weeks: {counts.weeks}</h3>

            <button
              className='default-button plus'
              onClick={(e) => handleAdd(e)}
              title='weeks'>
              +
            </button>
          </div>

          <div>
            <button
              className='default-button minus'
              onClick={(e) => handleSubstract(e)}
              title='days'
              disabled={counts.days === 0}>
              -
            </button>

            <h3>Days: {counts.days}</h3>

            <button
              className='default-button plus'
              onClick={(e) => handleAdd(e)}
              title='days'>
              +
            </button>
          </div>

          <div>
            <button
              className='default-button minus'
              onClick={(e) => handleSubstract(e)}
              title='hours'
              disabled={counts.hours === 0}>
              -
            </button>

            <h3>Hours: {counts.hours}</h3>

            <button
              className='default-button plus'
              onClick={(e) => handleAdd(e)}
              title='hours'>
              +
            </button>
          </div>

          <div>
            <button
              className='default-button minus'
              onClick={(e) => handleSubstract(e)}
              title='minutes'
              disabled={counts.minutes === 0}>
              -
            </button>

            <h3>Minutes: {counts.minutes}</h3>

            <button
              className='default-button plus'
              onClick={(e) => handleAdd(e)}
              title='minutes'>
              +
            </button>
          </div>
        </div>


        <button
          className='calculate-button default-button'
          onClick={() => handleCoversion()}>Calculate</button>

        <h3 className='price'>£{price}</h3>
      </div>

    </div>
  )
}

export default Calculator