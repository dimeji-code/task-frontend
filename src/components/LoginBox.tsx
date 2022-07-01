import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {login} from "../reducers/userReducer"
const LoginBox = () => {
    const  dispatch= useDispatch()
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const grabCredentials = useSelector((state:any) => state.user.user)
    useEffect(() =>{
  
      console.log("Text has changed=>  ",email);
      
    },[ email])

    const confirmLogin = () => {
      // if (name.toLocaleLowerCase() == grabCredentials.name && password == grabCredentials.password) {
        dispatch(login({login:true}))
        navigate("/home",{replace:true})

      // }
    }

  return (
        <LoginContainer>
            <Header>            
              <StyledH4>Log in</StyledH4>
            </Header>
            <Body>
              <InputBody type='text' placeholder='Username:' onChange={(event:any) =>{setName(event.target.value)}} value={name}/>
              {/* <InputBody type='email' placeholder='Email:' onChange={(event:any) =>{setEmail(event.target.value)}} value={email}/> */}
              <InputBody required={true} type='password' placeholder='Password:' onChange={(event:any) =>{setPassword(event.target.value)}} value={password}/>
                <div>
                  {/* <Link to='/home'> */}
                  <Button type='outline'  title = 'Enter' onPress={()=>{confirmLogin()}}/>
                  {/* </Link> */}
                </div>
            </Body>
          </LoginContainer>  )
}

export default LoginBox

const StyledH4 = styled.h4`
font-family:'roboto';
font-weight: 500;
font-size: 2.0rem;
color: #2b313bed;
`

const Header = styled.div`
  border-bottom: 1px solid #c5c5cb;
  /* background-color: #c6e0d030; */
  background-color: #8eac8832;
`
const Body = styled.div`
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const LoginContainer = styled.div`
  width: 100%;
  background-color:#fff;
  box-shadow: 0.31px 0.31px 0.8px 1.2px rgba(115, 195, 109, 0.067),
    1px 1px 0.5px 1px rgba(91, 66, 44, 0.089);
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
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