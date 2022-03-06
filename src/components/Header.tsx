import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
position: fixed;
top: 0;
background: white;
width: 100%;
border-bottom: 1px solid #E7EBF0;
& > * {
  padding: 1rem;
  font-weight: 700;
}
`;
function Header() {
  return (
    <Container>
      <Link to="/">Home</Link>
    </Container>
  );
}

export default Header;
