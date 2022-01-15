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
            <Link to='/introduction-part-1'>Introduction Part 1</Link>
          </li>
          <li>
            <Link to='/introduction-part-2'>Introduction Part 2</Link>
          </li>
          <li>
            <Link to='/shared-state'>Shared State</Link>
          </li>
          <li>
            <Link to='/lists-and-keys'>Lists and Keys</Link>
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
