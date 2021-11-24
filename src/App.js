import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Header from "./Component/Header";
import Discover from "./Component/Discover";
import Jobs from "./Component/Jobs";
import MainPage from "./Component/MainPage";


const App = () => {
    return (
      <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<MainPage/>}/>
              <Route path="/Discover" element={<Discover/>}/>
              <Route path="/Jobs" element={<Jobs/>}/>   
              <Route path="/Login" element={<Login/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App;
