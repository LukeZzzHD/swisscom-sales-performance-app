import React, { Component } from 'react';
import axios from 'axios';
import API from '../../api';
import Weekly from '../Weekly';
import Monthly from '../Monthly';
import Yearly from '../Yearly';

class PerformanceWrapper extends Component {
    state = {
        valueMobileWeekly: 0,
        valueMobileMonthly: 0,
        valueMobileYearly: 0,
        valueDslAndTvWeekly: 0,
        valueDslAndTvMonthly: 0,
        valueDslAndTvYearly: 0,
        valueAccessoryWeekly: 0,
        valueAccessoryMonthly: 0,
        valueAccessoryYearly: 0,
        valueAOITWeekly: 0,
        valueAOITMonthly: 0,
        valueAOITYearly: 0,
        valueInternetSecurityWeekly: 0,
        valueInternetSecurityMonthly: 0,
        valueInternetSecurityYearly: 0,
        valueMyServiceAboWeekly: 0,
        valueMyServiceAboMonthly: 0,
        valueMyServiceAboYearly: 0,
        valueProtectionPlusWeekly: 0,
        valueProtectionPlusMonthly: 0,
        valueProtectionPlusYearly: 0,
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        let data = { token };
        let config = {
            'Content-Type': 'application/json',
        };
        axios
            .post(API.SALESPERFORMANCE.ALL_PERFORMANCES, data, config)
            .then(res => {
                if (res.data.ok) {
                    this.filterPerformanceData(res.data.performances);
                } else {
                    console.log(res.data.message);
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state);

        let {
            valueMobileWeekly,
            valueMobileMonthly,
            valueMobileYearly,
            valueDslAndTvWeekly,
            valueDslAndTvMonthly,
            valueDslAndTvYearly,
            valueAccessoryWeekly,
            valueAccessoryMonthly,
            valueAccessoryYearly,
            valueAOITWeekly,
            valueAOITMonthly,
            valueAOITYearly,
            valueInternetSecurityWeekly,
            valueInternetSecurityMonthly,
            valueInternetSecurityYearly,
            valueMyServiceAboWeekly,
            valueMyServiceAboMonthly,
            valueMyServiceAboYearly,
            valueProtectionPlusWeekly,
            valueProtectionPlusMonthly,
            valueProtectionPlusYearly,
        } = this.state;

        console.log(valueMobileWeekly, valueMobileMonthly, valueMobileYearly);

        let weeklyData = {
            valueMobileWeekly,
            valueDslAndTvWeekly,
            valueAccessoryWeekly,
            valueAOITWeekly,
            valueInternetSecurityWeekly,
            valueMyServiceAboWeekly,
            valueProtectionPlusWeekly,
        };

        console.log(weeklyData);

        let monthlyData = {
            valueMobileMonthly,
            valueDslAndTvMonthly,
            valueAccessoryMonthly,
            valueAOITMonthly,
            valueInternetSecurityMonthly,
            valueMyServiceAboMonthly,
            valueProtectionPlusMonthly,
        };

        let yearlyData = {
            valueMobileYearly,
            valueDslAndTvYearly,
            valueAccessoryYearly,
            valueAOITYearly,
            valueInternetSecurityYearly,
            valueMyServiceAboYearly,
            valueProtectionPlusYearly,
        };

        return (
            <>
                <Weekly data={weeklyData} />
                <Monthly data={monthlyData} />
                <Yearly data={yearlyData} />
            </>
        );
    }

    filterPerformanceData = data => {
        data.forEach(spo => {
            switch (spo.name) {
                case 'mobile':
                    this.calculatePerformanceValues(
                        spo.performances,
                        'valueMobile',
                    );
                    break;
                case 'dslandtv':
                    this.calculatePerformanceValues(
                        spo.performances,
                        'valueDslAndTv',
                    );
                    break;
                case 'accessory':
                    this.calculatePerformanceValues(
                        spo.performances,
                        'valueAccessory',
                    );
                    break;
                case 'aoit':
                    break;
                case 'internetsecurity':
                    this.calculatePerformanceValues(
                        spo.performances,
                        'valueAOIT',
                    );
                    break;
                case 'myserviceabo':
                    this.calculatePerformanceValues(
                        spo.performances,
                        'valueMyServiceAbo',
                    );
                    break;
                case 'protectionplus':
                    this.calculatePerformanceValues(
                        spo.performances,
                        'valueProtectionPlus',
                    );
                    break;

                default:
                    console.log(
                        `Performance with name ${spo.name} does not exist, check the db and delete it!`,
                    );
                    break;
            }
        });
    };

    calculatePerformanceValues = (performances, stateName) => {
        performances.forEach(performance => {
            let { date } = performance;
            date = new Date(date);
            let now = new Date();
            now = now.getTime();
            date = date.getTime();
            let ms_diff = now - date;
            console.log(ms_diff);
            let daysBetween = Math.round(ms_diff / 1000 / 60 / 60 / 24);
            console.log(daysBetween);
            if (daysBetween <= 365) {
                console.log('daysBetween is smaller tha 365');
                console.log(
                    `Setting state property ${stateName}Yearly to ${this.state[
                        `${stateName}Yearly`
                    ] + 1}`,
                );

                this.setState({
                    [`${stateName}Yearly`]:
                        this.state[`${stateName}Yearly`] + 1,
                });
                if (daysBetween <= 31) {
                    this.setState({
                        [`${stateName}Monthly`]:
                            this.state[`${stateName}Monthly`] + 1,
                    });
                    if (daysBetween <= 7) {
                        this.setState({
                            [`${stateName}Weekly`]:
                                this.state[`${stateName}Weekly`] + 1,
                        });
                    }
                }
            } else {
                // SPO is older than 1 year and can be deleted
                console.log(
                    `SPO performance entry is ${daysBetween} days old and can be deleted!`,
                );
            }
        });
    };
}

export default PerformanceWrapper;
