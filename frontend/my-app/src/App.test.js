import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and button', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Our App')).toBeInTheDocument();
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});
