import React,{useState} from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import Button from './Button'
import { Link } from "react-router-dom";
import ScheduleIcon from '@mui/icons-material/Schedule';
import FaceIcon from '@mui/icons-material/Face';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CreateIcon from '@mui/icons-material/Create';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {useSelector, useDispatch} from "react-redux"
import {toggleWindowTab} from "../reducers/windowReducer"

const LeftTab = (props:any) => {
    const dispatch = useDispatch()
    const open = useSelector((state:any) => state.window.value.tabOpen) 

  return (
    <Container>
        <TabOpener >
            
            {/* <ArrowButton onClick={() => dispatch(toggleWindowTab({tabOpen: (open?false:true) }))}>
                <DoubleArrowIcon sx={{ color: '#f7faf7eb', }} fontSize="small"/>
            </ArrowButton> */}
             <ArrowButton onClick={() => dispatch(toggleWindowTab({tabOpen: (open?false:true) }))}>
               <span> <DoubleArrowIcon sx={{ color: '#f7faf7eb', }} fontSize="small"/></span>
            </ArrowButton>
                    
        </TabOpener>
        <LeftContainer>
            <Link style={{textDecoration: 'none'}} to="/home">
                <Item style={{backgroundColor : (props.current == "profile" ? "#dfe8dc97":"")}}>
                    <Name>
                    <Title>Profile</Title>
                    </Name>
                    <Icon>
                    <FaceIcon/>
                    </Icon>
                </Item>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/schedule">
                <Item style={{backgroundColor : (props.current == "schedule" ? "#d4e1cfac":"")}}>
                    <Name>
                    <Title>Schedule</Title>
                    </Name>
                    <Icon>
                    <ScheduleIcon/>
                    </Icon>
                </Item>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/contacts">
                <Item style={{backgroundColor : (props.current == "contacts" ? "#d4e1cfac":"")}}>
                    <Name>
                    <Title>Contacts</Title>
                    </Name>
                    <Icon>
                    <ConnectWithoutContactIcon/>
                    </Icon>
                </Item>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/create">
                <Item style={{backgroundColor : (props.current == "create" ? "#d4e1cfac":"")}}>
                    <Name>
                    <Title>Create Task</Title>
                    </Name>
                    <Icon>
                    <CreateIcon/>
                    </Icon>
                </Item>
            </Link>
        </LeftContainer>

       
        

    </Container>
  )
}

export default LeftTab

const Container = styled.div`
    /* background-color: #a7ccb7f4; */
    background-color: #8eac8895;
    /* background-color: var(--col); */
    display: flex;
    height: 100%;
    flex: 1;
    flex-direction: row;
    z-index: 2;
`
const LeftContainer = styled.div`
display: flex;
/* flex: 0.8; */
flex-direction: column;
height: 90vh;
width: 90%;
/* z-index: 2; */


`

const TabOpener = styled.div`
display: flex;
height: 90vh;
flex-direction: column;
background-color:#ffffff13;
justify-content: center;
:hover{
    background-color:#ffffff2d;

}

`
const ArrowButton = styled.div`
    margin: 0 0px;
    border: 1px solid #cccccc1f;
    border-radius: 5px;
    padding: 2px;
    display: flex;
    height: 100%;
    align-items: center;
    position: relative;

span{
  position: relative;
  z-index: 2;
}

:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right:99%;
  width: 0;
  height: 100%;
  /* background: #8eac8861; */
  background: linear-gradient(90deg, #728d6c74,#d9e3dc);
  transition: all 0.5s;
}

:hover{
  color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
}

:hover:after{
  width: 100%;
}
    
`
const Item = styled.div`
    width: 100%;
    height: 50px;
    margin-left: 3px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
        /* background-color: #bedcbba9; */
        background-color: #8eac8847;
    }
    :focus::before{
        color: #000;
    }
    :focus::after{
        color: #000;
    }
`
const Title = styled.h5`
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    padding-left: 5px;

`
const Name = styled.div`
    font-size: 18px;
    color: #fff;
    display: flex;
    flex:0.6;
    min-width: 120px;

`
const Icon = styled.div`
    font-size: 18px;
    color: #fff;
    flex:0.3;


`