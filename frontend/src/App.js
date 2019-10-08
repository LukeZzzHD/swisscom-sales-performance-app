import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/style.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
        console.log(`
            Component did mount inside App.js
            loggedin: ${this.props.loggedin}
            user: ${this.props.user ? JSON.stringify(this.state.user) : 'No user'}
        `);
    }

    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
            </>
        );
    }
}

const mapStateToProps = state => ({
    loggedin: state.loggedin
});

export default connect(
    mapStateToProps,
    null
)(App);
