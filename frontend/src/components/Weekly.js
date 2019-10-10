import React, { Component } from 'react';

class Weekly extends Component {
    state = {
        goalMobileWeekly: 104,
        goalDslAndTvWeekly: 172,
        goalAccessoryWeekly: 37308,
        goalAOITWeekly: 9576,
    };

    render() {
        const {
            valueMobileWeekly,
            valueDslAndTvWeekly,
            valueAccessoryWeekly,
            valueAOITWeekly,
            valueInternetSecurityWeekly,
            valueMyServiceAboWeekly,
            valueProtectionPlusWeekly,
        } = this.props.data;

        const {
            goalMobileWeekly,
            goalDslAndTvWeekly,
            goalAccessoryWeekly,
            goalAOITWeekly,
        } = this.state;

        let mobileWidth =
            (valueMobileWeekly / goalMobileWeekly < 1
                ? valueMobileWeekly / goalMobileWeekly
                : 1) * 100;

        let dslAndTvWidth =
            (valueDslAndTvWeekly / goalDslAndTvWeekly < 1
                ? valueDslAndTvWeekly / goalDslAndTvWeekly
                : 1) * 100;

        let accessoryWidth =
            (valueAccessoryWeekly / goalAccessoryWeekly < 1
                ? valueAccessoryWeekly / goalAccessoryWeekly
                : 1) * 100;

        let aoitWidth =
            (valueAOITWeekly / goalAOITWeekly < 1
                ? valueAOITWeekly / goalAOITWeekly
                : 1) * 100;

        return (
            <div className="box salesguy">
                <div className="label-w-m-y">Weekly Shop Performance</div>
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
                                style={{
                                    width: mobileWidth + '%',
                                }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueMobileWeekly}</div>
                            <div className="value">{goalMobileWeekly}</div>
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
                                style={{
                                    width: dslAndTvWidth + '%',
                                }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueDslAndTvWeekly}</div>
                            <div className="value">{goalDslAndTvWeekly}</div>
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
                                style={{
                                    width: accessoryWidth + '%',
                                }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueAccessoryWeekly}</div>
                            <div className="value">{goalAccessoryWeekly}</div>
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
                                style={{
                                    width: aoitWidth + '%',
                                }}
                            >
                                <div
                                    className="indicator"
                                    style={{
                                        backgroundColor: 'rgb(37, 178, 82)',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueAOITWeekly}</div>
                            <div className="value">{goalAOITWeekly}</div>
                            <div className="unit"> </div>
                        </div>
                    </div>
                </div>
                <div className="divider divider--mid-gray"></div>

                <div className="tnps-stats">
                    <div>
                        Internet Security:
                        <div className="inp-values total-weekly-value-isecurity">
                            {valueInternetSecurityWeekly}
                        </div>
                    </div>
                    <div>
                        My Service Abo:{' '}
                        <div className="inp-values total-weekly-value-msabo">
                            {valueMyServiceAboWeekly}
                        </div>
                    </div>
                    <div>
                        Protection Plus:
                        <div className="inp-values total-weekly-value-pplus">
                            {valueProtectionPlusWeekly}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weekly;
