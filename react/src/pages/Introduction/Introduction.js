import React from 'react'
import ClassComponent from '../../components/ClassComponent/ClassComponent'
import FunctionComponent from '../../components/FunctionComponent/FunctionComponent'
import Navigation from '../../components/Navigation/Navigation'
import './Introduction.css'

const Introduction = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className='Introduction'>
        <FunctionComponent />
        <ClassComponent />
      </div>
    </React.Fragment>
  )
}

export default Introduction
