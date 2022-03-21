import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';

describe('From', () => {
  it('renders From component', () => {
    render(<Form addMessage={() => null} />);
    expect(screen.getByText('Send')).toBeInTheDocument();
  });
  it('test snapshot', () => {
    const { asFragment } = render(<Form addMessage={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
