import React from 'react'
import ClassComponent from '../../components/ClassComponent/ClassComponent'
import FunctionComponent from '../../components/FunctionComponent/FunctionComponent'
import Navigation from '../../components/Navigation/Navigation'

const Introduction = () => {
  return (
    <div>
      <Navigation />
      <FunctionComponent />
      <ClassComponent />
    </div>
  )
}

export default Introduction
