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
      .then(response => this.upddateUsers(response.body.data))
      .catch(console.error)
  }

  upddateUsers(users) {
    this.setState({
      users: users
    })
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