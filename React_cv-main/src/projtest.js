import { render, screen } from '@testing-library/react';
import Proj from './proj';

test('renders learn react link', () => {
  render(<Proj />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});