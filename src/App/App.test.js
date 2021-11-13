import { render, screen } from '@testing-library/react';

import Header from '../components/Header/index';

test('Header should have an image and username', () =>{
  render(<Header />);

  const headerLogo = screen.getByTestId('headerLogo');

  expect(headerLogo).toBeInTheDocument();
});
