import { render, screen, cleanup } from '@testing-library/react';
import App from '../../App';

// Component Rendering Tests:
// Searchbar.js Rendering:
// Dashboard.js Rendering:
// Testing if the Search button renders the searched information:

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
