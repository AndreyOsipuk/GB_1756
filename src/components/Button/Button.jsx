import React from 'react';

export class Button extends React.Component {
  handleClick = () => {
    this.props.click();
  };

  render() {
    return <button onClick={this.handleClick}>button</button>;
  }
}
