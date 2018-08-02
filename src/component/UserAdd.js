import React from 'react';
import {Prompt} from 'react-router-dom';

export default class UserAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blocking: false};
    }

    handleSubmit = (e) => {
        let name = this.name.value;
        if (!name) {
            return;
        }
        let userStr = localStorage.getItem('users');
        let users = userStr ? JSON.parse(userStr) : [];
        users.push({id: Date.now(), name});
        localStorage.setItem('users', JSON.stringify(users));
        this.setState({
            blocking: false
        }, () => this.props.history.push('/user/list'));

        e.preventDefault();
    };

    handleChange = (e) => {
        this.setState({
            blocking: e.target.value && e.target.value.length > 0
        });
    };

    render() {
        return (
            <div>
                <Prompt when={this.state.blocking} message={(location) => `你确定要跳转到${location.pathname}吗?`}/>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input autoFocus ref={ref => this.name = ref} type="text" className="form-control" id="name"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}