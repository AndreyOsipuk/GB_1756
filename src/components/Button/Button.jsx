import React, { Component } from 'react'

export class Button extends Component {
  state = {
    name: this.props.name
  }

  handleClick = () => {
      this.setState({ name: "germany" })
  }

  render() {
    return (
      <>
        <h3>My name is {this.state.name}</h3>
        <button onClick={this.handleClick}>Button</button>
      </>
    )
  }
}