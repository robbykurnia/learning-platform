import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassDetail from 'src/pages/ClassDetail';

test('render ClassDetail Page', () => {
  render(<ClassDetail />);
  const linkElement = screen.getByTestId('ClassDetail');
  expect(linkElement).toBeInTheDocument();
});
