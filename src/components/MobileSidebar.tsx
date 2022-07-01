import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ScheduleIcon from '@mui/icons-material/Schedule';
import FaceIcon from '@mui/icons-material/Face';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CreateIcon from '@mui/icons-material/Create';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const MobileSidebar = (props:any) => {
  return (
    <Container>
        <div>
            <p>Navigation</p>
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
        </div>
        <TabOpener >
            
            {/* <ArrowButton onClick={() => dispatch(toggleWindowTab({tabOpen: (open?false:true) }))}>
                <DoubleArrowIcon sx={{ color: '#f7faf7eb', }} fontSize="small"/>
            </ArrowButton> */}
             <ArrowButton onClick={() => {}}>
               <span> <DoubleArrowIcon sx={{ color: '#6fb68ceb', }} fontSize="small"/></span>
            </ArrowButton>
                    
        </TabOpener>    
    </Container>
  )
}

export default MobileSidebar

const Container = styled.div`
    position: absolute;
    border: 1px solid #2b2929;
    height: 90vh ;
    background-color: #fff;
    z-index: 4;
    width: 200px;
    /* animation: sidebar-hide 2.1s linear; */
    transform: translateX(-0%);
    transition: 2.9s ease-in-out;
    display: flex;
    justify-content:space-between;
    &before{

    } 
    &after{

    }
    @keyframes sidebar-hide {
        from {

            color:#fff; 
            transition: translateX(100%) ;
        }
        to {
            background-color: #fff;
            transition: translateX(-100%) ;

        }
        }
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
    border-radius: 1px;
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
    border-bottom: 1px solid #364134;
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
    color: #364134;
    padding-left: 5px;

`
const Name = styled.div`
    font-size: 18px;
    color: #364134;
    display: flex;
    flex:0.6;
    min-width: 120px;

`
const Icon = styled.div`
    font-size: 18px;
    color: #fff;
    flex:0.3;


`
