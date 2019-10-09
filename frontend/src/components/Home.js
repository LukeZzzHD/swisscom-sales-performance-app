import React from 'react';
import ShopPicture from './ShopPicture';
import Promotions from './Promotions';
import Calendar from './Calendar';
import Motivation from './Motivation';
import Tasks from './Tasks';
import PerformanceWrapper from './wrappers/PerformanceWrapper';
import TNPS from './admin/TNPS';

const Home = () => {
    return (
        <div id="overall-informations">
            <div className="container">
                <ShopPicture />
                <Promotions />
                <Calendar />
                <Motivation />
                <Tasks />
                <PerformanceWrapper />
                <TNPS />
            </div>
        </div>
    );
};

export default Home;
