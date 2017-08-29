import React, { Component } from "react";
import { Flex, Box, Grid, Container } from "rebass";

import styled from "styled-components";

import VybzRadar from "./VybzRadar/VybzRadar";
import logo from "./logo.svg";
import "./App.css";

const FittedFlex = styled(Flex)`
  height: 100vh;
`;

const Navbar = styled(Box)`
  margin-bottom: 20px;
  background-color: tomato;
  color: #fff;
`;

const Footer = styled(Box)`
  margin-top: 20px;
  border-top: 2px solid tomato;
`;
const Title = styled.h2`
  text-transform: uppercase;
  color: tomato;
`;
const CenterBox = styled(Box)`
  text-align: center;
`;

const Rhombus = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  transform: rotate(45deg);
`;

const StyledLink = styled.a`
  color: white;
  font-weight: 600;
  text-decoration: none;
  
`;

class App extends Component {
  render() {
    return (
      <FittedFlex align="center" direction="column">
        <Navbar width={1}>
          <Flex align="center" direction="row">
            <Box width={5 / 6} pl={10}>
              <Flex align="left">
                <Box p={5} py={10}>
                  <Rhombus />
                </Box>
              </Flex>
            </Box>
            <CenterBox width={1 / 6}>
              <Flex direction="row">
                <Box width={1 / 3}>
                  <StyledLink href="https://pr0x1m4.github.io/viz-kartel/">
                    viz-kartel
                  </StyledLink>
                </Box>
                <Box width={1 / 3}>
                  <StyledLink href="#why">why</StyledLink>
                </Box>
                <Box width={1 / 3}>
                  <StyledLink href="https://github.com/Pr0x1m4/viz-kartel">
                    github
                  </StyledLink>
                </Box>
              </Flex>
            </CenterBox>
          </Flex>
        </Navbar>
        <Box width={1} flex="1">
          <Container maxWidth={768}>
            <Flex align="center">
              <CenterBox width={1}>
                <Title>Every Vybz Kartel Song. Ever.</Title>
              </CenterBox>
            </Flex>
          </Container>
        </Box>
        <Box width={1} flex="1">
          <VybzRadar />
        </Box>
        <Box id="why" width={1} flex="1">
          <Container maxWidth={768}>
            <Flex align="center">
              <CenterBox width={1}>
                <Title>Why?</Title>
                <p>
                  I just thought "How many songs has Vybz Kartel released over the years".
                </p>
              </CenterBox>
            </Flex>
          </Container>
        </Box>
        <Footer width={1}>
          <Flex direction="row">
            <Box width={1}>
              <Box p={5}>
                <p><b>MADE BY JORDAN JONES</b></p>
              </Box>
            </Box>
          </Flex>
        </Footer>
      </FittedFlex>
    );
  }
}

export default App;
