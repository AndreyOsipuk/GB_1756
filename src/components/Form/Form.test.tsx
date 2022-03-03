import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';

describe('From', () => {
  it('renders From component', () => {
    render(<Form />);
    expect(screen.getByText('Send')).toBeInTheDocument();
  });
  it('test snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
