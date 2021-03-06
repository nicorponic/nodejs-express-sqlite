import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Users extends Component {
    renderUser(user) {
        return (
            <li key={user.id}>
                <Link to={`/users/${user.name}`}>{user.name}</Link>
            </li>
        );
    }

    render() {
        const { users } = this.props;
        return (
            <div className="users-list">
                <h1>Users List</h1>

                {users && <ul>{users.map(this.renderUser)}</ul>}
            </div>
        );
    }
}