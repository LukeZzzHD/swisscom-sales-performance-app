import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <>
            <li className='nav-item'>
                <Link to='/' className='nav-link nav-link--header'>
                    <span>Shop Dashboard</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/mysalesperformance' className='nav-link nav-link--header'>
                    <span>My Sales Performance</span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/myprofile' className='nav-link nav-link--header'>
                    <span>Mein Profil</span>
                </Link>
            </li>
        </>
    );
};

export default SignedInLinks;
