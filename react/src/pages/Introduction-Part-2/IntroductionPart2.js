import React from 'react'
import ClassComponent from '../../components/ClassComponent/ClassComponent'
import FunctionComponent from '../../components/FunctionComponent/FunctionComponent'
import Navigation from '../../components/Navigation/Navigation'
import './IntroductionPart2.css'

const IntroductionPart2 = () => {
  return (
    <>
      <Navigation />
      <div className='introduction'>
        <FunctionComponent />
        <ClassComponent />
      </div>
    </>
  )
}

export default IntroductionPart2
