import React from 'react';
import './App.css';
// import Nav from "./Nav";
import Home from './Home';
import {  BrowserRouter,
  Routes,
  Route, Switch, Link} from "react-router-dom";
//import { Redirect } from 'react-router-dom';
import Auth from "./auth/App"



function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="/auth" element={<Auth />} />
    <Route path="*" element={ <Home/>} />
    </Routes>
  </BrowserRouter>
  

    
    </div>
  );
}

export default App;


