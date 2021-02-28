import React from 'react';
import styled from 'styled-components';
import {SectionContainer} from "../Layout/Layout.Styled";

const Visual = () => {

    return(

        <Container>

        </Container>

    )

}

const Container = styled.div`
  
height: 100vh;
display: flex;  
align-items: center;  
justify-content: center;  
background: url("https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80") 50%/cover no-repeat;

`

const Contents = styled.div`
    
    width: 100px;
    max-width: 800px;
    text-align: center;
    
`

export default Visual;