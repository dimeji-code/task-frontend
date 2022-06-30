import React from 'react'
import styled from 'styled-components'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { Link } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Contacts = () => {
  return (
    <Container>
      <Top>
        <Add>
          <AddBtn>
            <AddCircleIcon sx={{ color:'var(--col)', fontSize:42}} />
            <StyledH5>Add Contact</StyledH5>
          </AddBtn>
          {/* <div>Add Contact</div> */}
        </Add>
        <Search>
          <SearchBar>
            <TextInput type='text' placeholder="Search" />
          </SearchBar>
          <Button  type='outline' color='green'  title = 'Search' onPress={()=>{}}/>

        </Search>
      </Top>
      <Bottom>
          <div>
          <h5>Social Life Pending...</h5>
          <p>But for now, enjoy other pages</p>
          </div>
      </Bottom>
    </Container>
  )
}

export default Contacts
const Container = styled.div`
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
    flex:0.2;
    border:1px solid #cccccc6c;
    display:flex;

`
const Add = styled.div`
  flex: 0.2;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const AddBtn = styled.button`
  border: 1px solid #cccccc6c;
  border-radius: 6px;
  background-color: #f9f7f712;
  margin-bottom: 5px;
  :hover{
    cursor: pointer;
    box-shadow: 1.31px 1.31px 3.8px 4.2px rgba(193, 205, 192, 0.067),
    1px 1px 0.5px 1px rgba(174, 172, 170, 0.075);
    /* background-color: #ecf1ea25; */

  }

`
const StyledH5 = styled.h5`
      font-size: 15px;
      font-weight:400;
      font-family: 'roboto';
      color: #333441ba;
      margin: 0;
`
const Search = styled.div`
  flex: 0.8;
  align-items: center;
  justify-content: center;
  display:flex;
  padding: 1% 6%;
`
const SearchBar = styled.div`
  /* align-items: center; */
  /* justify-content: center; */
  display:flex;
  width: 100%;
  margin-right: 2px;

`

const Bottom = styled.div`
    flex:0.8;
    display: flex;
    border:1px solid #cccccc6c;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h5{ 
      font-size: 24px;
      font-weight:400;
      font-family: 'roboto';
      color: #252632dc;
      margin: 0;
    }

`