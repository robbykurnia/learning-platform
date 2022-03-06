import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from 'src/components/Button';

describe('<Button>', () => {
  it('should render default Button', () => {
    render(<Button onClick={jest.fn}>Example Text</Button>);
    const buttonElement = screen.getByText(/Example/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it('should render fullWidth Button', () => {
    render(<Button onClick={jest.fn} fullWidth>Example Text</Button>);
    const buttonElement = screen.getByText(/Example/i);
    expect(buttonElement).toHaveStyle({ width: '100%' });
  });
});
