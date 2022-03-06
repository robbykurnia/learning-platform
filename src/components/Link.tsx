import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter, LinkProps } from 'react-router-dom';

const StyledLink = styled(LinkRouter)`
  text-decoration: none;
  color: unset;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

function Link(props: LinkProps) {
  return <StyledLink {...props} />;
}

export default Link;
