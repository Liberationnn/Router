import React from 'react';

export default class UserDetail extends React.Component {
    render() {
        let id = this.props.match.params.id;
        let usersStr = localStorage.getItem('users');
        let users = usersStr ? JSON.parse(usersStr) : [];
        let user = users.find(user => user.id + "" === id);

        return (
            <table className="table">
                <thead>
                <tr>
                    <td className="col-md-2">ID</td>
                    <td className="col-md-10">姓名</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}