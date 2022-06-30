import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from "./Button"
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {useDispatch} from "react-redux"
import {setComplete} from "../reducers/userReducer"

const Table = () => {
    // grab the selected task object
    const userTask = useSelector((state:any) => state.user.selectedTask)
    var userTasks = useSelector((state:any) => state.user.tasks)

    const dispatch = useDispatch()

    const convertTime = (time:string) =>{
        // convert time string into date variable
        const date = new Date(time)
        const mon = date.getMonth()
        const day = date.getDate()
        const yr = date.getFullYear()
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    //   convert back to string 
      var strDate:string = months[mon]+" "+ day+ ", "+yr ;
        console.log("day is ", months[mon]," ", day, " ",yr);
        
        return (time==null?"":strDate)
    }

    const setCompleted = () =>{
            dispatch(setComplete({id: userTask.id,completed:true,title:userTask.title,description:userTask.description,location:userTask.location,deadline:userTask.deadline}))
            console.log("all tasks should be =>",userTasks);
            
    }

  return (
    <Container>
        <Header>
            <h4>Selected Task</h4>
            {userTask?.completed == true && <DoneAllIcon/>}
            {userTask?.completed == false && <Button title='Set Complete' type='outline' onPress={()=>{setCompleted()}}/>}
        </Header>
        <Body>
            <table>
                <tr>
                    <th>Title</th>
                    <td>{userTask?.title} </td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{userTask?.description}</td>
                </tr>
                <tr>
                    <th>Deadline</th>
                    <td>{convertTime(userTask?.deadline)}</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>{userTask?.location}</td>
                </tr>
            </table>
        </Body>
    </Container>
  )
}

export default Table

const Container = styled.div`
    border: 1px solid #dddddd;
    border-radius: 6px;
    overflow: hidden;

`
const Header = styled.div`
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 10px;
    font-size:24px;
    font-family:'roboto';
    font-weight: 500;
    color: #292b39dc;
    flex-direction: row;
`
const Body = styled.div`

    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }
    th{ 
        color: #252632dc;
    }
    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 10px;
    }
    tr:nth-child(even) {
    background: linear-gradient(178deg,#e0e7e2, #99b0945a);

    }
`
