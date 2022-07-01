import React,{useState,useRef, useEffect} from 'react'
import styled from 'styled-components'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { Link } from "react-router-dom";
import Split from 'react-split'
import LeftTab from "../components/LeftTab"
import Profile from './Profilescreen'
import Schedule from './Schedule'
import Contacts from './Contacts'
import Create from './Create'
import { Route, Routes,BrowserRouter} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import MobileSidebar from '../components/MobileSidebar';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {width,height};
}

const Homescreen = (props:any) => {

    const window = useSelector((state:any) => state.window.value)
    const [ratio,setRatio] = useState([1,99])
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const aref = useRef<HTMLDivElement>(null);//for typesctipt reasons
    const lref = useRef<HTMLDivElement>(null);//for typesctipt reasons
    const rref = useRef<HTMLDivElement>(null);//for typesctipt reasons
    var len = 1;

    useEffect(() => {

          // console.log("all width", aref.current!.offsetWidth);
          // console.log("left width", lref.current!.offsetWidth);
          // console.log("right width", rref.current!.offsetWidth);

          if(window.tabOpen){
            setRatio([20,80])
          }else{
            setRatio([1,99])

          }
      }, [ window.tabOpen]);
      

  return (
    <Container ref={aref}>
      {windowDimensions.width > 950 &&
        <Split  style={{flex:1,flexDirection: "row", display:"flex", width:"100vw" }} sizes={ratio}
                minSize={0}
                expandToMin={false}
                snapOffset={50}
                gutterSize={6}
                color= "black"
                gutterAlign="center"
                direction="horizontal"
                cursor="col-resize">

            <Left ref={lref}>
                <LeftTab  current={props.page}/>
            </Left>

            <Right ref={rref}>
                <Body>
                    {props.page =="profile"&& <Profile />}
                    {props.page =="schedule"&& <Schedule />}
                    {props.page =="contacts"&& <Contacts />}
                    {props.page =="create"&& <Create />}
                </Body>
            </Right>


        </Split>
    }
      {windowDimensions.width <= 950 && 
      <MobileContainer> 
      <MobileSidebar />
      <Body>
      {props.page =="profile"&& <Profile />}
      {props.page =="schedule"&& <Schedule />}
      {props.page =="contacts"&& <Contacts />}
      {props.page =="create"&& <Create />}
      </Body>
      </MobileContainer>
          }

    </Container>
  )
}

export default Homescreen
const Container = styled.div`
  height:90vh ;
  width:100vw;
  flex:1;
  display: flex;
  /* z-index: 2; */
`
const Left = styled.div`
  height:100%;
  min-width:1.5vw;
  max-width: 32vw;
  display: flex;
  /* background-color:#eaa6a6; */
`
const Right = styled.div`
  height:100%;
  background-color:white;
  border: 1px solid var(--slack-border-white);
  min-width:78vw;
  max-width: 98vw;
  display: flex;
  z-index: 3;

  /* background-color:#a6eaca; */
`
const Body = styled.div`
  display: flex;
  width: 100%;
  z-index: 3;
  flex: 1;
  border-right: 1px solid #793232;
  padding: 0 10px;

`
const MobileContainer = styled.div`
width: 100%;

`
