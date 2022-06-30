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

const Homescreen = (props:any) => {

    const window = useSelector((state:any) => state.window.value)
  const [currWidth, setCurrWidth] = useState(0)
    const [ratio,setRatio] = useState([1,99])
    const [open,setOpen] = useState(false)
    const aref = useRef<HTMLDivElement>(null);//for typesctipt reasons
    const lref = useRef<HTMLDivElement>(null);//for typesctipt reasons
    const rref = useRef<HTMLDivElement>(null);//for typesctipt reasons
    var len = 1;

    useEffect(() => {

          console.log("all width", aref.current!.offsetWidth);
          console.log("left width", lref.current!.offsetWidth);
          console.log("right width", rref.current!.offsetWidth);

          if(window.tabOpen){
            setRatio([20,80])
          }else{
            setRatio([1,99])

          }
      }, [ window.tabOpen]);
      
    var swi = open==true?[20,80]:[1,99]

  return (
    <Container ref={aref}>
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
const ArrowButton = styled.div`
    margin: 0 2px;
    border: 1px solid #cccccc1f;
    border-radius: 5px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        border: 1px solid #ccc;
        cursor: pointer;
    }
`

const Body = styled.div`
display: flex;
  z-index: 3;
/* flex: 0.98; */
flex: 1;
border-right: 1px solid #793232;
/* z-index: 2; */

`
