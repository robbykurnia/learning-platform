import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterClass from 'src/components/RegisterClass';

describe('<RegisterClass>', () => {
  it('should render default RegisterClass', () => {
    render(<RegisterClass id="1" />);
    const registerClassElement = screen.getByTestId('RegisterClass');
    expect(registerClassElement).toBeInTheDocument();
  });
});
