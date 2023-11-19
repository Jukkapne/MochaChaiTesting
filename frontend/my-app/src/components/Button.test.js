import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';



describe('Button Component', () => {
  test('renders Button with correct text', () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  // You can add more tests, like checking button onClick behavior, if necessary
});
