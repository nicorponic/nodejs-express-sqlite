import React, { Component } from 'react';
import './App.css';
import UsersContainer from './components/UsersContainer';
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={UsersContainer} />
        </main>
      </div>
    );
  }
}

export default App;