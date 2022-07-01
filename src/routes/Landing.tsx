import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Multitask from '../components/Multitask'
import ReachGoal from '../components/ReachGoal'
import Visualize from '../components/Visualize'
import LoginBox from '../components/LoginBox'
import {useDispatch} from "react-redux"
import Mui from "../components/Mui"
import Mongo from "../components/Mongo"
import Redux from "../components/Redux"
import ReactLogo from "../components/ReactLogo"
import Node from "../components/Node"
const Landing = () => {
  const  dispatch= useDispatch()

  return (
    <Container>
    <AppBody>

      <LandingMid>
        <Left>
          <StyledH1>An Organized way to Manage Your Projects and Tasks</StyledH1>
          <StyledH5>Keep track of your task progress, project goals and areas of improvement to optimize productivity. <br/> <br/>Know what you want to do and get it done.<br/> <br/>Answer to yourself. Be your own <strong>Gaffer</strong>.</StyledH5>
          <div> <Button type='solid'  title='Learn More'/> </div>
        </Left>
        <Right>
          <LoginBox />
        </Right>
      </LandingMid>
    </AppBody>
    <AppBody2>

      <TitleB id='about'>
        <StyledH3>About Us</StyledH3>
      </TitleB>     
      <LeftSvg>
        <Illustration>
          <SvgImg><ReachGoal/></SvgImg>
          <SvgText>
            <p style={{margin: '10px 10px'}}>Reach your <strong>goals</strong> and set new ones.</p>
          </SvgText>
        </Illustration>
        <Illustration>
          <SvgText>
            <p style={{margin: '10px 10px'}}><strong>Visualize</strong> your progress and manage your time better.</p>
          </SvgText>
          <SvgImg><Visualize/></SvgImg>
        </Illustration>
       
      </LeftSvg>
    </AppBody2>
    <Tools>
      <PreFooter id="resources">
        <StyledH3>Tools Used</StyledH3>
        <LogoContainer>
          <Logo><Mui/></Logo>
          <Logo><Redux/></Logo>
          <Logo><ReactLogo/></Logo>
        </LogoContainer>
      </PreFooter>
      <PreFooter id="resources">
        <StyledH3>Coming Soon</StyledH3>
        <LogoContainer>
          <Logo><Node/></Logo>
          <Logo><Mongo/></Logo>
        </LogoContainer>

      </PreFooter>
    </Tools>
    <Footer>
    <h4>©Copyright Dimeji S.</h4>
    </Footer>

    </Container>
  )
}

export default Landing

const Container = styled.div`
  z-index: 2;
`

const AppBody = styled.div`
  height:90vh ;
  width:100vw;
  flex:1;
  display: flex;
  @media (max-width:700px){
    height:100vh ;
  }
`
const AppBody2 = styled.div`
  height:100vh ;
  max-width:100vw;
  flex:1;
  display: flex;
  flex-direction: column;
  @media (max-width:1078px) {
    height:125vh ;
  }
`
const LandingMid = styled.div`
  display: flex;
  flex: 1;
  @media (max-width:700px) {
    flex-direction: column;
  }
`
const StyledH1 = styled.h1`
font-family:'roboto';
font-weight: 600;
font-size: 3.8rem;
color: #2b313bed;
  @media (max-width:935px) {
    font-weight: 500;
    font-size: 2.9rem;
  }
`
const StyledH3 = styled.h3`
font-family:'roboto';
font-weight: 600;
font-size: 2.4rem;
color: #2b313bed;
border-bottom: 1.3px solid #282c33e6;

`

const StyledH5 = styled.h5`
font-family:'roboto';
font-weight: 400;
font-size: 1.25rem;
color: #272b33ae;
@media (max-width:700px) {
    display:none ;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex:0.55;
  padding: 5% 5%;
  text-align: left;
  @media (max-width:700px) {
    text-align: center;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:0.45;
  padding: 5% 5%;
  @media (max-width:700px) {
    text-align: center;

  }
`
const Tools = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width:560px) {
    flex-direction: column;
    align-items: center;
    justify-content:center;
 }
`
const PreFooter = styled.div`
flex-direction: column;
display: flex;
flex:0.5;
align-items: center;
justify-content: center;
background-color:#fff;
/* box-shadow: 0.81px 0.61px 1.5px 2.2px rgba(195, 186, 176, 0.048),2.31px 4.31px 0.8px 1.2px rgba(213, 224, 212, 0.067),
    1px 1px 0.5px 1px rgba(165, 155, 146, 0.056); */
    @media (max-width:710px) {
    flex-direction: column;
    align-items: center;
    justify-content:center;
 }

`
const LogoContainer = styled.div`
padding: 8px 10px;
display: flex;
flex-direction: column;
flex:1;
align-items: center;
justify-content: space-evenly;
/* width:80vw; */
@media (max-width:535px) {
    flex-direction: column;
    /* margin: 30px 0; */
  }

`
const Logo = styled.div`
  margin: 10px 20px;
  padding:2px;
  border-bottom: 1px solid transparent;

  :hover{
    cursor: pointer;
    border-bottom: 1px solid #95989d86;
    box-shadow: 0.11px 0.1px 0.5px 1.2px rgba(231, 228, 224, 0.048);
  }


`


const Footer = styled.div`
  background-color: #8eac883b;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 140px;
  box-shadow: 0.81px 0.61px 1.5px 2.2px rgba(163, 150, 137, 0.048),2.31px 4.31px 0.8px 1.2px rgba(213, 224, 212, 0.067),
    1px 1px 0.5px 1px rgba(91, 66, 44, 0.056);
    h4{ 
      color: #282c33e6 ;
      font-size: 21px;
      font-family:'roboto';
      font-weight: 500;
    }
`
const TitleB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const LeftSvg = styled.div`
 display: flex;
flex-direction: row;
justify-content: space-evenly;
/* width: 100vw; */
/* padding: 2%; */
@media (max-width:1076px) {
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 0 30px ;

 }

`
const Illustration = styled.div`
  border: 1px solid #ccc;
 justify-content: space-between;
 object-fit: contain;
 display: flex;
 flex: 0.36;
 /* flex: 0.5; */
 object-fit: contain;
 overflow: hidden;
 border-radius: 6px;
 box-shadow: 0.31px 0.31px 0.8px 1.2px rgba(115, 195, 109, 0.067),
    1px 1px 1.5px 3.1px rgba(91, 66, 44, 0.089);

  @media (max-width:1076px) {

      margin: 30px 0;
      flex:none;
  }
`

const SvgImg = styled.div`

 background-color: #a5c87fba;
 align-items: center;
 justify-content: center;
 object-fit: contain;
 display: flex;
 flex: 0.3;

 @media (max-width:700px) {
    width: 200px;
  }
  @media (max-width:500px) {
    width: 150px;
  }

`
const SvgText = styled.div`

 background-color: #f6f9f2b9;
 align-items: center;
 justify-content: center;
 object-fit: contain;
 display: flex;
 flex: 0.7;


 @media (max-width:1076px) {
   p{
    font-size: 13px;
   }
 }
 `
