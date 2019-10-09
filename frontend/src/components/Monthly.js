import React, { Component } from 'react';

// eslint-disable-next-line
import axios from 'axios';

class Monthly extends Component {
    state = {
        valueMobileMonthly: 0,
        valueDslAndTvMonthly: 0,
        valueAccessoryMonthly: 0,
        valueAOITMonthly: 0,
        valueInternetSecurityMonthly: 0,
        valueMyServiceAboMonthly: 0,
        valueProtectionPlusMonthly: 0,
        goalMobileMonthly: 104,
        goalDslAndTvMonthly: 172,
        goalAccessoryMonthly: 37308,
        goalAOITMonthly: 9576,
    };

    componentDidMount() {
        //get Monthly data from props and update state
        const { data } = this.props;
        this.setState({
            ...data,
        });
    }

    render() {
        const {
            valueMobileMonthly,
            valueDslAndTvMonthly,
            valueAccessoryMonthly,
            valueAOITMonthly,
            valueInternetSecurityMonthly,
            valueMyServiceAboMonthly,
            valueProtectionPlusMonthly,
            goalMobileMonthly,
            goalDslAndTvMonthly,
            goalAccessoryMonthly,
            goalAOITMonthly,
        } = this.state;

        let mobileWidth =
            (valueMobileMonthly / goalMobileMonthly < 1
                ? valueMobileMonthly / goalMobileMonthly
                : 1) * 100;

        let dslAndTvWidth =
            (valueDslAndTvMonthly / goalDslAndTvMonthly < 1
                ? valueDslAndTvMonthly / goalDslAndTvMonthly
                : 1) * 100;

        let accessoryWidth =
            (valueAccessoryMonthly / goalAccessoryMonthly < 1
                ? valueAccessoryMonthly / goalAccessoryMonthly
                : 1) * 100;

        let aoitWidth =
            (valueAOITMonthly / goalAOITMonthly < 1
                ? valueAOITMonthly / goalAOITMonthly
                : 1) * 100;

        return (
            <div className="box salesguy">
                <div className="label-w-m-y">Monthly Shop Performance</div>
                <div className="bg bg--light">
                    <span className="sr-only">out of</span>
                    <div className="bar-chart-horizontal bar-chart-horizontal--limited">
                        <div className="js-data-list">
                            <div className="js-data">Mobile</div>
                        </div>
                        <div className="detail-left">Mobile</div>
                        <div className="bar-chart__progress">
                            <div
                                className="indicator-wrapper"
                                style={{ width: mobileWidth + '%' }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueMobileMonthly}</div>
                            <div className="value">{goalMobileMonthly}</div>
                            <div className="unit"> </div>
                        </div>
                    </div>
                </div>
                <div className="bg bg--light">
                    <span className="sr-only">out of</span>
                    <div className="bar-chart-horizontal bar-chart-horizontal--limited">
                        <div className="js-data-list">
                            <div className="js-data">DSL &amp; TV</div>
                        </div>
                        <div className="detail-left">DSL &amp; TV</div>
                        <div className="bar-chart__progress">
                            <div
                                className="indicator-wrapper"
                                style={{ width: dslAndTvWidth + '%' }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueDslAndTvMonthly}</div>
                            <div className="value">{goalDslAndTvMonthly}</div>
                            <div className="unit"> </div>
                        </div>
                    </div>
                </div>
                <div className="bg bg--light">
                    <span className="sr-only">out of</span>
                    <div className="bar-chart-horizontal bar-chart-horizontal--limited">
                        <div className="js-data-list">
                            <div className="js-data">Zubehör</div>
                        </div>
                        <div className="detail-left">Zubehör</div>
                        <div className="bar-chart__progress">
                            <div
                                className="indicator-wrapper"
                                style={{ width: accessoryWidth + '%' }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueAccessoryMonthly}</div>
                            <div className="value">{goalAccessoryMonthly}</div>
                            <div className="unit"> </div>
                        </div>
                    </div>
                </div>
                <div className="bg bg--light">
                    <span className="sr-only">out of</span>
                    <div className="bar-chart-horizontal bar-chart-horizontal--limited">
                        <div className="js-data-list">
                            <div className="js-data">AOIT</div>
                        </div>
                        <div className="detail-left">AOIT</div>
                        <div className="bar-chart__progress">
                            <div
                                className="indicator-wrapper"
                                style={{ width: aoitWidth + '%' }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueAOITMonthly}</div>
                            <div className="value">{goalAOITMonthly}</div>
                            <div className="unit"> </div>
                        </div>
                    </div>
                </div>
                <div className="divider divider--mid-gray" />
                <div className="tnps-stats">
                    <div>
                        Internet Security:{' '}
                        <div className="inp-values total-Monthly-value-isecurity">
                            {valueInternetSecurityMonthly}
                        </div>
                    </div>
                    <div>
                        My Service Abo:{' '}
                        <div className="inp-values total-monthly-value-msabo">
                            {valueMyServiceAboMonthly}
                        </div>
                    </div>
                    <div>
                        Protection Plus:{' '}
                        <div className="inp-values total-monthly-value-pplus">
                            {valueProtectionPlusMonthly}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Monthly;
