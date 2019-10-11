import React, { Component } from 'react';

class MySalesperformance extends Component {
    render() {
        return (
            <div className='container'>
                <div className='salesguy-picture-name-and-oe mysp'>
                    <div className='avatar'>
                        <img
                            src='https://sdx.swisscom.ch/theme-build/img/design/badges/221aa66daee90256353badc33955228b.jpeg'
                            alt='Image description'
                        />
                    </div>
                    <div className='salesguy-name-and-oe mysp'>
                        <div className='salesguy-name'>Baskin Serkan,</div>
                        <div className='salesguy-oe'>SAS-SRC-RE-SA1-NEU</div>
                    </div>
                </div>
                <div id='w-m-y-box'>
                    <div className='box salesguy weekly'>
                        <div className='label-w-m-y'>My Weekly Shop Performance</div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={4}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value='4.50' data-color='#25b252'>
                                        Mobile
                                    </div>
                                </div>
                                <div className='detail-left'>Mobile</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '112.27499999999999%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>5</div>
                                    <div className='value'>4</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='plusminus-buttons' style={{ display: 'none' }}>
                            <button className='add button button--confirm'>+</button>
                            <button className='delete button button--secondary'>-</button>
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={7}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={2} data-color='#25b252'>
                                        DSL &amp; TV
                                    </div>
                                </div>
                                <div className='detail-left'>DSL &amp; TV</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '28.514285714285712%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>2</div>
                                    <div className='value'>7</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='plusminus-buttons' style={{ display: 'none' }}>
                            <button className='add button button--confirm'>+</button>
                            <button className='delete button button--secondary'>-</button>
                        </div>
                        <div className='divider divider--mid-gray' />
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={1354}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={700} data-color='#25b252'>
                                        Zubehör
                                    </div>
                                </div>
                                <div className='detail-left'>Zubehör</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '51.595273264401776%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>700</div>
                                    <div className='value'>1354</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className='tnpsInputValues input-field zubehoer'
                            data-init='auto'
                            style={{ display: 'none' }}>
                            <input
                                className='inputForTnpsValues'
                                type='number'
                                min={0}
                                max={100}
                                maxLength={3}
                                id='value'
                            />
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={372}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={1} data-color='#25b252'>
                                        AOIT
                                    </div>
                                </div>
                                <div className='detail-left'>AOIT</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '0.2682795698924731%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>1</div>
                                    <div className='value'>372</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='tnpsInputValues input-field aoit' data-init='auto' style={{ display: 'none' }}>
                            <input
                                className='inputForTnpsValues'
                                type='number'
                                min={0}
                                max={100}
                                maxLength={3}
                                id='value'
                            />
                        </div>
                        <div className='divider divider--mid-gray' />
                        <div className='tnps-stats tnps-value-names' style={{ textAlign: 'left' }}>
                            <div style={{ fontWeight: 600 }}>
                                <div>
                                    <div className='imp-names'>ARPU - :</div>
                                    <div
                                        className='inp-personal inp-values total-weekly-personal-value-pplus'
                                        style={{}}>
                                        -1.00
                                    </div>
                                </div>
                                <div
                                    className='tnpsInputValues input-field arpuminus'
                                    data-init='auto'
                                    style={{ display: 'none' }}>
                                    <input className='inputForTnpsValues' type='number' id='value' />
                                </div>
                                <div>
                                    <div className='imp-names'>ARPU + :</div>
                                    <div
                                        className='inp-personal inp-values total-weekly-personal-value-pplus'
                                        style={{}}>
                                        8.00
                                    </div>
                                </div>
                                <div
                                    className='tnpsInputValues input-field arpuplus'
                                    data-init='auto'
                                    style={{ display: 'none' }}>
                                    <input className='inputForTnpsValues' type='number' id='value' />
                                </div>
                                <div className='imp personaltnps' style={{ marginBottom: '0px', display: 'none' }}>
                                    <div className='imp-names'>My tNPS:</div>
                                    <div
                                        className='tnpsInputValues input-field mytnps'
                                        data-init='auto'
                                        style={{ display: 'none' }}>
                                        <input
                                            className='inputForTnpsValues'
                                            type='number'
                                            min={0}
                                            max={100}
                                            id='value'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='divider divider--mid-gray' />
                            <div className='imp' style={{ marginBottom: '0px' }}>
                                <div className='imp-names'>Internet Security: </div>
                                <div
                                    className='inp-personal inp-values total-weekly-personal-value-isecurity'
                                    style={{}}>
                                    123
                                </div>
                                <div
                                    className='tnpsInputValues input-field internet'
                                    data-init='auto'
                                    style={{ display: 'none' }}>
                                    <input
                                        className='inputForTnpsValues isecurity is-fixed'
                                        type='number'
                                        min={0}
                                        id='value'
                                        disabled='disabled'
                                        defaultValue={0}
                                    />
                                    <div className='plusminus-buttons' style={{ display: 'none' }}>
                                        <button className='add button button--confirm'>+</button>
                                        <button className='delete button button--secondary'>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className='imp' style={{ marginBottom: '0px' }}>
                                <div className='imp-names'>My Service Abo: </div>
                                <div className='inp-personal inp-values total-weekly-personal-value-msabo' style={{}}>
                                    123
                                </div>
                                <div
                                    className='tnpsInputValues input-field myserviceabo'
                                    data-init='auto'
                                    style={{ display: 'none' }}>
                                    <input
                                        className='inputForTnpsValues myserviceabo is-fixed'
                                        type='number'
                                        min={0}
                                        id='value'
                                        disabled='disabled'
                                        defaultValue={0}
                                    />
                                    <div className='plusminus-buttons' style={{ display: 'none' }}>
                                        <button className='add button button--confirm'>+</button>
                                        <button className='delete button button--secondary'>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className='imp' style={{ marginBottom: '0px' }}>
                                <div className='imp-names'>Protection Plus: </div>
                                <div className='inp-personal inp-values total-weekly-personal-value-pplus' style={{}}>
                                    123
                                </div>
                                <div
                                    className='tnpsInputValues input-field protectionplus'
                                    data-init='auto'
                                    style={{ display: 'none' }}>
                                    <input
                                        className='inputForTnpsValues protectionplus is-fixed'
                                        type='number'
                                        min={0}
                                        id='value'
                                        disabled='disabled'
                                        defaultValue={0}
                                    />
                                    <div className='plusminus-buttons' style={{ display: 'none' }}>
                                        <button className='add button button--confirm'>+</button>
                                        <button className='delete button button--secondary'>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className='divider divider--mid-gray' />
                            <div>
                                <div className='imp-names'>Diagnosequote: </div>
                                <div className='inp-personal inp-values total-weekly-personal-value-pplus' style={{}}>
                                    70%
                                </div>
                            </div>
                            <div
                                className='tnpsInputValues input-field bne'
                                data-init='auto'
                                style={{ display: 'none' }}>
                                <input
                                    className='inputForTnpsValues'
                                    type='number'
                                    min={0}
                                    max={100}
                                    maxLength={3}
                                    id='value'
                                />
                            </div>
                            <div>
                                <div className='imp-names'>BNE :</div>
                                <div className='inp-personal inp-values total-weekly-personal-value-pplus' style={{}}>
                                    90%
                                </div>
                            </div>
                            <div
                                className='tnpsInputValues input-field bne'
                                data-init='auto'
                                style={{ display: 'none' }}>
                                <input
                                    className='inputForTnpsValues'
                                    type='number'
                                    min={0}
                                    max={100}
                                    maxLength={3}
                                    id='value'
                                />
                            </div>
                            <button
                                id='update-tnps-input-values'
                                className='button button--confirm'
                                style={{ display: 'none' }}>
                                {' '}
                                Update
                            </button>
                        </div>
                        <div className='divider divider--mid-gray' />
                        <div id='sales-data-edit'>
                            <div id='bearbeitung-ausblenden' className='switch switch--left' role='switch'>
                                <input type='checkbox' name='switch05' id='switch-05' />
                                <label htmlFor='switch-05'>Sales bearbeiten</label>
                            </div>
                        </div>
                    </div>
                    <div className='box salesguy'>
                        <div className='label-w-m-y'>My Monthly Shop Performance</div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={16}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={15} data-color='#25b252'>
                                        Mobile
                                    </div>
                                </div>
                                <div className='detail-left'>Mobile</div>
                                <div className='bar-chart__progress'>
                                    <div className='indicator-wrapper' style={{ width: '93.5625%' }} onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>15</div>
                                    <div className='value'>16</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={28}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={28} data-color='#25b252'>
                                        DSL &amp; TV
                                    </div>
                                </div>
                                <div className='detail-left'>DSL &amp; TV</div>
                                <div className='bar-chart__progress'>
                                    <div className='indicator-wrapper' style={{ width: '99.8%' }} onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>28</div>
                                    <div className='value'>28</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={5416}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={1100} data-color='#25b252'>
                                        Zubehör
                                    </div>
                                </div>
                                <div className='detail-left'>Zubehör</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '20.269571639586413%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>1100</div>
                                    <div className='value'>5416</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={1488}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={1000} data-color='#25b252'>
                                        AOIT
                                    </div>
                                </div>
                                <div className='detail-left'>AOIT</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '67.06989247311827%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>1000</div>
                                    <div className='value'>1488</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='divider divider--mid-gray' />
                        <div className='tnps-stats'>
                            <div>
                                <div className='imp-names'>Internet Security: </div>
                                <div className='inp-values total-monthly-personal-value-isecurity'>123</div>
                            </div>
                            <div>
                                <div className='imp-names'>My Service Abo: </div>
                                <div className='inp-values total-monthly-personal-value-msabo'>123</div>
                            </div>
                            <div>
                                <div className='imp-names'>Protection Plus: </div>
                                <div className='inp-values total-monthly-personal-value-pplus'>123</div>
                            </div>
                        </div>
                    </div>
                    <div className='box salesguy' style={{ marginBottom: '31px' }}>
                        <div className='label-w-m-y'>My Yearly Shop Performance</div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={192}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={180} data-color='#25b252'>
                                        Mobile
                                    </div>
                                </div>
                                <div className='detail-left'>Mobile</div>
                                <div className='bar-chart__progress'>
                                    <div className='indicator-wrapper' style={{ width: '93.5625%' }} onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>180</div>
                                    <div className='value'>192</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={336}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={200} data-color='#25b252'>
                                        DSL &amp; TV
                                    </div>
                                </div>
                                <div className='detail-left'>DSL &amp; TV</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '59.404761904761905%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>200</div>
                                    <div className='value'>336</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={64992}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={520} data-color='#25b252'>
                                        Zubehör
                                    </div>
                                </div>
                                <div className='detail-left'>Zubehör</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '0.7984982767109798%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>520</div>
                                    <div className='value'>64992</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg bg--light'>
                            <span className='sr-only'>out of</span>
                            <div
                                className='bar-chart-horizontal bar-chart-horizontal--limited'
                                data-init='auto'
                                data-max={17856}>
                                <div className='js-data-list'>
                                    <div className='js-data' data-value={100} data-color='#25b252'>
                                        AOIT
                                    </div>
                                </div>
                                <div className='detail-left'>AOIT</div>
                                <div className='bar-chart__progress'>
                                    <div
                                        className='indicator-wrapper'
                                        style={{ width: '0.558915770609319%' }}
                                        onclick='void(0)'>
                                        <div className='indicator' style={{ backgroundColor: 'rgb(37, 178, 82)' }} />
                                    </div>
                                </div>
                                <div className='detail-bottom'>
                                    <div className='value'>100</div>
                                    <div className='value'>17856</div>
                                    <div className='unit'> </div>
                                </div>
                            </div>
                        </div>
                        <div className='divider divider--mid-gray' />
                        <div className='tnps-stats'>
                            <div>
                                <div className='imp-names'>Internet Security: </div>
                                <div className='inp-values total-yearly-personal-value-isecurity'>123</div>
                            </div>
                            <div>
                                <div className='imp-names'>My Service Abo: </div>
                                <div className='inp-values total-yearly-personal-value-msabo'>123</div>
                            </div>
                            <div>
                                <div className='imp-names'>Protection Plus: </div>
                                <div className='inp-values total-yearly-personal-value-pplus'>123</div>
                            </div>
                        </div>
                        <div className='box shoptnps'>
                            <div className='tnps'>
                                <div>My tNPS</div>
                                <br />
                                <div className='tnps-value users-tnpsvalue'>90</div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default MySalesperformance;
