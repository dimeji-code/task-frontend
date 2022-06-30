import React from 'react'
import styled from 'styled-components'
import { color, border } from 'styled-system'
import Logo from "./Logo"
import { Link, useNavigate } from "react-router-dom";
import Button from './Button';
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../reducers/userReducer"
const Header = (props: any) => {
    const  user = useSelector((state:any) => state.user)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const signout = async() =>{
        if(user.login){
            // not sure if ther is a need for await Here
            //but i wont change it now. Work on database begins soon
            await dispatch(logout({
                name:"",email:"",password:"",login:false
            }))

            navigate("/",{replace:true})

        }
    }

  return (
    <HeaderContainer>
        <div className="custom-shape-divider-bottom-1656185425">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        <LeftSide>
            <Link to='/'>
                <Logo />
            </Link>
        </LeftSide>
        <MiddleSide>
            <Un_List>
                {user.login && <li><a href=''>Productivity Tips</a></li>}
                {!user.login && <li><a href='#about'>About Us</a></li>}
                {!user.login && <li><a href='#resources'>Resources</a></li>}
                {/* <li><a href='#about'>Socials</a></li> */}
            </Un_List>
    
        </MiddleSide>
        {/* <Button  type='outline' color='#7e421f' title = 'Find Out More' onPress={()=>{}}/> */}
        <RightSide1>
        <Button  type='outline' color='green'  title = 'Find Out More' onPress={()=>{}}/>
        </RightSide1>
        <RightSide2>
        {/* <Button  type='outline' color='#61882ae6' title = 'Sign up' onPress={()=>{}}/> */}
        <Button  type={user.login==false?'solid':'outline'} color='brown'  title = {user.login==false?'Sign up':'Sign Out'} onPress={()=>{
            signout()
        }}/>
        </RightSide2>

    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    height: 10vh;
    overflow: hidden;
    padding: 0px 5%;
    display: flex;
    flex-direction: 'row';
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    box-shadow: 0.31px 0.31px 0.8px 1.2px rgba(115, 195, 109, 0.067),
    1px 1px 0.5px 1px rgba(91, 66, 44, 0.089);
    @media (max-width:400px) {
            padding: 4% 6%;
        }
`
const Un_List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
    padding: 0;
    color: #333131;
    @media (max-width:400px) {
            display: none;
        }

    li{ 
        text-decoration: none;
        list-style: none;
        font-size: 18px;
        margin: 4px 10px;
        font-weight: 400;
        padding: 5px;
        border-bottom: 1px solid #cccccc16;
        @media (max-width:510px) {
            font-size: 15px;
            margin: 4px 3px;
        }
        a{ 
            text-decoration: none;
            list-style: none;
            color: #333131;
            :hover{
            cursor: pointer;
            border-bottom: 1px solid;
            color: #000;

        }
        }

    }
`
const LeftSide = styled.div`
    display: flex;
    align-items: center;
    flex: 0.25;
    z-index: 2;

`
const MiddleSide = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 0.50;
    z-index: 2;

    @media (max-width:935px) {
        flex: 0.75;
  }
  @media (max-width:1135px) {
        flex: 0.65;
  }
`
const RightSide1 = styled.div`
    z-index: 2;
    @media (max-width:740px) {
    display:none;

}
`
const RightSide2 = styled.div`
    z-index: 2;

`

