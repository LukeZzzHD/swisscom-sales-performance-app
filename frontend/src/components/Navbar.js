import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLinks from './admin/AdminLinks';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { LOGOUT } from '../actions/actionCreators';

class Navbar extends Component {
    render() {
        const { isAdmin, loggedin } = this.props;

        return (
            <div className='nav' data-init='auto' id='top'>
                <nav className='nav__level1' role='navigation'>
                    <div className='container'>
                        <div className='logo'>
                            <Link to='/' className='align-left' tabIndex='-1'>
                                <span className='logo-lifeform' aria-label='Swisscom Logo'></span>
                                <span className='logo-type'>
                                    <img
                                        src='https://sdx.swisscom.ch/sdx/images/svgs/swisscom-logo-type.svg'
                                        alt='swisscom logo'
                                    />
                                </span>
                            </Link>
                        </div>

                        {/*Mobile Menu*/}
                        <div className='sguide-menu nav__mainnav hidden-desktop-up hidden-tablet-up'>
                            <div className='nav__primary'>
                                {/*Level 1 Nav*/}
                                <ul className='nav-items'>
                                    {loggedin ? <SignedInLinks /> : <SignedOutLinks />}
                                    {isAdmin ? <AdminLinks /> : null}
                                </ul>
                            </div>

                            {/*Navburger*/}
                            <div className='nav__secondary'>
                                <ul className='nav-items'>
                                    <li className='nav-item hidden-tablet-up'>
                                        <button className='nav-icon nav-hamburger' aria-label='Menu'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*Mobile menu end*/}
                        <div className='nav__mainnav hidden-phone-down'>
                            <div className='nav__primary'>
                                <ul className='nav-items'>
                                    {loggedin ? <SignedInLinks /> : <SignedOutLinks />}
                                    {isAdmin ? <AdminLinks /> : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let isAdmin = false;
    if (state.user) {
        isAdmin = state.user.isAdmin;
    }
    return {
        isAdmin,
        loggedin: state.loggedin
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(LOGOUT);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
