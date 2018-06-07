import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Register from './Components/Register';


class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <Route exact path="/Homepage" component={Homepage}/>
        <Route  path="/Register" component={Register}/>
        <Footer />
      </div>
      
    );
  }
}

export default App;
