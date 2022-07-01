import React,{useEffect} from 'react'
import styled from 'styled-components'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import DoughnutChart from '../components/DoughnutChart'
import { useSelector } from 'react-redux'
import {totalTasks, numComplete} from "../data/data"

import axios from 'axios';

const Profilescreen = (props: any) => {

    const user = useSelector((state:any) => state.user)
    const all = user.tasks
    var complete = all.filter((task: { completed: boolean }) => task.completed === true)
    var incomplete = all.filter((task: { completed: boolean }) => task.completed === false)

    const mostRecent = () => {
        console.log("inside most recent; ", incomplete);


        var holder:number = 0;
        for (let index = 0; index < incomplete.length; index++) {
            var current = new Date(incomplete[index].deadline)
            if(index == incomplete.length - 1) {
                console.log("DDDATE; ",current);
                break;

            }
            var next = new Date(incomplete[index+1].deadline)

            if (next < current){
                holder = index+1;
            }   
        }
  
        return incomplete[holder]
    }
    // mostRecent()

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
        <Top >
            <ProfileImg>
                <img src='https://www.fcbarcelona.com/photo-resources/2022/03/02/c31a1150-821c-42d1-ac7d-09611a355507/mini_1200x750-25-AUBAMEYANG.png?width=1200&height=750' />
            </ProfileImg>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginLeft:'15px', flex:1}}>
                <h3>Hello <span style={{color:"#61882ae6"}}> {user.user.name}</span>.</h3>
                <div>
                    <Button  type='outline' color={'#61882ae6'} title = 'Edit Profile' onPress={()=>{}}/>
                       
                </div>
            </div>
        </Top>
        <Data>

                <Info>
                <h4>Upcoming Task</h4>
                <Table>
                    <Answer>
                        <Title>{mostRecent()?.title}</Title>
                        <p>{mostRecent()?.description}</p>
                        <p>Location: {mostRecent()?.location}</p>
                        <p>Deadline: {convertTime(mostRecent()?.deadline)}</p>
                    </Answer>
                </Table>
                <div style={{margin: "15px 1px"}}>
                    <Button  type='outline' color={'#61882ae6'} title = 'Edit Task' onPress={()=>{}}/>
                </div>
            </Info>
            <Info>
                <h4>Completion Ratio</h4>
                <Table>
                   <DoughnutChart incomplete={incomplete.length}  complete={complete.length} />
                </Table>
            </Info>
        </Data>
    </Container>
  )
}

export default Profilescreen

const Container = styled.div`
  z-index: 3;
  height:100% ;
  width:100%;
  flex:1;
  display: flex;
  text-align: left;
  flex-direction: column;
  border:1px solid #cccccc6c;
  padding: 0rem 5%;
`
const Top = styled.div`
    flex-direction: row;
    flex: 0.2;
    align-items: center;
    padding: 8px;
    border:1px solid #cccccc6c;
    border-radius: 6px;
    margin-bottom: 2%;
    margin-top: 2%;
    box-shadow: 0.81px 0.61px 1.5px 2.2px rgba(177, 166, 154, 0.136),2.31px 4.31px 0.8px 1.2px rgba(213, 224, 212, 0.067),
    1px 1px 0.5px 1px rgba(40, 65, 32, 0.052);
`
const ProfileImg = styled.div`
    display: flex;
    flex: 0.2;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--col);
    align-items:center;
    justify-content: center;

    img{ 
        border-radius: 50%;
        width: 95px;
        height: 95px;
        object-fit: cover;   
    }
`
const Data = styled.div`
    display: flex;
    /* flex: 0.55; */
    flex-direction: row;
    justify-content:space-between;
    @media (max-width:745px) {
            flex-direction: column;
            align-items: center;
        }
`
const Info = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #bac3b618;
 border-radius: 10px;
 padding: 10px 12px;
 box-shadow: 0.81px 0.61px 1.5px 2.2px rgba(163, 150, 137, 0.136),2.31px 4.31px 0.8px 1.2px rgba(213, 224, 212, 0.067),
    1px 1px 0.5px 1px rgba(91, 66, 44, 0.052);
 width: 40%;
 /* overflow: hidden; */
 @media (max-width:745px) {
            flex-direction: column;
            align-items: center;
            width: 85%;
            overflow-y: scroll;
        }
`
const Table = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #bac3b63d;
 border-radius: 10px;
 padding: 12px;
`
const Answer = styled.div`
 margin: 0 15px;
`
const Title = styled.p`
    font-weight: 600;
    font-size: 16px;
`
