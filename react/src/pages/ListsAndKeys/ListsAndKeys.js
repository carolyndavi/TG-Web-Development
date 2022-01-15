import React, { useState, useRef } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './ListsAndKeys.css'

const ListsAndKeys = () => {
  const [value, setValue] = useState([])
  const inputRef = useRef()

  const buttonHandler = () => {
    let input = document.querySelector('input')

    setValue((prevState) => {
      let state = [...prevState]
      state.push(input.value)
      return state
    })
  }

  return (
    <>
      <Navigation />
      <div className='lists-and-keys'>
        <ul>
          {value.map((value) => (
            <li>{value}</li>
          ))}
        </ul>

        <input ref={inputRef} id='input' type='text' />
        <button onClick={buttonHandler}>Submit Number</button>
      </div>
    </>
  )
}

export default ListsAndKeys
