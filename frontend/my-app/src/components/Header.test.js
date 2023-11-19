import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders Header component with title', () => {
    render(<Header title="Welcome to Our App" />);
    expect(screen.getByText('Welcome to Our App')).toBeInTheDocument();
  });
});
