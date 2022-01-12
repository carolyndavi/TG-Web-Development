import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/introduction'>
        <li>Introduction</li>
      </Link>
      <Link to='/sharedState'>
        <li>Shared State</li>
      </Link>
      <Link to='/listsAndKeys'>
        <li>Lists and Keys</li>
      </Link>
      <Link to='/lifecycle'>
        <li>Lifecycle</li>
      </Link>
    </ul>
  )
}

export default Navigation
