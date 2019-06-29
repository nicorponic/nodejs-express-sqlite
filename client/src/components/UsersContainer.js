import React, { Component } from "react";
import request from "superagent";
import Users from "./Users";

export default class UsersContainer extends Component {
    state = {
        users: null
    };

    componentDidMount() {
        request
            .get('http://localhost:3001/api/users')
            .then(response => this.setState({ users: response.body.data }))
            .catch(console.error)
    }

    // upddateUsers(users) {
    //   this.setState({
    //     users: users
    //   })
    // }

    render() {
        return <Users users={this.state.users} />;
    }
}