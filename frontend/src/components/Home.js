import React from 'react';
import ShopPicture from './ShopPicture';
import Promotions from './Promotions';
import Calendar from './Calendar';
import Motivation from './Motivation';
import Tasks from './Tasks';
import Weekly from './Weekly';
import Monthly from './Monthly';
import Yearly from './Yearly';
import TNPS from './admin/TNPS';

const Home = () => {
    return (
        <div id='overall-informations'>
            <div className='container'>
                <ShopPicture />
                <Promotions />
                <Calendar />
                <Motivation />
                <Tasks />
                <Weekly />
                <Monthly />
                <Yearly />
                <TNPS />
            </div>
        </div>
    );
};

export default Home;
