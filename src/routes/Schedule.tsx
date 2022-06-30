import React,{useState} from 'react'
import styled from 'styled-components'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Task from '../components/Task'
import Table from '../components/Table'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {selectTask} from "../reducers/userReducer"

const Schedule = () => {
    const [option, setOption] = useState('upcoming')
    var userTasks = useSelector((state:any) => state.user.tasks)
    var complete = userTasks.filter((task: { completed: boolean }) => task.completed === true)
    var incomplete = userTasks.filter((task: { completed: boolean }) => task.completed === false)
    const dispatch = useDispatch()

    const convertTime = (time:string) =>{
        const date = new Date(time)
        const mon = date.getMonth()
        const day = date.getDate()
        const yr = date.getFullYear()
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      var strDate:string = months[mon]+" "+ day+ " "+yr ;
        return strDate
    }

  return (
    <Container>
        <Top>
            <h4>Tasks</h4>
            <TasksContainer>
                <Options>
                    <Option onClick={()=>{setOption("upcoming")}} style={option=="upcoming"?{borderBottom: "1px solid #6a9263a1"}:{}}>Upcoming</Option>
                    <Option onClick={()=>{setOption("completed")}} style={option=="completed"?{borderBottom: "1px solid #6a9263a1"}:{}}>Completed</Option>
                </Options>
            {option == "upcoming" &&<Tasks>
               {
                incomplete.slice(0).reverse().map((task:any) => (
                <Item onClick={()=>{dispatch(selectTask({selectedTask:task}))}} >
                    <Task title={task.title} deadline={convertTime(task.deadline)} complete={task.completed}/>
                </Item>))
                } 
            </Tasks>}
           {option == "completed" && <Tasks>
               {
                complete.slice(0).reverse().map((task:any) => (
                <Item onClick={()=>{dispatch(selectTask({selectedTask:task}))}} >
                    <Task title={task.title} deadline={convertTime(task.deadline)} complete={task.completed}/>
                </Item>))
                } 
            </Tasks>}
            </TasksContainer>
        </Top>
        <Bottom>
            <Table />
        </Bottom>

    </Container>
  )
}

export default Schedule

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
    flex:0.4;
    border:1px solid #cccccc6c;
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;

`
const TasksContainer = styled.div`
 border:1px solid #7e9679a9;
    overflow-y: scroll;
    width: 350px;
    height: 290px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0.81px 0.61px 1.5px 2.2px rgba(177, 166, 154, 0.136),2.31px 2.31px 2.8px 1.2px rgba(213, 224, 212, 0.067),
     1px 1px 1.5px 2.4px rgba(40, 65, 32, 0.052);
`
const Options = styled.div`
flex:0.25;
/* border-bottom: 1px solid #ccc; */
display: flex;
flex-direction: row;
justify-content: center;
font-weight: 400;
`
const Option = styled.div`
   display: flex;
   flex:0.5;
   justify-content: center;
   align-items: center;
   :hover{
        cursor: pointer;
        background-color: #dbdddb34;
   }

`
const Tasks = styled.div`
    flex:0.75;
    overflow-y: scroll;


`
const Item = styled.div`
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #cadec67c;
    display: flex;
    align-items: center;

    :hover{
        background-color: #cadec67c;
        cursor: pointer;
    }
`

const Bottom = styled.div`
    flex:0.6;
    border:1px solid #cadec67c;
    padding: 25px;


`
