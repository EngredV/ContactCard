import React, { Component } from "react";
import ContactCard from "./ContactCard";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="container">
          <ContactCard
              name="Ashley Rivers"
              mobile="5168987415"
              work="2127086414"
              email="AshleyR@gmail.com"
              />
          <ContactCard
              name="John Smith"
              mobile="9294589413"
              work="7182050555"
              email="SmithJ@gmail.com"
              /> 
          <ContactCard
              name="Robert Jones"
              mobile="9173204222"
              work="2127086414"
              email="Robert.Jones@gmail.com"
              />
  </div>        
);
  }
}

export default App;
