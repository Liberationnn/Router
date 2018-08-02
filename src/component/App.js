import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import User from "./User";
import Login from './Login';
import Profile from "./Profile";
import ProtectedRoute from './ProtectedRoute';
import Menu from './Menu';
import NotFound from './NotFound';

export default (
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            用户管理系统
                        </div>
                    </div>
                    <ul className="nav navbar-nav">
                        <Menu label="首页" to="/home"/>
                        <Menu label="用户管理" to="/user"/>
                        <Menu label="个人设置" to="/profile"/>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <col-md-12>
                        <Switch>
                            <Route exact path="/" render={() => <div>首页</div>}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/user" component={User}/>
                            <Route path="/login" component={Login}/>
                            <ProtectedRoute path="/profile" component={Profile}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </col-md-12>
                </div>
            </div>
        </div>
    </Router>
)