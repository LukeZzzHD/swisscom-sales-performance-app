import React, { Component } from 'react';

class Yearly extends Component {
    state = {
        mobileValue: 13,
        mobileGoal: 104,
        dslandtvValue: 12,
        dslandtvGoal: 172,
        zubehoerValue: 1000,
        zubehoerGoal: 37308,
        aoitValue: 270,
        aoitGoal: 9576,
        internetSecurityValue: 123,
        myServiceAboValue: 123,
        protectionPlusValue: 123
    };
    componentDidMount() {
        //fetch yearly data from backend api with axios
    }

    render() {
        const {
            mobileValue,
            mobileGoal,
            dslandtvValue,
            dslandtvGoal,
            zubehoerValue,
            zubehoerGoal,
            aoitValue,
            aoitGoal,
            internetSecurityValue,
            myServiceAboValue,
            protectionPlusValue
        } = this.state;

        return (
            <div className='box salesguy'>
                <div className='label-w-m-y'>Yearly Shop Performance</div>
                <div className='bg bg--light'>
                    <span className='sr-only'>out of</span>
                    <div className='bar-chart-horizontal bar-chart-horizontal--limited'>
                        <div className='js-data-list'>
                            <div className='js-data'>Mobile</div>
                        </div>
                        <div className='detail-left'>Mobile</div>
                        <div className='bar-chart__progress'>
                            <div
                                className='indicator-wrapper'
                                style={{ width: (mobileValue / mobileGoal) * 100 + '%' }}>
                                <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                            </div>
                        </div>
                        <div className='detail-bottom'>
                            <div className='value'>{mobileValue}</div>
                            <div className='value'>{mobileGoal}</div>
                            <div className='unit'> </div>
                        </div>
                    </div>
                </div>
                <div className='bg bg--light'>
                    <span className='sr-only'>out of</span>
                    <div className='bar-chart-horizontal bar-chart-horizontal--limited'>
                        <div className='js-data-list'>
                            <div className='js-data'>DSL &amp; TV</div>
                        </div>
                        <div className='detail-left'>DSL &amp; TV</div>
                        <div className='bar-chart__progress'>
                            <div
                                className='indicator-wrapper'
                                style={{ width: (dslandtvValue / dslandtvGoal) * 100 + '%' }}>
                                <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                            </div>
                        </div>
                        <div className='detail-bottom'>
                            <div className='value'>{dslandtvValue}</div>
                            <div className='value'>{dslandtvGoal}</div>
                            <div className='unit'> </div>
                        </div>
                    </div>
                </div>
                <div className='bg bg--light'>
                    <span className='sr-only'>out of</span>
                    <div className='bar-chart-horizontal bar-chart-horizontal--limited'>
                        <div className='js-data-list'>
                            <div className='js-data'>Zubehör</div>
                        </div>
                        <div className='detail-left'>Zubehör</div>
                        <div className='bar-chart__progress'>
                            <div
                                className='indicator-wrapper'
                                style={{ width: (zubehoerValue / zubehoerGoal) * 100 + '%' }}>
                                <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                            </div>
                        </div>
                        <div className='detail-bottom'>
                            <div className='value'>{zubehoerValue}</div>
                            <div className='value'>{zubehoerGoal}</div>
                            <div className='unit'> </div>
                        </div>
                    </div>
                </div>
                <div className='bg bg--light'>
                    <span className='sr-only'>out of</span>
                    <div className='bar-chart-horizontal bar-chart-horizontal--limited'>
                        <div className='js-data-list'>
                            <div className='js-data'>AOIT</div>
                        </div>
                        <div className='detail-left'>AOIT</div>
                        <div className='bar-chart__progress'>
                            <div className='indicator-wrapper' style={{ width: (aoitValue / aoitGoal) * 100 + '%' }}>
                                <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                            </div>
                        </div>
                        <div className='detail-bottom'>
                            <div className='value'>{aoitValue}</div>
                            <div className='value'>{aoitGoal}</div>
                            <div className='unit'> </div>
                        </div>
                    </div>
                </div>
                <div className='divider divider--mid-gray' />
                <div className='tnps-stats'>
                    <div>
                        Internet Security:
                        <div className='inp-values total-weekly-value-isecurity'>{internetSecurityValue}</div>
                    </div>
                    <div>
                        My Service Abo: <div className='inp-values total-yearly-value-msabo'>{myServiceAboValue}</div>
                    </div>
                    <div>
                        Protection Plus:
                        <div className='inp-values total-yearly-value-pplus'>{protectionPlusValue}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Yearly;
