import React from 'react';
import { Button } from './components/Button/Button';
import { Child } from './components/Child/Child';
// import { ChildFunc } from './components/ChildFunc/ChildFunc';

export class App extends React.Component {
  state = {
    count: 1,
    toggle: true,
    array: [1, 2, 3],
    text: '',
    messageList: [],
  };

  handleCount = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  handleToggle = () => {
    this.setState((prevToggle) => ({ toggle: !prevToggle.toggle }));
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      messageList: [...this.state.messageList, this.state.text],
    });
  };

  handleInputChange = (ev) => {
    this.setState({ text: ev.target.value });
  };

  render() {
    return (
      <>
        <h2>Parent component</h2>
        <p>{this.state.count}</p>
        <Button click={this.handleCount} />
        <button onClick={this.handleToggle}>
          {this.state.toggle ? 'hide' : 'show'}
        </button>
        <hr />

        {this.state.toggle && <Child number={this.state.count} />}

        <hr />
        <h2>Function component</h2>

        {/* {this.state.toggle && <ChildFunc number={this.state.count} />} */}

        {/* {this.state.array.map((item, idx) => {
          return <p key={idx}>{item}</p>
        })} */}

        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <input type="text" onChange={(ev) => this.handleInputChange(ev)} />
          <button type="submit">click</button>

          <ul>
            {this.state.messageList.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
        </form>
      </>
    );
  }
}
