import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import ForgotAccount from './Components/ForgotAccount';


class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <Route exact path="/Homepage" component={Homepage}/>
        <Route  path="/Register" component={Register}/>
        <Route  path="/Login" component={Login}/>
        <Route  path="/ForgotAccount" component={ForgotAccount}/>
        <Footer />
      </div>
      
    );
  }
}

export default App;
