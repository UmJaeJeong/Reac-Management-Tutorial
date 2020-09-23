import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//app.js는 웹사이트에서 화면출력을 담당하는 부분

class App extends Component{
  render(){
    return(
      <div className="gray-background">
        <img src={logo} lat="logo"/>
        <h2>Let's develop ye~~</h2>
      </div>
    );
  }
}

export default App;
