import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <Content />
        <Footer />
      </div>
      
    );
  }
}

export default App;
