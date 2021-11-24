import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
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
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/Discover" component={Discover}/>
              <Route path="/Jobs" component={Jobs}/>   
              <Route path="/Login" component={Login}/>
              <Route path="/SignUp" component={SignUp}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
