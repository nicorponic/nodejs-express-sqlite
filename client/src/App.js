import React, { Component } from 'react';
import './App.css';
import request from 'superagent';


class App extends Component {
  state = { users: [] }

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }
  // componentDidMount() {
  //   request
  //     .get('http://localhost:3001/api/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  componentDidMount() {
    request
      .get('http://localhost:3001/api/users')
      .then(console.log)
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default App;