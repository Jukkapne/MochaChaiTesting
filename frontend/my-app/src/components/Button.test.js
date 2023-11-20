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
  test('Button click triggers onClick event', () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
