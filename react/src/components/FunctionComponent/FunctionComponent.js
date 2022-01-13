import React, { useState } from 'react'
import './FunctionComponent.css'

const FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='FunctionComponent'>
      <h1>Hello Function {searchValue} !</h1>
      <input type='text' onChange={handleInputChange} />
    </div>
  )
}

export default FunctionComponent
