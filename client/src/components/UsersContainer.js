import React, { Component } from "react";
import request from "superagent";
import Users from "./Users";

export default class UsersContainer extends Component {
    state = { users: null };

    componentDidMount() {
        request
            .get('http://localhost:3001/api/users')
            .then(response => {
                const users = Object.keys(response.body.message);
                this.updateBreeds(users);
            })
            .catch(console.error);
    }

    updateBreeds(users) {
        this.setState({
            users: users
        });
    }

    render() {
        return <Users users={this.state.users} />;
    }
}