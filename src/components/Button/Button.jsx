import React, { Component } from 'react'

const a = 3

const b = `name ${a}`

export class Button extends Component {
  render() {
    return (
      <>
        <h3 style={{ fontSize: a > 2 ? "28px" : "10px" }}>My name is {this.props.name}</h3>
        <button>Button</button>
      </>
    )
  }
}