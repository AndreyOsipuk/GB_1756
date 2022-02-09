import React from 'react';
import { Button } from 'components/Button/Button';

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      count: this.props.number,
      interval: null,
    };
  }

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    // console.log('did mount')
    // const interval = setInterval(() => { console.log(1) }, 1000)
    // this.setState({ interval })
    console.log(this.myRef.current);
    this.myRef.current.addEventListener('scroll', (ev) => {
      console.log(1, ev);
    });
  }

  // componentDidUpdate(props, state, snapshot) {
  //   // console.log('update', props, state, snapshot)
  // }

  componentWillUnmount() {
    // console.log('will unmount')
    // clearInterval(this.state.interval)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.number < 5) {
  //     return true
  //   }
  //   return false
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState.count);
    if (nextProps.number < 5) {
      return { count: nextProps.number };
    }
    return null;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return { scroll: 11 }
  // }

  render() {
    return (
      <>
        <h2 ref={this.myRef}>Child componet</h2>
        {/* <p>{this.props.number}</p> */}
        <p>{this.state.count}</p>
        <Button click={this.handleCount} />
      </>
    );
  }
}
