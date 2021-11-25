import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Header from "./Component/Header";
import Discover from "./Component/Discover";
import Jobs from "./Component/Jobs";
import MainPage from "./Component/MainPage";


class App extends Component {
  constructor() {
    super();

    this.state = {
      islogin: false
    }
  };
  
  updatelogin = (flag) => {
      if(flag){
        this.setState({islogin: true})
      }
    else{
        this.setState({islogin: false})
    }
   
  }

  render() {
    return (
      <BrowserRouter>
        <Header islogin={this.state.islogin}  logout={this.updatelogin}/>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Discover" component={Discover} />
          <Route path="/Jobs" component={Jobs} />
          <Route path="/Login" render={() => (<Login update={this.updatelogin}/>)} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
