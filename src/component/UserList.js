import React from 'react';
import {Link} from 'react-router-dom';

export default class UserList extends React.Component {
    render() {
        let usersStr = localStorage.getItem('users');
        let users = usersStr ? JSON.parse(usersStr) : [];

        return (
            <ul className="list-group">
                {
                    users.map((user, index) => (
                            <li key={index} className="list-group-item">
                                <Link to={'/user/detail/' + user.id}>{user.name}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}