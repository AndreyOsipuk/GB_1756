import React, { FC, useState } from 'react';

type WithClassesProp = {
  classes: string;
};

export function WithClasses<T>(
  WrappedComponent: React.ComponentType<T & WithClassesProp>
) {
  return function Wrapper(props: T & WithClassesProp) {
    return (
      <div className={props.classes}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
