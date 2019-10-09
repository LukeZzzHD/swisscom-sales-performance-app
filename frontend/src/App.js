import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/style.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import MySalesperformance from './components/MySalesperformance';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route
                        path="/mysalesperformance"
                        component={MySalesperformance}
                    />
                </Switch>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedin: state.loggedin,
        user: state.user,
    };
};

export default connect(
    mapStateToProps,
    null,
)(App);
