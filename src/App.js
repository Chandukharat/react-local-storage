import React from 'react';
import Login from './Login'
import Create from './Create';
import Home from './Home';
import Info from './Info';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App(){
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
      </BrowserRouter>
    );
}

export default App;
