import React from 'react'
import styled from 'styled-components'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
const Task = (props:any) => {
  return (
    <Container onClick= {props.onPress}>
        <Title>
            {props.title}
        </Title>
        {/* <Title>Finish Essay </Title> */}
        <Deadline>Deadline: <span>{props.deadline}</span></Deadline>
       {props.complete == true && <Icon><DoneAllIcon sx={{ color: 'var(--col)' }} /></Icon>}
       {props.complete == false && <Icon><HourglassTopIcon sx={{ color: '#a92138' }} /></Icon>}
    </Container>
  )
}

export default Task
const Container = styled.div`
 padding: 2%;
 display: flex;
 flex-direction: column;
 width: 100%;
`
const Title = styled.div`
font-weight: 500;
font-family: roboto;
font-size: 18px;
flex:0.33;
padding: 2%;
`
const Deadline = styled.div`
flex:0.33;
padding: 2%;
font-weight: 400;
font-family: roboto;
font-size: 15px;
    span{ 
        font-weight: 500;
        font-family: roboto; 
        color: var(--col-dark)
    }

`
const Icon = styled.div`
flex:0.2;
padding: 0.5% 2%;
font-weight: 400;
font-family: roboto;
font-size: 12px;
`