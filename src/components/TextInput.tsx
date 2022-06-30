import React,{useState, useEffect} from 'react'
import styled from 'styled-components'



const TextInput = (props: any) => {
    const [text, setText] = useState('')
  useEffect(() =>{

    console.log("Text has changed=>  ",text);
    
  },[ text])
  return (
    <InputBody type={props.type} placeholder= {props.placeholder} />
    //  onChange={(event) =>{setText(event.target.value)}} value={text}/>
  )
}

export default TextInput

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
