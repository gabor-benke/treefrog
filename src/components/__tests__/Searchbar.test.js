import { render, screen, cleanup } from '@testing-library/react';
import Searchbar from '../Searchbar';

// Searchbar.js Rendering:

test('Rendering Searchbar.js', () => {
  render(<Searchbar />);
  const searchbarElement = screen.getAllByTestId('searchbar-1');
  expect(searchbarElement).toBeInTheDocument();
  expect(searchbarElement).toHaveTextContent('search');
})

