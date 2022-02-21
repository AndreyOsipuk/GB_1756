import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';
/**
 * @jest-environment jsdom
 */

describe('From', () => {
  test('renders From component', () => {
    render(<Form addMessage={()=> null}/>);

    expect(screen.getByText('Send')).toBeInTheDocument();
  });
});
