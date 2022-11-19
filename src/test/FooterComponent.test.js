import { render, screen } from '@testing-library/react';
import FooterComponent from '../components/FooterComponent';

test('renders hectorolea.dev footer', () => {
  render(<FooterComponent />);
  const linkElement = screen.getByText(/hectorolea.dev/i);
  expect(linkElement).toBeInTheDocument();
});
