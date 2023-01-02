import logo from './logo.svg';
import './App.css';
import {useEffect,useState}from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import Login from './components/authentication/Login'
import ReactDOM from 'react-dom/client';
function App() {
  return(
    <>
    <Header/>
      <Routes>
        
        
        <Route path ="/login" element={<Login/>} />
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </>
  )

 
}



export default App;
