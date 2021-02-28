import React from 'react'
import styled from 'styled-components';

const Header = () => {

    return (
        <Container>
            <Logo>Logo</Logo>
            <Nav>
            <NavItem>home</NavItem>
            <NavItem>about</NavItem>
            <NavItem>works</NavItem>
            <NavItem>skills</NavItem>
            <NavItem>contact</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
`;

const Logo = styled.div`
    font-size: 20px;
  font-weight: bold;
  color: #333;
`

const Nav = styled.div`
    
    display: flex;
    
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 65px;
  color: #333;
  text-transform: capitalize;
  cursor: pointer;
  &:hover{
    color: #18f;
  }
`;


export default Header;