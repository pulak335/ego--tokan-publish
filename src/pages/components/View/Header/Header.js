import React, { useEffect, useState } from 'react';
import Navber from '../../common/Navber';
import './Header.css';
// import Clock from '../../common/Clock';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import bdd from "../../../../assets/bg-imgae/bd.png"



const Header = () => {
    const [trading, setTrading] = useState('')

    let date = new Date()

    const days = date.getDay().toLocaleString('en-US', {
        timeZone: 'America/New_York',
    })

    useEffect(() => {
        // if (days == 1 || days == 7) {
        //     setTrading('Close')
        // }
        // else {
        setInterval(() => {
            let date = new Date()
            let Hours = date.toLocaleString('en-US', {
                timeZone: 'America/New_York',
                hour: '2-digit',
                hour12: false
            })

            if (Hours >= 9 && Hours < 16) {
                setTrading('Open')
            }
            else {
                setTrading('Close')
            }

        }, 1000);
        // }
    }, []);

    useEffect(() => {

        AOS.init({ duration: 3000 });

    }, [])

    return (
        <div className='header-bg'>
            {/* <div className="imgD">
                <img src={bdd} alt="yes" />
            </div> */}
            <div className="container">
                <div className="header-container">

                    <Navber />

                    <div className="header-title ">
                        <h2 className='trading-text'>Trading {trading} </h2>

                        <h1>A decentralized,<br /> <span>self-sustaining financial</span> organization </h1>
                        <h3>focused on securing investors’ financial freedom. </h3>
                        <div className='d-flex justify-content-center'>
                            <a href='https://ego-1.gitbook.io/ego/' target="_blank" className='btn-base'>Knowledge Base</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;