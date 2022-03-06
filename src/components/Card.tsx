import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode,
}

const Container = styled.div<CardProps>`
border: 1px solid #000000;
padding: 16px;
border-radius: 8px;
margin-bottom: 8px;
background: #ffffff;
& > * {
  margin-bottom: 8px;
}
`;

function Card({ children }: CardProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Card;
