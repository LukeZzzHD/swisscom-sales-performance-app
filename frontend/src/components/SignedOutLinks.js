import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <>
            <li className='nav-item'>
                <Link to='/login' className='nav-link nav-link--header'>
                    <span>Login</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/register' className='nav-link nav-link--header'>
                    <span>Register</span>
                </Link>
            </li>
        </>
    );
};

export default SignedOutLinks;
