import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  fullWidth?: boolean,
  disabled?: boolean,
  onClick: () => void
}

const defaultProps = {
  className: '',
  fullWidth: false,
  disabled: false,
};

const StyledButton = styled.button<ButtonProps>`
  color: white;
  background: #1976d2;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  padding: 8px 4px;
  border-radius: 4px;
  font-weight: 700;
  border: 1px solid #1976d2;

  &:active {
    background: #1858a1;
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.12);
    border: none;
  }
`;

function Button({
  children, className, fullWidth, disabled, onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = defaultProps;

export default Button;
