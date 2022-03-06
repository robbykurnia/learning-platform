import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.ObjectHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value?: any,
  required?: boolean,
  placeholder?: string
}

const defaultProps = {
  value: '',
  required: false,
  placeholder: '',
};

const StyledInput = styled.input`
display: block;
width: 100%;
border-radius: 4px;
box-sizing: border-box;
padding: 4px 8px;
border: 1px solid #9e9e9e;
`;

function Input({
  value, onChange, required, placeholder,
}: InputProps) {
  return (
    <StyledInput value={value} onChange={onChange} required={required} placeholder={placeholder} />
  );
}
Input.defaultProps = defaultProps;
export default Input;
