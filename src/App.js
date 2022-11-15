import React, { useEffect, useState } from 'react'
import "./App.css";
import Landingpage from './Components/Screens/Landingpage/Landingpage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { HeaderFilter } from './Components/Screens/Landingpage/HeaderFilter';
import { ListPage } from './Components/Screens/Landingpage/ListPage';
import MainRouter from './Components/Screens/Router/MainRouter';


export default function App() {
  return (
    <>
   
    <MainRouter/>

    </>
    
    
    
  )
}

