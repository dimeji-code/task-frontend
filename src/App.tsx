import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import { Route, Routes,BrowserRouter} from "react-router-dom";
import Landing from './routes/Landing'
import Homescreen from './routes/Homescreen'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Head>
        <Header/>
      </Head>
      <Body>
      <Routes >
        <Route  path="/task-frontend" element={<Landing/>}/>
        <Route  path="/home" element={<Homescreen page="profile"/>}/>
        <Route  path="/schedule" element={<Homescreen page="schedule"/>}/>
        <Route  path="/contacts" element={<Homescreen page="contacts"/>}/>
        <Route  path="/create" element={<Homescreen page="create"/>}/>

      </Routes>
      </Body>
    </div>
    </BrowserRouter>
  );
}

export default App;

const Head = styled.div`
  z-index: 0;
`
const Body = styled.div`
  /* z-index: 2; */
`
