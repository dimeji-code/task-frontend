import React from 'react'
import styled from 'styled-components'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import CreateTask from '../components/CreateTask'
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <Container>
      <Top>
        <h4>Create Task</h4> 
        <h5>Add a new task to your Database.</h5> 
      </Top>
      <Bottom>
        {/* <TaskContainer> */}
          <CreateTask/>
        {/* </TaskContainer> */}
      </Bottom>
    </Container>
  )
}

export default Create

const Container = styled.div`
  height:100% ;
  width:100%;
  flex:1;
  display: flex;
  text-align: left;
  flex-direction: column;
  border:1px solid #cccccc6c;
`
const Top = styled.div`
    flex:0.2;
    border:1px solid #cccccc6c;
    display: flex;
    flex-direction: column;
    padding: 0 6%;
    justify-content: center;
    
    h4,h5{
      font-family: 'roboto';
      color: #333441c0;
    }
    h4{
      font-size: 18px;
      font-weight:500;
    }
     h5{
      margin-top: 0;
      font-size: 15px;
      font-weight:400;
    }

`
const Bottom = styled.div`
    flex:0.8;
    border:1px solid #cadec67c;
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TaskContainer = styled.div`
  border:1px solid #cadec67c;
  width: 90%;
  height: 95%;
`