import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Link from 'src/components/Link';

describe('<Link>', () => {
  it('should render default Link', () => {
    render(
      <BrowserRouter>
        <Link to="test" data-testid="link" />
      </BrowserRouter>,
    );
    const linkElement = screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
  });
});
