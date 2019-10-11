import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LOGIN_REQUESTED } from '../actions/actionCreators';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    render() {
        if (this.props.loggedin) {
            return <Redirect to='/' />;
        }
        return (
            <div id='overall-informations'>
                <div className='container'>
                    <div className='margin-v-4'>
                        <h2 className='navy'>
                            Swisscom Sales Performance App{' '}
                            <span role='img' aria-label='rocket'>
                                🚀
                            </span>
                        </h2>
                    </div>
                    <br />
                    <div className='login-box login'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='login-title'>Login</div>
                            <div className='input-field input-field--fixed'>
                                <input
                                    type='text'
                                    name='username'
                                    placeholder='Benutzername'
                                    autoCorrect='off'
                                    autoCapitalize='off'
                                    data-sso-auto-focus='true'
                                    className='validate'
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='username'>Benutzername</label>
                            </div>
                            <div className='input-field input-field--fixed'>
                                <br />
                                <i
                                    data-sso-show-password='true'
                                    className='icon icon-218-eye-shut icon--s2 sso-form__show-password'
                                    aria-hidden='true'
                                    onClick={() => console.log('clicked eye icon')}
                                />
                                <input
                                    type='password'
                                    className='password'
                                    name='password'
                                    placeholder='Passwort'
                                    data-sso-auto-focus='true'
                                    onChange={this.handleChange}
                                />
                                <label htmlFor='password'>Passwort</label>
                            </div>
                            <div className='login-register-buttons'>
                                <input
                                    type='submit'
                                    id='login'
                                    className='button button--confirm'
                                    style={{ minWidth: '77px' }}
                                    value='Einloggen'
                                />
                                <Link
                                    to='/register'
                                    id='register'
                                    className='button button--primary'
                                    style={{ minWidth: '77px' }}>
                                    Registrieren
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                {/* SDX JS */}
            </div>
        );
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };
}

const mapStateToProps = state => ({
    loggedin: state.loggedin
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => {
        dispatch(LOGIN_REQUESTED(username, password));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
