import React, { Component } from 'react';
import './App.css';
import UsersContainer from './components/UsersContainer';
import { Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
        <NavBar/>
          <Route exact path="/" component={UsersContainer} />
        </main>
      </div>
    );
  }
}

export default App;