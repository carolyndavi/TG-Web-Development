import React, { Component } from 'react'
import './ClassComponent.css'

class ClassComponent extends Component {
  constructor() {
    super()
    this.state = {
      title: ' ',
    }
  }

  handleInputChange = (input) => {
    this.setState({ title: input })
  }

  render() {
    return (
      <div className='ClassComponent'>
        <h1>Hello Class {this.state.title} !</h1>
        <input
          onInput={(event) => this.handleInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default ClassComponent
