import React from 'react'
import styled from 'styled-components';
import Visual from "../../components/Section/Visual";
import About from "../../components/Section/About";
import Works from "../../components/Section/Works";
import Skills from "../../components/Section/Skills";
import Contact from "../../components/Section/Contact";

const Home = () => {
    
    return (
        <Container>
            <Visual/>
            <About/>
            <Works/>
            <Skills/>
            <Contact/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;