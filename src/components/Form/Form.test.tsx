import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';
/**
 * @jest-environment jsdom
 */

describe('From', () => {
  it('renders From component', () => {
    render(<Form addMessage={() => null} />);
    expect(screen.getByText('Sendd')).toBeInTheDocument();
  });
  it('test snapshot', () => {
    const { asFragment } = render(<Form addMessage={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
