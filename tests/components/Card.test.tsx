import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from 'src/components/Card';

describe('<Card>', () => {
  it('should render default Card', () => {
    render(<Card>Example Text</Card>);
    const cardElement = screen.getByText(/Example/i);
    expect(cardElement).toBeInTheDocument();
  });
});
