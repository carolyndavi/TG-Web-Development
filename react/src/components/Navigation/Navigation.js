import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className='Navigation'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/introduction'>Introduction</Link>
          </li>
          <li>
            <Link to='/sharedState'>Shared State</Link>
          </li>
          <li>
            <Link to='/listsAndKeys'>Lists and Keys</Link>
          </li>
          <li>
            <Link to='/lifecycle'>Lifecycle</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navigation
