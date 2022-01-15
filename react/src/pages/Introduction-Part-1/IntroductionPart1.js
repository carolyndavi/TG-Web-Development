import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './IntroductionPart1.css'

const IntroductionPart1 = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Navigation />
      <div className='introduction'>
        <h2>Hello Function {searchValue} !</h2>
        <h2>Hello Class {searchValue} !</h2>
        <input type='text' onChange={handleInputChange} />
      </div>
    </>
  )
}

export default IntroductionPart1
