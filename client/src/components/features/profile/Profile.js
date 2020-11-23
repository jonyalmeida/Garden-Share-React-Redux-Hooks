import React, { useReducer } from "react";

import chicken from "../../../public/images/e91e3704962a9a62d44fcfdca5a5d23e.jpg";
import trade from "../../../public/images/trade.png";

export default function Profile({ user }) {
    console.log(user);

    return (
        <div className='profile'>
            <div className='profile--dashboard'>
                <div className='profile--dashboard-personal'>
                    <img
                        className='profile--dashboard-personal_img'
                        src={chicken}
                        alt='profile img'
                    />
                    <h3 className='profile--dashboard-personal_title'>
                        {user.firstName}
                    </h3>
                    <p>
                        Here will be more information
                        <br /> about the user.
                        <br />
                        address
                        <br />
                        city
                        <br />
                        preferences
                        <br />
                    </p>
                </div>
                <div className='profile--dashboard-nav'>
                    <div className='profile--dashboard-nav_item'>
                        Trade
                        <img src={trade} alt='trade' className='icons-img' />
                    </div>
                    <div className='profile--dashboard-nav_item'>Messages</div>
                    <div className='profile--dashboard-nav_item'>My offers</div>
                    <div className='profile--dashboard-nav_item'>
                        Preferences
                    </div>
                </div>
            </div>
            <h1>content</h1>
        </div>
    );
}
