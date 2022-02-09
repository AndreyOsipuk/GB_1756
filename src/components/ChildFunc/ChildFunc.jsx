import React, { useEffect, useState, useCallback, useRef } from 'react';
// import { Button } from '../Button/Button';

export const ChildFunc = () => {
  const [number, setNumber] = useState(0);
  const ref = useRef(null);

  const someFunction = useCallback(() => {
    console.log('memo', number);
  }, [number]);

  // const memoizedValue = useMemo(() => filtededFunc(count), [count]);

  useEffect(() => {
    console.log('component did mount');
    ref.current.focus();
    return () => {
      console.log('component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('update number', number);
  }, [number]);

  const handleClick = () => {
    setNumber(number + 1);
    someFunction();
  };

  return (
    <>
      {/* <p>{this.props.number}</p> */}
      {/* <p>{this.state.count}</p> */}
      {/* <Button /> */}
      <input ref={ref} type="text" />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        click
      </button>
    </>
  );
};
