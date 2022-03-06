import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from 'src/components/Input';

describe('<Input>', () => {
  it('should render default Input', () => {
    render(<Input placeholder="example" onChange={jest.fn} />);
    const inputElement = screen.getByPlaceholderText('example');
    expect(inputElement).toBeInTheDocument();
  });
});
