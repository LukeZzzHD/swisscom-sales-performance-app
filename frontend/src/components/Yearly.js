import React, { Component } from 'react';

class Yearly extends Component {
    state = {
        valueMobileYearly: 0,
        valueDslAndTvYearly: 0,
        valueAccessoryYearly: 0,
        valueAOITYearly: 0,
        valueInternetSecurityYearly: 0,
        valueMyServiceAboYearly: 0,
        valueProtectionPlusYearly: 0,
        goalMobileYearly: 104,
        goalDslAndTvYearly: 172,
        goalAccessoryYearly: 37308,
        goalAOITYearly: 9576,
    };
    componentDidMount() {
        //get Yearly data from props and update state
        const { data } = this.props;
        this.setState({
            ...data,
        });
    }

    render() {
        const {
            valueMobileYearly,
            valueDslAndTvYearly,
            valueAccessoryYearly,
            valueAOITYearly,
            valueInternetSecurityYearly,
            valueMyServiceAboYearly,
            valueProtectionPlusYearly,
            goalMobileYearly,
            goalDslAndTvYearly,
            goalAccessoryYearly,
            goalAOITYearly,
        } = this.state;

        let mobileWidth =
            (valueMobileYearly / goalMobileYearly < 1
                ? valueMobileYearly / goalMobileYearly
                : 1) * 100;

        let dslAndTvWidth =
            (valueDslAndTvYearly / goalDslAndTvYearly < 1
                ? valueDslAndTvYearly / goalDslAndTvYearly
                : 1) * 100;

        let accessoryWidth =
            (valueAccessoryYearly / goalAccessoryYearly < 1
                ? valueAccessoryYearly / goalAccessoryYearly
                : 1) * 100;

        let aoitWidth =
            (valueAOITYearly / goalAOITYearly < 1
                ? valueAOITYearly / goalAOITYearly
                : 1) * 100;

        return (
            <div className="box salesguy">
                <div className="label-w-m-y">Yearly Shop Performance</div>
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
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueMobileYearly}</div>
                            <div className="value">{goalMobileYearly}</div>
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
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueDslAndTvYearly}</div>
                            <div className="value">{goalDslAndTvYearly}</div>
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
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueAccessoryYearly}</div>
                            <div className="value">{goalAccessoryYearly}</div>
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
                                />
                            </div>
                        </div>
                        <div className="detail-bottom">
                            <div className="value">{valueAOITYearly}</div>
                            <div className="value">{goalAOITYearly}</div>
                            <div className="unit"> </div>
                        </div>
                    </div>
                </div>
                <div className="divider divider--mid-gray" />
                <div className="tnps-stats">
                    <div>
                        Internet Security:
                        <div className="inp-values total-weekly-value-isecurity">
                            {valueInternetSecurityYearly}
                        </div>
                    </div>
                    <div>
                        My Service Abo:{' '}
                        <div className="inp-values total-yearly-value-msabo">
                            {valueMyServiceAboYearly}
                        </div>
                    </div>
                    <div>
                        Protection Plus:
                        <div className="inp-values total-yearly-value-pplus">
                            {valueProtectionPlusYearly}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Yearly;
