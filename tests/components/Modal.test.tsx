import React from 'react';
import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import Modal from 'src/components/Modal';

describe('<Modal>', () => {
  it('should render default Modal', () => {
    render(<Modal show onClose={jest.fn} data-testid="modal">Example Text</Modal>);
    const modalElement = screen.getByText('Example Text');
    expect(modalElement).toBeInTheDocument();
  });
  it('should handleBubble when click', () => {
    const onClose = jest.fn;
    render(<Modal show onClose={onClose}>Example Text</Modal>);
    const modalElement = screen.getByText('Example Text');
    useEvent.click(modalElement);
  });
});
