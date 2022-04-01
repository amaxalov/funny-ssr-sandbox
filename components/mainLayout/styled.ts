import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
`;

export const StyledLink = styled.a`
  margin-right: 20px;
  transition: color ease-in 0.23s;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: blue;
    transform: scale(1.1);
  }
`;

export const Main = styled.main`
  position: relative;
`;
