import React from 'react';

const Promotions = () => {
    return (
        <div className='box promotions'>
            <div className='auflistung'>
                <h4>Promotionen </h4>
                <ul className='list'>
                    <li className='single-line'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.swisscom.ch/de/privatkunden/zubehoer/sales_new/sales_detail_new.html/jbl-go-2-11030990?payOption=ONE_TIME&amp;useCase=HARDWAREONLY#tab%5Bselected%5D=0'>
                            JBL GO 2
                        </a>
                    </li>
                    <li className='single-line'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.swisscom.ch/de/privatkunden/mobile/devices_new.html?category=mobilePhones_RES&amp;sortCriteria=popularity#tab%5Bselected%5D=0'>
                            Sommer. Sonne. Sale.
                        </a>
                    </li>
                    <li className='single-line'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.swisscom.ch/de/privatkunden/sicherheit.html'>
                            Wir schützen Sie und Ihre Liebsten.
                        </a>
                    </li>
                    <li className='single-line'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://magazin.swisscom.ch/digitalisierung-im-alltag/gib-hackern-keine-chance/'>
                            Gib Hackern keine Chance
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Promotions;
