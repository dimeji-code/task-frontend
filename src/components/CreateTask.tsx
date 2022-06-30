import React,{useState} from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import Button from './Button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {addTask,} from "../reducers/userReducer"
import {useDispatch, useSelector} from "react-redux"
import {TaskSchema} from "../data/data"

import axios from 'axios';

const CreateTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [loc, setLoc] = useState("");

    const dispatch = useDispatch()
    const userInfo = useSelector((state:any) => state.user)

    const [valid, setValid] = useState("");
    const [validBool, setValidBool] = useState(true)
    
    const submit =()=>{
        const date = new Date();

        validation(date)
        if(title!="" && desc!="" && loc!="" && startDate>=date){
        dispatch(addTask({
            id:"222",title:title ,description:desc,location:loc, deadline:`${startDate}`, completed:false
        }))

        setValid('')
        setValidBool(true)
        setTitle('')
        setDesc('')
        setLoc('')
     }
       
    }
    const validation = (date: Date) =>{

        if(startDate<date){
            // pick a valid date
            setValidBool(false)
            setValid('Please pick a valid date!')
            setTimeout(()=>{
                setValidBool(true)
                setValid('')
            },1500)
        }
        else if(title=="" || desc=="" || loc==""){
            setValidBool(false)
            setValid('Please fill out empty fields!')
            setTimeout(()=>{
                setValidBool(true)
                setValid('')
            },1500)
        }

    }

  return (
    <Container>
        <Header>
            <h5>Fill out fields below (*)</h5>
        </Header>
        <Body>
            <InputBody type='text' placeholder='Title *' onChange={(event:any) =>{setTitle(event.target.value)}} value={title}/>
            <InputBody type='text' placeholder='Description *' onChange={(event:any) =>{setDesc(event.target.value)}} value={desc}/>
            <InputBody type='text' placeholder='Location *' onChange={(event:any) =>{setLoc(event.target.value)}} value={loc}/>

           
            <div>
                <h5>* Pick deadline date : </h5>
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            </div>
            <Submit>
                <Button title="Submit" type="outline" onPress={submit}/>
            </Submit>
            {validBool == false && <h4>{valid}</h4>}
            {validBool == true && <h2>valid</h2>}
        </Body>
    </Container>
  )
}

export default CreateTask;

const Container = styled.div`
  height:100% ;
  width:100%;
  flex:1;
  display: flex;
  text-align: left;
  flex-direction: column;
  border:1px solid #cccccc6c;
`
const Header = styled.div`
padding:2px 5%;
    h5{
        font-family: 'roboto';
        font-size: 15px;
        color: #333441c0;
    }

`
const Body = styled.div`
display: flex;
flex-direction: column;
padding:5%;
align-items: center;
    h4{
        color: #a42a2a;
        font-size: 13px;
    }
    h2{
        color: transparent;
        font-size: 13px;
    }
`
const InputBody = styled.input`
    padding:10px;
    margin: 10px 0;
    font-size: 16px;
    border-radius:8px;
    border: 1.2px solid #ccc;
    width: 100%;
    :focus{
        outline-width: 0;
        outline: none;
        border: 1.2px solid #abbb9e;
        /* animation: button-move infinite 20s linear; */

    }
`
const Submit = styled.div`
    margin-top:10px;
`
