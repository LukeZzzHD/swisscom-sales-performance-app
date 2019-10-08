import React from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <>
            <li className='nav-item' to='weekly.html'>
                <Link to='/weekly' className='nav-link nav-link--header'>
                    <span>Weekly Performers</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/monthly' className='nav-link nav-link--header'>
                    <span>Monthly Performers</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/yearly' className='nav-link nav-link--header'>
                    <span>Yearly Performers</span>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/admin' className='nav-link nav-link--header'>
                    <span>Admin</span>
                </Link>
            </li>
        </>
    );
};

export default AdminLinks;
